from django.db import models
from django.contrib.auth.models import User
from django.utils.translation import gettext_lazy as _

# Create your models here.
class Profile(models.Model):
    STUDENT = 'Student'
    INSTRUCTOR = 'Instructor'

    USER_TYPE_CHOICES = [
        (STUDENT, 'Student'),
        (INSTRUCTOR, 'Instructor'),
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    username = models.CharField(max_length=500, default='kai')
    user_type = models.CharField(max_length=20, choices=USER_TYPE_CHOICES)

    # additional fields specific to users or instructors

    def __str__(self):
        return self.user.username