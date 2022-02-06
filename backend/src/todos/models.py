# -------------------- Libraries --------------------------------
from django.db import models
from django.utils.translation import gettext_lazy as _
# ------------------ Copyright ----------------------------------
__author__ = "Danny Sequeira"
__copyright__ = "Copyright (C) Danny Sequeira 2022"
# ------------------ Models -------------------------------------
# TODOS model


class Todos(models.Model):
    # --------------- ENUMERATIONS ---------------------------------
    # urgency enumeration
    class UrgencyLevel(models.TextChoices):
        LOW = 'LW', _('Low')
        MEDIUM = 'MD', _('Medium')
        HIGH = 'HG', _('High')

    # -------------------- Fields --------------------------------
    title = models.TextField(null=True, blank=True)
    todo = models.TextField(null=True, blank=True)
    responsable = models.TextField(null=True, blank=True)
    finish_at = models.DateField(null=True, blank=True)
    # Urgency level field
    urgency = models.CharField(
        max_length=2,
        choices=UrgencyLevel.choices,
        default=UrgencyLevel.LOW,
    )

    def is_upperclass(self):
        return self.urgency in {
            self.UrgencyLevel.MEDIUM,
            self.UrgencyLevel.HIGH,
        }

    created = models.DateTimeField(auto_now_add=True)
