# -------------- Libraries -------------------------------
from django.contrib import admin
from django.urls import path, include
# ------------------ Copyright ----------------------------------
__author__ = "Danny Sequeira"
__copyright__ = "Copyright (C) Danny Sequeira 2022"
# ------------------------- urls ------------------------------
urlpatterns = [
    path('admin/', admin.site.urls),
    # API for user blog
    path('blog/api/', include('blog.urls')),
    path('exercise/api/', include('exercise.urls')),
    path('todos/api/', include('todos.urls')),
]
