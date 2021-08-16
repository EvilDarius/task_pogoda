from django.db import models

# Create your models here.
class Weather(models.Model):
    dateOfWeatherSummary = models.DateField(blank = False, null = False)
    temperature = models.IntegerField(blank = False, null = True)
    atmospherePressure = models.IntegerField(blank = False, null = False)
    humidity = models.IntegerField(blank = False, null = False)

    def _str_(self):
        return self.dateOfWeatherSummary
