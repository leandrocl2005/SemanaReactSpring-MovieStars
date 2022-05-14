from django.contrib import admin
from moviescore.models import Movie, Score

# Register your models here.
@admin.register(Movie)
class MovieAdmin(admin.ModelAdmin):
  list_display = ("title", "count", "score")

@admin.register(Score)
class ScoreAdmin(admin.ModelAdmin):
  list_display = ("user", "movie", "score")