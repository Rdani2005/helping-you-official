# ------------------------ Libraries -------------------------
from django.urls import path
# ---------------------- Own Files -----------------------------
from . import views
# ------------------ Copyright ----------------------------------
__author__ = "Danny Sequeira"
__copyright__ = "Copyright (C) Danny Sequeira 2022"
# ------------------ URLs ------------------------------------------------
# TODO: Add all the API Urls
urlpatterns = [
   # Get the routes for the Excersises API
   path('', views.getRoutes, name="routes"),
   # Get the mind exercises API
   path('mental-excersises/', views.getMentalExercises, name="mind-exercises"),
   # Get the mind physical API  
   path('physical-excersises/', views.getPhysicalExercises, name="physical-excersises"),
   # Get the mind exercise API
   path('mental-excersises/excercise/<str:pk>/', views.getMentalExcercise, name="mind-exercise"),
   # Get the physical exercise API
   path('physical-excersises/excercise/<str:pk>/', views.getPhysicalExcercise, name="physical-exercise"),
]