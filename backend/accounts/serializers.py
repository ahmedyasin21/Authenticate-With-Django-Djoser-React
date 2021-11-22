from djoser.serializers import UserCreateSerializer 
from rest_framework import serializers
from django.contrib.auth import get_user_model
User = get_user_model()


class CreateAccountsSerializer(UserCreateSerializer):

    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ("id","username","email","password")
