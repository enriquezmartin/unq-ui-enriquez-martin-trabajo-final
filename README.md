# Piedra, papel, tijera, Spock, lagarto.
Trabajo final de la materia "Construcción de interfaces de usuario" UNQ. 2023

## Requerimientos funcionales mínimos 
- [x] Poder jugar una partida contra la computadora
- [x] Poder elegir (de alguna forma) piedra, papel, tijera, lagarto o Spock
- [x] Mostrar (de alguna forma) quién ganó la partida
- [x] Mostrar (de alguna forma) qué eligió la computadora luego de terminada la partida
- [x] La elección de la computadora tiene que estar randomizada
- [x] No vale dejar un valor fijo hardcodeado
- [x] Tampoco vale "mirar" la elección del jugador para elegir la jugada
- [x] Que el código cumpla con los estándares mínimos que planteamos a lo largo de la materia (Queda a criterio del/los docente/s. Se intentó hacer diseño atómico e interfaz intuitiva.)

 *TEST: se lo di a mi madre (60) y pudo jugar sin que le explique, y entendió cuando ganaba o perdía.*

## Extras
- [x] Posibilidad de jugar más de una partida
- [x] Mantener un contador de victorias de cada participante en la misma sesión
- [x] Posibilidad de jugar entre 2 humanos (de forma local)
- [x] Manteniendo el anonimato de las elecciones de cada jugador
- [x] Interfaz Responsive (APROX)

Se puede achicar bastante la pantalla y no queda información afuera, se probó en un celular y también es jugable y sin perder info.

## Cómo levantar la aplicación localmente:
- Se debe tener instalado *node* y *npm*, en particular en este proyecto se usó **node v18.16** y **npm v.9.5.1**
- Clonar el repositorio usando el comando:

        git clone https://github.com/enriquezmartin/unq-ui-enriquez-martin-trabajo-final

- Navegar hacia el directorio recien creado que contiene el repositorio, usando el comando:

        cd <nombre_del_directorio>

- dentro del directorio, correr el comando: 

        npm install

para instalar todas las dependencias usadas por React en el proyecto. Esto puede demorar unos minutos.
- Levantar la aplicación usando el comando:

        npm start

La misma se abre por defecto en http://localhost:3000