# Generated by Django 4.1.6 on 2023-03-10 23:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('outflow_tracker', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Income',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('date', models.DateField()),
                ('source', models.CharField(choices=[('Salary', 'Salary'), ('Online Writing', 'Online Writing'), ('Business', 'Business'), ('Investments', 'Investments'), ('Goodwill', 'Goodwill')], default='Online Writing', max_length=20)),
                ('amount', models.IntegerField()),
            ],
        ),
        migrations.AlterField(
            model_name='expense',
            name='category',
            field=models.CharField(choices=[('Shopping', 'Shopping'), ('Travel', 'Travel'), ('Misc', 'Misc'), ('General Expense', 'General Expense'), ('Education', 'Education')], default='Shopping', max_length=100),
        ),
    ]
