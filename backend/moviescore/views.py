from django.views.decorators.http import require_http_methods
from django.contrib.auth.models import User
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.exceptions import ValidationError
import json

from rest_framework import viewsets, mixins 
from rest_framework import filters

from moviescore.pagination import CustomPagination

from moviescore.serializers import MovieSerializer
from moviescore.models import Movie, Score


# Create your views here.
class MovieViewSet(
  mixins.ListModelMixin, 
  mixins.RetrieveModelMixin,
  viewsets.GenericViewSet
):
  queryset = Movie.objects.all()
  serializer_class = MovieSerializer
  pagination_class = CustomPagination
  filter_backends = [filters.OrderingFilter]
  ordering_fields = ['title', ]

@require_http_methods(["POST"])
@csrf_exempt
def create_score(request):
  body = json.loads(request.body.decode('utf-8'))
  user_email = body.get('email')
  movie_id = body.get('movieId')
  score = body.get('score')

  try:
    movie = Movie.objects.get(
      id=movie_id)
  except Movie.DoesNotExist:
    return JsonResponse({'error': "Movie doesn't exist."})

  user_exists = User.objects.filter(
    email=user_email).exists()

  if not user_exists:
    user = User.objects.create_user(
      username=user_email.split('@')[0], 
      email=user_email,
      password='Ro0+1234')
  else:
    user = User.objects.filter(
      email=user_email).first()

  score = Score(movie=movie, user=user, score=score)
  try:
      score.full_clean()
  except ValidationError:
      return JsonResponse({'error': 'Invalid data input.'})
  score.save()

  # update mean score and count
  all_movie_scores = Score.objects.filter(movie=movie)
  all_movie_scores_values = [
    ams.score for ams in all_movie_scores]
  mean_movie_score = sum(all_movie_scores_values) / len(all_movie_scores_values)
  movie.count += 1
  movie.score = mean_movie_score
  movie.save()

  response = HttpResponse()
  response.status_code = 201
  return response



