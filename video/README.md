# KC-Modulo-de-HTML5_CSS3_y_JS

El currículum se compone de dos páginas: una estática y otra dinámica. Esta última se corresponde con la pestaña de tareas.

## Qué hacer para que funcione la parte de tareas

El servidor facilitado en Python no me ha funcionado. En su lugar, he usado el módulo **json-server**. Por tanto, para comprobar la parte de tareas, hay que tener instalado **Node** y ejecutar

```javascript
npm install
```

Tener en cuenta que las peticiones GET se hacen a la dirección ```http://localhost:8000/tasks/```, ya que el fichero ```db.json``` está en el directorio raíz. El directorio ```api``` no existe.

