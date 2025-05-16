from django.db import models

class Item(models.Model):
    brand = models.CharField(max_length=100)
    model_no = models.CharField(max_length=20)
    price = models.PositiveBigIntegerField()
    material = models.CharField(max_length=20)
    size = models.CharField(max_length=10)
    category = models.CharField(max_length=10)
    description = models.CharField(max_length=500)
    picture = models.ImageField(upload_to='pictures/')

    def __str__(self):
        return f"{self.brand}-{self.model_no}"