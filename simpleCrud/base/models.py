from django.db import models

# Create your models here.
class Accounts(models.Model):
    account_email = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'accounts'