from django.db import models

# Create your models here.
class UserBlogs(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField(max_length=155)
    content = models.TextField(max_length=255)
    user = models.TextField(max_length=255)

