#Se importa la libreria de Flask
import os
from flask import Flask, render_template

#Se asigna un nombre a la variable app asi como tambien se asigna la carpeta templates
app = Flask(__name__, template_folder='templates')

#Se busca la carpeta que va utilizar la aplicación como static 
app._static_folder = os.path.abspath("static")

#Se define una ruta que en este caso sera la principal
@app.route("/")
def principal():
    #Se retorna la pagina html
    return render_template("form.html")

#Función que ejecuta la aplicación en el localhost por el puerto 9696
if __name__ == '__main__':
    app.run(debug=True, host="localhost", port=9696)