# Compilar Typescript

# Una forma de compilar Typescript es usándolo a él mismo
# para ello es necesario tener instalado Typescript, una
# forma de instalarlo es como dependencia de npm.

# ejecute el comando:

´´´
npm i -g typescript
´´´

# Para verificar que tenemos instalado Typescript ejecutamos:

´´´
tsc -v
Version 3.4.5
´´´

# A compilar archivos ´.ts´, podemos pasar varias banderas.
# Para cambiar la salida usamos la bandera ´--out´ seguido
# de la ruta de salida. Para escuchando los cambios en los
# archivos pasamos la bandera ´--watch´ y se creará un servidor
# que actualiza cada vez que modificamos el archivo que estamos
# compilando.

´´´
tsc --watch --out dist/app.js index.ts
´´´

