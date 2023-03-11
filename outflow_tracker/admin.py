from django.contrib import admin
from .models import Expense
from .models import Income

# Add the expense model to the admin page
class ExpenseAdmin(admin.ModelAdmin):
    # list of attributes
    list = ('name', 'date', 'category', 'description', 'payment_mode', 'value')

# add the income model to the admin page
class IncomeAdmin(admin.ModelAdmin):
    # list of attrinutes
    list = ('name', 'date', 'source', 'description', 'amount')

# register the site
admin.site.register(Expense, ExpenseAdmin)
admin.site.register(Income, IncomeAdmin)