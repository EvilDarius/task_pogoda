from rest_framework import viewsets
from rest_framework.response import Response


from .serializers import WeatherSerializer
from ..models import Weather

class WeatherViewSet(viewsets.ModelViewSet):

    queryset = Weather.objects.all()
    queryset = Weather.objects.order_by('dateOfWeatherSummary')
    serializer_class = WeatherSerializer
