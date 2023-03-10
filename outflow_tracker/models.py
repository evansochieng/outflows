from django.db import models

# for enumeration types choices
from django.utils.translation import gettext_lazy as _

# Create a model for expenses
class Expense(models.Model):

    # Option 1 of choices
    # list the categories of expenses
    SHOPPING = 'Shopping'
    TRAVEL = 'Travel'
    MISC = 'Misc'
    GENERAL_EXPENSE = 'General Expense'
    EDUCATION = 'Education'

    # create choices of the categories
    EXPENSE_CATEGORY_CHOICES = [
        (SHOPPING, 'Shopping'),
        (TRAVEL, 'Travel'),
        (MISC, 'Misc'),
        (GENERAL_EXPENSE, 'General Expense'),
        (EDUCATION, 'Education')
    ]

    # Option 2 of choices
    class PaymentMode(models.TextChoices):
        CASH = 'Cash', _('Cash')
        MPESA = 'Mpesa', _('Mpesa')
        CARD = 'Card', _('Card')
        CHEQUE = 'Cheque', _('Cheque')

    # define the attributes of the model
    name = models.CharField(max_length=100)
    date = models.DateField()
    category = models.CharField(max_length=100, choices=EXPENSE_CATEGORY_CHOICES, default=SHOPPING)
    description = models.TextField()
    payment_mode = models.CharField(max_length=20, choices=PaymentMode.choices, default=PaymentMode.CASH)
    value = models.IntegerField()

    # default attribute to be displayed
    def __str__(self):
        return self.name
    

# Create a model for incomes
class Income(models.Model):

    # subclass to define choices in a concise way income categories
    class IncomeSource(models.TextChoices):
        SALARY = 'Salary', _('Salary')
        ONLINE_WRITING = 'Online Writing', _('Online Writing')
        BUSINESS = 'Business', _('Business')
        INVESTMENTS = 'Investments', _('Investments')
        GOODWILL = 'Goodwill', _('Goodwill')

    # define the attributes of the model
    name = models.CharField(max_length=100)
    date = models.DateField()
    source = models.CharField(max_length=20, choices=IncomeSource.choices, default=IncomeSource.ONLINE_WRITING)
    amount = models.IntegerField()

    # default attribute to be displayed
    def __str__(self):
        return self.name