from django.db.models import Q
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from rest_framework import viewsets, status, filters
from rest_framework.decorators import action, authentication_classes, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, BasePermission, SAFE_METHODS, AllowAny, IsAuthenticatedOrReadOnly
from rest_framework.authentication import BaseAuthentication
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.parsers import MultiPartParser, FormParser, FileUploadParser
from .serializers import *
from .models import *
from django.shortcuts import get_object_or_404

# Create your views here.
class ProfileView(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['user__username']

    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return super().get_queryset()
    
    @action(detail=False, methods=['get'])
    def profile(self, request):
        user = self.request.user
        profile = user.profile
        serializer = self.get_serializer(profile)
        return Response(serializer.data)
    
class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def create(self, request):
        serializer = self.get_serializer(data=request.data)
        user_type = serializer.initial_data.pop('user_type', None)
        username = serializer.initial_data['username']
        if serializer.is_valid():
            password = serializer.validated_data.get('password')
            hashed_password = make_password(password)
            serializer.validated_data['password'] = hashed_password
            user = serializer.save()
            p1 = Profile.objects.create(user=user, username=username, user_type=user_type)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
class LogoutView(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    authentication_classes = ()
    serializer_class = TokenBlacklistSerializer

    def get_queryset(self):
        return []

    def create(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)