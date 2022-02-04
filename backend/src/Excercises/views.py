# ------------ Libraries --------------------------
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
# ------------ Own Files --------------------------
from .models import Mental, Physical
from .serializers import MentalSerializer, PhysicalSerializer
# ------------------ Copyright ----------------------------------
__author__ = "Danny Sequeira"
__copyright__ = "Copyright (C) Danny Sequeira 2022"
# ------------- API Routes ------------------------
# Method to look the diferent routes
@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'endpoint':'/mental-excersises/',
            'method': 'GET',
            'body': None,
            'Description': 'Returns an array of mental excersises'
        },
        {
            'endpoint': '/mental-excersises/excercise/id',
            'methods': 'GET',
            'body': None,
            'Description': 'Returns the mental excersise'
        }

    ]
    return Response(routes)
# API to create and look for blogs
@api_view(['GET'])
def getMentalExercises(request):
    mentals = Mental.objects.all().order_by('-updated')
    serializer = MentalSerializer(mentals, many=True)
    return Response(serializer.data)

# API to look for the blog, update or delete
@api_view(['GET'])
def getMentalExcercise(request, pk):
    # Get the blog information
    mental = Mental.objects.get(id=pk)
    serializer = MentalSerializer(mental, many=False)
    return Response(serializer.data)
    
