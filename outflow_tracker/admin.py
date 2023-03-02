from django.contrib import admin
from .models import Expense

# Add the expense model to the admin page
class ExpenseAdmin(admin.ModelAdmin):
    # list of attributes
    list = ('name', 'date', 'category', 'description', 'payment_mode', 'value')

# register the site
admin.site.register(Expense, ExpenseAdmin)