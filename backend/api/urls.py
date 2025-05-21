from rest_framework.routers import DefaultRouter
from .views import ItemViewSet, OrderViewSet
from django.urls import path, include

router = DefaultRouter()
router.register(r"item", ItemViewSet)
router.register(r"order", OrderViewSet)

urlpatterns = [
    path('', include(router.urls))
]