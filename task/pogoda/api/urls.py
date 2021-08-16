from django.urls import path



from rest_framework import routers
from .views import WeatherViewSet

router = routers.SimpleRouter()
router.register('weather', WeatherViewSet, basename = 'weather')
 

urlpatterns = []

urlpatterns += router.urls