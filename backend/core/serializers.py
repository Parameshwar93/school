from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.validators import UnicodeUsernameValidator
from .models import *


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username']
        extra_kwargs = {
            'username': {
                'validators': [UnicodeUsernameValidator()],
            },
            'password': {
                'write_only': True,  # Password field should only be written to, not read from
                'required': True
            }
        }

class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(required=True)

    class Meta:
        model = Profile
        fields = ['id', 'user', 'username', 'user_type']
        depth = 2

    def update(self, instance, validated_data):
        user_data = validated_data.pop('user', None)
        validated_data.pop('password', None)
        if user_data:
            for field, value in user_data.items():
                setattr(instance.user, field, value)
            instance.user.save()
        # Update remaining profile fields using super().update
        return super().update(instance, validated_data)
    
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

class TokenBlacklistSerializer(serializers.Serializer):
    refresh_token = serializers.CharField()