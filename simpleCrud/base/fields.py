from datetime import date
from django.db.models.fields import IntegerField
from time import mktime

class DateTimeIntegerField(IntegerField):

    def get_prep_value(self, value):
        if isinstance(value, date):
            value = mktime(value.timetuple())
        return super().get_prep_value(value)

    def to_python(self, value):
        if isinstance(value, date):
            value = mktime(value.timetuple())
        return super().to_python(value)