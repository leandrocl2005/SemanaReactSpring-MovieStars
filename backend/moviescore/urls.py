from django.urls import path, include
from moviescore.views import MovieViewSet, create_score

from rest_framework import routers
router = routers.DefaultRouter()
router.register('movies', MovieViewSet, basename='movies')

urlpatterns = [
    path('score/', create_score, name='create_score'),
    path('', include(router.urls)),
]