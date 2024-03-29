from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls import include
from rest_framework_simplejwt.views import (TokenObtainPairView,TokenRefreshView,)
from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack

urlpatterns = [
    path('admin/', admin.site.urls),
    path('core/', include('core.urls') ),
    path('core-auth/', include('rest_framework.urls')),
    path('core/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('core/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

