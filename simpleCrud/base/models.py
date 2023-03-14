from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from base.fields import DateTimeIntegerField
# Create your models here.

class Profiles(models.Model):
    id = models.PositiveIntegerField(primary_key=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    is_superuser = models.PositiveIntegerField(blank=True, null=True)
    is_staff = models.PositiveIntegerField(blank=True, null=True)
    is_active = models.PositiveIntegerField(blank=True, null=True)
    user_id = models.PositiveIntegerField(blank=True, null=True)
    image = models.CharField(max_length=45, null=True)
    date_joined = models.PositiveIntegerField(blank=True, null=True)

    class Meta:
        # Comment manage when creating new db
        # managed = False
        db_table = 'profile'

class CustomUser(AbstractBaseUser):
    user_id = models.PositiveIntegerField(primary_key=True)
    username = models.CharField(max_length=255, unique=True)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=150)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    status = models.CharField(max_length=3)
    phone_number = models.CharField(max_length=20)
    last_login = DateTimeIntegerField(blank=True, null=True)
    img_profile = models.CharField(max_length=255, null=True)
    user_type = models.CharField(max_length=255, null=True)
    when_added = models.PositiveIntegerField(blank=True, null=True)
    when_updated = models.PositiveIntegerField(blank=True, null=True)
    sc_id = models.CharField(max_length=50, null=True)
    country_dial_code = models.CharField(max_length=10, null=True)
    country_code = models.CharField(max_length=5)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []

class Accounts(models.Model):
    account_email = models.CharField(max_length=255)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

    class Meta:
        # Comment manage when creating new db
        # managed = False
        db_table = 'accounts'

class TodoCategory(models.Model):
    category_description = models.CharField(max_length=255)
    category_code = models.CharField(max_length=255)
    when_added = models.PositiveIntegerField(blank=True, null=True)
    when_updated = models.PositiveIntegerField(blank=True, null=True)

    class Meta:
        # Comment manage when creating new db
        # managed = False
        db_table = 'todo_category'

class SubTodoCategory(models.Model):
    sub_category_description = models.CharField(max_length=255)
    sub_category_code = models.CharField(max_length=255)
    when_added = models.PositiveIntegerField(blank=True, null=True)
    when_updated = models.PositiveIntegerField(blank=True, null=True)

    class Meta:
        # Comment manage when creating new db
        # managed = False
        db_table = 'todo_sub_category'

class Todo(models.Model):
    todo_group = models.ManyToManyField(Accounts,related_name='todo_group',blank=True)
    description = models.CharField(max_length=255)
    category = models.ForeignKey(TodoCategory, null=True, on_delete=models.SET_NULL)
    sub_category = models.ForeignKey(SubTodoCategory, null=True, on_delete=models.SET_NULL)
    deadline = models.PositiveIntegerField(blank=True, null=True)
    when_added = models.PositiveIntegerField(blank=True, null=True)
    when_updated = models.PositiveIntegerField(blank=True, null=True)

    class Meta:
        # Comment manage when creating new db
        # managed = False
        db_table = 'todo'
