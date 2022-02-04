# -------------- Libraries ---------------------------
from rest_framework.serializers import ModelSerializer
# -------------- own files ---------------------------
from .models import Mental, Physical
# ------------------ Copyright ----------------------------------
__author__ = "Danny Sequeira"
__copyright__ = "Copyright (C) Danny Sequeira 2022"
# ------------ Models --------------------------------
class MentalSerializer(ModelSerializer):
    class Meta:
        model = Mental
        fields = '__all__'

class PhysicalSerializer(ModelSerializer):
    class Meta:
        model = Physical
        fields = '__all__'