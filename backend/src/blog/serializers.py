# -------------- Libraries ---------------------------
from rest_framework.serializers import ModelSerializer
# -------------- own files ---------------------------
from .models import Blog
# ------------------ Copyright ----------------------------------
__author__ = "Danny Sequeira"
__copyright__ = "Copyright (C) Danny Sequeira 2022"
# -------------------- Models --------------------------------
class BlogSerializer(ModelSerializer):
    class Meta:
        model = Blog
        fields = '__all__'