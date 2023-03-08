from rest_framework import serializers
from .models import Expense

# create a class to convert Expense model to JSON and vice versa
class ExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense
        fields = ('id', 'name', 'date', 'category', 'description', 'payment_mode', 'value')