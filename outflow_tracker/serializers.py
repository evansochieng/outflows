from rest_framework import serializers
from .models import Expense
from .models import Income

# create a class to convert Expense model to JSON and vice versa
class ExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense
        fields = ('id', 'name', 'date', 'category', 'description', 'payment', 'value')

# create a class to convert Income model to JSON and vice versa
# this determines the attributes that are returned when get request is made
class IncomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Income
        fields = ('id', 'name', 'date', 'source', 'description', 'amount')
