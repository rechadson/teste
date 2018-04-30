from django.shortcuts import render
import json

# Create your views here.
def produto(request):
    with open("data.json","r") as f:
        produto = json.load(f)
    return render(request,'produto.html',produto)