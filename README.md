# Hackathon LaunchX HackTheOcean

<p align="center">
  <img src="https://raw.githubusercontent.com/OceanHackers/HackTheOcean/main/media/img/Ocean%20Hackers.png", width=600px height=200px>
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
| Desing Concept | [Link a Figma](https://www.figma.com/file/exfIiT36KUctyYsiOetjrG/HackTheOcean---Design-concept?node-id=0%3A1) |
| TikTok | [Link al TikTok](https://vm.tiktok.com/ZMLc3VxX4/?k=1) |


### Desarrollo de la solución
Nuestro equipo secreto de hackers, se basó en las siguientes tecnologías para atacar al malware que va apareciendo cada vez más y más por el mundo. Continua leyendo si te interesa conocer como trabajan nuestros hackers 👀.

#Base de datos en MySQL
La base de datos fue implementada con mySQL y funcionando online en los servicios que ofrece el grupo de hackers conocido como @Azure . A continuación dejamos unas imagenes de como se ve la base de datos. Y su deploy:
![image](https://user-images.githubusercontent.com/53382424/168626384-577861b7-8e1e-4745-af96-c84c12bd168c.png)
![image](https://user-images.githubusercontent.com/53382424/168626453-b91ad9b4-4bab-4458-be50-b1f698206008.png)
![image](https://user-images.githubusercontent.com/53382424/168626760-5cbf3e9b-c279-40b2-8e24-fbf382442c73.png)

#Backend (API)
Para realizar la conexión con dicha base de datos realizamos una API en **node.js**, la cual se intento subir a los servicios de @Azure , no obstante no hubo entendimiento y terminamos realizandolo con otros grupo de compañeros hackers conocidos como @Heroku . El siguiente es el enlace a la API realizada:
https://oceanhackersapi.herokuapp.com/
| Entradas | Información |
| --- | --- |
| **/login** | Realiza una verificación del usuario y la contraseña |
| **/users** | Regresa todos los usuarios registrados |
| **/missions** | Regresa todas las misiones actuales |
| **/missions/id** | Regresa la mision con el id enviado |
| **/challenges/id** | Regresa el desafío con el id enviado |
| **/resources/id** | Regresa los recursos e información de la mision con el id enviado |

