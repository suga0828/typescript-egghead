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
# de la ruta de salida. Para escuchar cambios en los
# archivos pasamos la bandera ´--watch´ y se creará un servidor
# que se actualiza cada vez que modificamos el archivo que estamos
# compilando.

´´´
tsc --watch --out dist/app.js index.ts
´´´

# Existen muchas otras banderas que configuran la forma como
# Typescript compila nuestros archivos. Una forma de
# consultarlas es ejecutando el comando ´tsc --help´.
# Sin embargo es probable que no utilicemos estos comandos
# desde la terminal sino a través de un archivo de
# configuración de Typescript. Para generar este archivo
# ejecutamos:

´´´
tsc --init
´´´

# Este comando nos va a generar un archivo ´tsconfig.json´
# con una configuración básica. Ya usando este archivo
# de configuración sólo necesitamos ejecutar ´tsc´ para
# compilar los archivos ´.ts´ de nuestro proyecto según
# la configuración dada en el archivo de configuración.

# Un escenario común de algunas aplicaciones es tener un
# sólo archivo principal `main.ts` donde llamamos a la
# aplicación. En este caso se establece la configuración
# de sólo compilar el archivo principal y los importados
# en este y ajustando el directorio de salida. Así,
# modificamos el archivo tsconfig.json de esta manera:

```
{
  "compilerOptions": {
    ...
+   "noEmitOnError": true
  },

+ "files": [
+   "main.ts"
+ ]
}
```

# Adicionalmente debemos configurar un sistema de
# paquetes para ello usamos la librería (SystemJS)[https://www.npmjs.com/package/systemjs].
# que se encargará de generar la carga de los script
# compilados. Podemos cargar la librería a través de CDN en un
# archivo index.html y establecer una configuración
# básica. Un script para hacerlo puede ser:

```
System.config({
      packages: {
        "dist": {
          "defaultExtension": "js",
          "main": "main"
        }
      }
    });

    System.import("dist");
```

# En este archivo de confiración establecemos
# el directorio donde tomamos los script y el
# script principal. También podemos compilar
# escuchando cambios y luego sólo debemos
# refrescar el browser para observar los
# cambios.

# De igual forma podemos compilar otro archivo
# 'principal' y usarlo como principal en
# nuestro index.html, sólo basta modificar el
# el archivo pricipal en nuestra configuración
# de cargador de mòdulos.

# En este punto es bueno recordar algunas de las
# herramientras o beneficios de los que nos provee
# Typescript. Uno de ellos son las interfaces, que
# son contratos que establecen los tipos (complejos)
# de datos que vamos a manejar. Al momento de
# compilar las interfaces observamos que éstas
# no contienen código y sólo son de ayuda en
# el proceso de desarrollo. 