# Generated by Django 3.0.5 on 2020-05-04 00:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='todo',
            old_name='descricao',
            new_name='description',
        ),
    ]