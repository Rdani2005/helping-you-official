# ------------ Libraries --------------------------
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
# ------------ Own Files --------------------------
from .models import Blog
from .serializers import BlogSerializer
# ------------------ Copyright ----------------------------------
__author__ = "Danny Sequeira"
__copyright__ = "Copyright (C) Danny Sequeira 2022"

# ------------- API Routes ------------------------
# Method to look the diferent routes
@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'endpoint':'/blogs/',
            'methods': 'GET, POST',
            'body': None,
            'Description': 'Returns an array of notes, and creates new blogs'
        },
        {
            'endpoint': '/blog/id',
            'methods': 'GET, PUT, DELETE',
            'body': None,
            'Description': 'Returns the blog, and Updates the blog, and delete the blog'
        }

    ]
    return Response(routes)
# API to create and look for blogs
@api_view(['GET', 'POST'])
def getCreateBlog(request):
    # Create the blog
    if request.method == 'POST':
        data = request.data
        blog = Blog.objects.create(
            title=data['title'],
            content = data['content'],
            author=data['author']
        )
        serializer = BlogSerializer(blog, many=False)
        return Response(serializer.data)
    # Get the blogs
    elif request.method == 'GET':
        blogs = Blog.objects.all().order_by('-updated')
        serializer = BlogSerializer(blogs, many=True)
        return Response(serializer.data)

# API to look for the blog, update or delete
@api_view(['GET', 'PUT', 'DELETE'])
def getDeleteUpdateBlog(request, pk):
    # Get the blog information
    blog = Blog.objects.get(id=pk)
    # Get the blog 
    if request.method == 'GET':
        serializer = BlogSerializer(blog, many=False)
        return Response(serializer.data)
    # Update the blog
    if request.method == 'PUT':
        data = request.data
        serializer = BlogSerializer(instance=blog, data=data)
        # Save the updated blog
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)
    # Delete the blog
    if request.method == 'DELETE':
        blog.delete()
        return Response("BLOG DELETED")