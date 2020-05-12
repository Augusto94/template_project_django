from django.urls import include, path
from rest_framework import routers

from core.api.viewsets import TodoViewSet
from .views import DashboardView, LogoutView


router = routers.DefaultRouter()
router.register('', TodoViewSet)

urlpatterns = [
    path('', DashboardView.as_view(), name='dashboard'),
    path('todos/', include(router.urls)),
    path('logout', LogoutView.as_view(), name='logout'),
]
