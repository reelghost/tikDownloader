from django.urls import path
from .views import get_video_data


urlpatterns = [
    path('get-tik-data', get_video_data, name='get-tik-data'),
]