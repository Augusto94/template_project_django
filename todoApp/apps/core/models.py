from django.db import models


class Todo(models.Model):
    description = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    done = models.BooleanField()
