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

class Order(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
    city = models.CharField(max_length=30)
    address = models.TextField()
    items = models.JSONField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Order: {self.id} by {self.name}"
