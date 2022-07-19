#Se importa la libreria de Flask
from flask import Flask, render_template

#Se asigna un nombre a la variable app asi como tambien se asigna la carpeta templates
app = Flask(__name__, template_folder='templates')


app.route('/')
def principal():
    #Se retorna la pagina html
    return render_template('form.html')