from django.shortcuts import render
from .serializers import *
from rest_framework import viewsets      
# Create your views here.
from django.http import HttpResponse

def index(request):
    return render(request, 'index.html', {})

