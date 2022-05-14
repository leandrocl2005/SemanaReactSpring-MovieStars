from dataclasses import fields
from rest_framework.serializers import ModelSerializer
from moviescore.models import Movie

class MovieSerializer(ModelSerializer):

  class Meta:
    model = Movie
    fields = '__all__'