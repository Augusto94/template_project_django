from django.contrib import admin
from core.models import Todo


@admin.register(Todo)
class TodoAdmin(admin.ModelAdmin):

    search_fields = ['description']
    list_display = ('description', 'created_at', 'done',)
    ordering = ('created_at',)
