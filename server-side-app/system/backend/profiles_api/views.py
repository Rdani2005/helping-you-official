from rest_framework.views import APIView
from rest_framework.response import Response

from rest_framework import status 
from profiles_api import serializers


class HelloApiView(APIView):
    serializer_class = serializers.HelloSerializer


    """ API View for testing """
    def get(self, request, format=None):
        """Return caracteristics from ApiView"""
        an_apiview = {
            "Using methods http as functions",
            "Similar to an view in Django",
            "Gives us the control about the logic of our app",
            "Maped to URLs"
        }

        return Response({'message': 'Hello World', 'an_apiview': an_apiview})

    def post(self, request):
        """ Create a message with our name """
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            name = serializer.validated_data.get('name')
            message = f'Hello {name}'
            return Response({'message': message})
        else:
            return Response(
                serializer.errors,
                status=status.HTTP_400_BAD_REQUEST
            )

    def put(self, request, pk=None):
        """ Update an object """
        return Response({"method": "PUT"})

    def patch(self, request, pk=None):
        """ Partial update from an object """

        return Response({'method': 'PATCH'})

    def delete(self, request, pk=None):
        """ Delete an object """
        return Response({'method': 'DELETE'})
