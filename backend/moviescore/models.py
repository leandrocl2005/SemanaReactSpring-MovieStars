from django.contrib.auth.models import User
from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

class Movie(models.Model):
    title = models.CharField(max_length=64)
    image = models.CharField(max_length=555)
    count = models.IntegerField(default=0)
    score = models.FloatField(blank=True, null=True)

    def __str__(self):
      return self.title

    class Meta:
      order_with_respect_to  = 'title'
    
class Score(models.Model):
    movie = models.ForeignKey(Movie, 
      on_delete=models.CASCADE, related_name="ratings")
    user = models.ForeignKey(User, 
      on_delete=models.CASCADE, related_name="ratings")
    score = models.FloatField(validators=[
      MinValueValidator(0), MaxValueValidator(5)])
    
    def __str__(self):
      return self.movie.title + ": " + str(self.score)
