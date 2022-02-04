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
            'endpoint': '/mental-excersises/',
            'method': 'GET',
            'body': None,
            'Description': 'Returns an array of mental excersises'
        },
        {
            'endpoint': '/mental-excersises/excercise/id',
            'methods': 'GET',
            'body': None,
            'Description': 'Returns the mental excersise'
        },
        {
            'endpoint': '/physical-excersises/',
            'method': 'GET',
            'body': None,
            'Description': 'Returns an array of mental excersises'
        },
        {
            'endpoint': '/physical-excersises/excercise/id',
            'methods': 'GET',
            'body': None,
            'Description': 'Returns the mental excersise'
        }
    ]
    return Response(routes)
# API to get Mental exercises


@api_view(['GET'])
def getMentalExercises(request):
    mentals = Mental.objects.all().order_by('-updated')
    serializer = MentalSerializer(mentals, many=True)
    return Response(serializer.data)

# API to get the exactly mental exercise


@api_view(['GET'])
def getMentalExcercise(request, pk):
    # Get the blog information
    mental = Mental.objects.get(id=pk)
    serializer = MentalSerializer(mental, many=False)
    return Response(serializer.data)

# TODO: Add all the physical API views
# Get all the Physical exercise


@api_view(['GET'])
def getPhysicalExercises(request):
    physicals = Physical.objects.all().order_by('-updated')
    serializer = PhysicalSerializer(physicals, many=True)
    return Response(serializer.data)

# Gey an exactly physical exercise


@api_view(['GET'])
def getPhysicalExcercise(request, pk):
    # Get the physical exersise information
    physical = Physical.objects.get(id=pk)
    serializer = PhysicalSerializer(physical, many=False)
    return Response(serializer.data)
