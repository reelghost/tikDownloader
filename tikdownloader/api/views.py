from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializer import UserSerializer
import requests



@api_view(['POST'])
def get_video_data(request):
    user_input = request.data.get("url")
    tik_url = f"https://tikwm.com/api/?url={user_input}"

    response = requests.get(tik_url)
    if response.status_code == 200:
        data = response.json()
        return Response(data, status=status.HTTP_200_OK)
    else:
        return Response({'error': 'Failed to retrieve data'}, status=response.status_code)