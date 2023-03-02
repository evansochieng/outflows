from django.shortcuts import render
from .serializers import ExpenseSerializer
from rest_framework import viewsets
from .models import Expense

# Create view for Expenses
class ExpenseView(viewsets.ModelViewSet):
    serializer_class = ExpenseSerializer
    queryset = Expense.objects.all()
