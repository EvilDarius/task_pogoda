from django.contrib import admin
from .models import Weather

# Register your models here.
class WeatherAdmin(admin.ModelAdmin):
    list = ('dateOfWeatherSummary', 'atmospherePressure', 'humidity')

admin.site.register(Weather,WeatherAdmin)