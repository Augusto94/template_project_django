from rest_framework.viewsets import ModelViewSet

from core.api.serializers import TodoSerializer
from core.models import Todo


class TodoViewSet(ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.order_by('-created_at')
