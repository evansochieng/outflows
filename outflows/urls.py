"""outflows URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from outflow_tracker import views

# define router
router = routers.DefaultRouter()
router.register(r'expenses', views.ExpenseView, 'expense')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))
]

# Note: router.urls provide routing for the api
# The router enables us to create the subsequent operations:
#Performing CRUD operations to our items is enabled by the router.