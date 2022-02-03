# ------------ Libraries --------------------------
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
# ------------ Own Files --------------------------
from .models import Blog
from .serializers import BlogSerializer

@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'endpoint':'/blogs/',
            'methods': 'GET, POST',
            'body': None,
            'Description': 'Returns an array of notes'
        }
    ]
    return Response(routes)