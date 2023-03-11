from django.shortcuts import render
from .serializers import ExpenseSerializer, IncomeSerializer
from rest_framework import viewsets
from .models import Expense, Income

# Create view for Expenses
class ExpenseView(viewsets.ModelViewSet):
    serializer_class = ExpenseSerializer
    queryset = Expense.objects.all()

# create a view for Incomes
class IncomeView(viewsets.ModelViewSet):
    serializer_class = IncomeSerializer
    queryset = Income.objects.all()
