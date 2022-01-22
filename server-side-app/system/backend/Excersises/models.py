from django.db import models

# Create your models here.

class Mental(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField(max_length=50, blank=True, null=True)
    content = models.TextField(max_length=50)
    creator = models.CharField(max_length=50)


class Physical(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField(max_length=50, blank=True, null=True)
    content = models.TextField(max_length=50)
    creator = models.CharField(max_length=50)