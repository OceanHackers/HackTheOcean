# Hackathon LaunchX HackTheOcean

<p align="center">
  <img src="https://user-images.githubusercontent.com/53382424/168632547-2e44b71b-2056-43b6-b743-fe9a5dbc67ba.png", width=400px height=400px>
</p>

Se ha detectado una amenza, que está avanzando rápidamente por los mares y oceános
1 planeta, 4 océanos, 1 enemigo en común, esto despertó la preocupación de 5 personas
que decidieron tomar acción y desarrollar una solución para evitar la propagación del intruso,
lograron intervenir las señales de comunicación y realizaron una [transmisión](https://www.tiktok.com/@camarenaai/video/7098130719091821830?_t=8SLVu2Z6mX8&_r=1) para que las personas abran los ojos y conozcan el problema.

## El malware
Gracias a la red de inteligencia proporcionada por **HackTheOcean**, se han logrado conocer las
características de este malware el cuál actúa en grupos grandes con sigilo, su modus operandi consiste 
escogiendo una zona que sea popular en la que pueda dejar sus desechos y gastar los recursos disponibles,
aprovechando la ignorancia de los grupos a su favor, su mayor miedo es que te hagas consiente de él viendo
una [presentación](https://www.canva.com/design/DAFAsNz8w00/3l_UBe1R1rZp5bMMzp5L3Q/view?website#2:caracter-sticas-es-altamente-peligroso.-se-infiltra-de-forma-r-pida-entre-las-zonas-m-s-vulnerables.-se-mueve-en-grupos) 
como la que **Ocean Hackers** ha preparado para ti.

## Se parte del cambio
En Ocean Hack hemos desarrollado una solución, con la que las personas podrán interctuar, mediante 
[pantallas atractivas](https://www.figma.com/file/exfIiT36KUctyYsiOetjrG/HackTheOcean---Design-concept?node-id=0%3A1)
para captar la atención de las personas y que mediante una solución de facil acceso, puedan informarse
sobre qué acciones tomar y adquirir inmunidad contra **el malware**, te invitamos a seguir leyendo y recuerda que

¡Todos somos el cambio! 

...Fin del mensaje

## Ocean Hackers presents:

| Informacion | URL |
| --- | --- |
| Ocean Hackers Presentation | [Link a la Presentacion](https://www.canva.com/design/DAFAsNz8w00/3l_UBe1R1rZp5bMMzp5L3Q/view?website#2:un-malware-se-ha-infiltrado-en-nuestros-oc-anos-y-esta-comprometiendo-su-sistema) |
| Design Concept | [Link a Figma](https://www.figma.com/file/exfIiT36KUctyYsiOetjrG/HackTheOcean---Design-concept?node-id=0%3A1) |
| TikTok | [Link al TikTok](https://vm.tiktok.com/ZMLc3VxX4/?k=1) |


## Desarrollo de la solución
Nuestro equipo secreto de hackers, se basó en las siguientes tecnologías para atacar al malware que va apareciendo cada vez más y más por el mundo. Continua leyendo si te interesa conocer como trabajan nuestros hackers 👀.

#### Frontend (HTML, CSS, JS).
La maquetación del proyecto fue realizado implementando las tecnologías web de toda la vida y su despliegue fue realizado con [@Github](https://github.com/github) Pages [(Este es el enlace a la página web)](https://oceanhackers.github.io/HackTheOcean/) .
| Rutas | Información |
| --- | --- |
| **/** | Página de login (Aún no se conecta con la validación de la api |
| **/Mapa/mapa.html** | Página principal, se ve el mapa de las misiones (en implementación, no se han conectado todas las funciones) |


![image](https://user-images.githubusercontent.com/53382424/168630387-1e0e505a-f2ab-46ee-b83d-449e316ddf54.png)
![image](https://user-images.githubusercontent.com/53382424/168739335-636d2e52-3015-41f5-b5c6-c5d53a0d1598.png)
![image](https://user-images.githubusercontent.com/53382424/168739291-5661d7a9-3595-404d-9d40-d7af3ed347ce.png)

#### Base de datos en MySQL
La base de datos fue implementada con mySQL y funcionando online en los servicios que ofrece el grupo de hackers conocido como [@Azure](https://github.com/azure) . A continuación dejamos unas imagenes de como se ve la base de datos. Y su deploy:
![image](https://user-images.githubusercontent.com/53382424/168626384-577861b7-8e1e-4745-af96-c84c12bd168c.png)
![image](https://user-images.githubusercontent.com/53382424/168626453-b91ad9b4-4bab-4458-be50-b1f698206008.png)
![image](https://user-images.githubusercontent.com/53382424/168626760-5cbf3e9b-c279-40b2-8e24-fbf382442c73.png)

#### Backend (API con Node.js) [Enlace al repositorio de la API](https://github.com/OceanHackers/OceanHackersAPI)
Para realizar la conexión con dicha base de datos realizamos una API en **node.js**, la cual se intento subir a los servicios de [@Azure](https://github.com/azure) , no obstante no hubo entendimiento y terminamos realizandolo con otros grupo de compañeros hackers conocidos como [@Heroku](https://github.com/heroku) . [Este es el enlace a la API realizada](https://oceanhackersapi.herokuapp.com/)
| Entradas | Información |
| --- | --- |
| **/login** | Realiza una verificación del usuario y la contraseña |
| **/users** | Regresa todos los usuarios registrados |
| **/missions** | Regresa todas las misiones actuales |
| **/missions/id** | Regresa la mision con el id enviado |
| **/challenges/id** | Regresa el desafío con el id enviado |
| **/resources/id** | Regresa los recursos e información de la mision con el id enviado |

# Actualizaciones
Hasta la versión actual del proyecto, todavía falta implementar la conexión del frontend con el backend, y para ello nuestros hackers siguen trabajando arduamente para pronto tener los medios con los cuales atacar al malware.
