from django.contrib import admin
from django.urls import path
from rest_framework import routers
from django.conf.urls import include
from .views import *

router = routers.DefaultRouter()
router.register('users', UserView)
router.register('profile', ProfileView)
router.register('logout', LogoutView, basename='blacklisttoken')

urlpatterns = [
    path('', include(router.urls)),
]