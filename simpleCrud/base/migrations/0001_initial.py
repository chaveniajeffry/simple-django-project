# Generated by Django 3.1.7 on 2023-03-13 22:23

import base.fields
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CustomUser',
            fields=[
                ('user_id', models.PositiveIntegerField(primary_key=True, serialize=False)),
                ('username', models.CharField(max_length=255, unique=True)),
                ('email', models.CharField(max_length=255)),
                ('password', models.CharField(max_length=150)),
                ('first_name', models.CharField(max_length=255)),
                ('last_name', models.CharField(max_length=255)),
                ('status', models.CharField(max_length=3)),
                ('phone_number', models.CharField(max_length=20)),
                ('last_login', base.fields.DateTimeIntegerField(blank=True, null=True)),
                ('img_profile', models.CharField(max_length=255, null=True)),
                ('user_type', models.CharField(max_length=255, null=True)),
                ('when_added', models.PositiveIntegerField(blank=True, null=True)),
                ('when_updated', models.PositiveIntegerField(blank=True, null=True)),
                ('sc_id', models.CharField(max_length=50, null=True)),
                ('country_dial_code', models.CharField(max_length=10, null=True)),
                ('country_code', models.CharField(max_length=5)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Accounts',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('account_email', models.CharField(max_length=255)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'db_table': 'accounts',
            },
        ),
        migrations.CreateModel(
            name='Profiles',
            fields=[
                ('id', models.PositiveIntegerField(primary_key=True, serialize=False)),
                ('first_name', models.CharField(max_length=255)),
                ('last_name', models.CharField(max_length=255)),
                ('email', models.CharField(max_length=255)),
                ('is_superuser', models.PositiveIntegerField(blank=True, null=True)),
                ('is_staff', models.PositiveIntegerField(blank=True, null=True)),
                ('is_active', models.PositiveIntegerField(blank=True, null=True)),
                ('user_id', models.PositiveIntegerField(blank=True, null=True)),
                ('image', models.CharField(max_length=45, null=True)),
                ('date_joined', models.PositiveIntegerField(blank=True, null=True)),
            ],
            options={
                'db_table': 'profile',
            },
        ),
        migrations.CreateModel(
            name='SubTodoCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sub_category_description', models.CharField(max_length=255)),
                ('sub_category_code', models.CharField(max_length=255)),
                ('when_added', models.PositiveIntegerField(blank=True, null=True)),
                ('when_updated', models.PositiveIntegerField(blank=True, null=True)),
            ],
            options={
                'db_table': 'todo_sub_category',
            },
        ),
        migrations.CreateModel(
            name='TodoCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category_description', models.CharField(max_length=255)),
                ('category_code', models.CharField(max_length=255)),
                ('when_added', models.PositiveIntegerField(blank=True, null=True)),
                ('when_updated', models.PositiveIntegerField(blank=True, null=True)),
            ],
            options={
                'db_table': 'todo_category',
            },
        ),
        migrations.CreateModel(
            name='Todo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(max_length=255)),
                ('deadline', models.PositiveIntegerField(blank=True, null=True)),
                ('when_added', models.PositiveIntegerField(blank=True, null=True)),
                ('when_updated', models.PositiveIntegerField(blank=True, null=True)),
                ('category', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.todocategory')),
                ('sub_category', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.subtodocategory')),
                ('todo_group', models.ManyToManyField(blank=True, related_name='todo_group', to='base.Accounts')),
            ],
            options={
                'db_table': 'todo',
            },
        ),
    ]
