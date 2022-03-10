# API en NodeJs con conexion a MySQL
Material de apoyo, relializado en conferencia para alumnos de practicas iniciales 1S2022, se realizo una api utilizando NodeJs con conexion a MySQL

-------------------
## Como instalar MySQL en Ubuntu
#### Paso 1 Instalar MySQL
En Ubuntu 20.04, puede instalar MySQL usando el repositorio de paquetes APT. En el momento de escribir este artículo, la versión de MySQL disponible en el repositorio de Ubuntu es la versión 8.0.28.

    sudo apt update

A continuación, instale el paquete mysql-server:

    sudo apt install mysql-server
    
Verificar la version de MySQL.
    
    mysql --version

#### Paso 2: Ajustar la autenticación y los privilegios de usuario (opcional)

Para iniciar por primera vez, se usa el comando.

    sudo mysql
    
Asegúrese de cambiar password por una contraseña segura de su elección, y tenga en cuenta que este comando cambiará la contraseña root.

    ALTER USER 'root'@'localhost' IDENTIFIED WITH caching_sha2_password BY 'password';


* La instrucción ALTER USER previa establecer el root user de MySQL para autenticar con el complemento caching_sha2_password.[Según la documentación oficial de MySQL](https://dev.mysql.com/doc/refman/8.0/en/upgrading-from-previous-series.html#upgrade-caching-sha2-password), caching_sha2_password es el complemento de autenticación preferido por MySQL, ya que proporciona un cifrado de contraseña más seguro que el anterior, aunque aún usado ampliamente, mysql_native_password.

A continuación, ejecute FLUSH PRIVILEGES para indicar al servidor que vuelva a cargar la tabla de permisos y aplique sus nuevos cambios:


    FLUSH PRIVILEGES;

Compruebe de nuevo los métodos de autenticación empleados por cada uno de sus usuarios para confirmar que root deje de realizarla usando el complemento de auth_socket:

    SELECT user,authentication_string,plugin,host FROM mysql.user;


![](https://i.imgur.com/a3IwkBe.png)

Ajusta la autenticacion y los privilegios del usuario

    ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'
    
Para salir de la consola de MySQL

    exit

Para iniciar entrar nuevamente a la consola

    mysql -u root -p

Iniciar servicio 

    /etc/init.d/mysql start
    
Detener servicio

    /etc/init.d/mysql stop
    
Reiniciar servicio

    /etc/init.d/mysql restart
    
------------------

[Desinstalar MySQL Ubuntu](https://www.solvetic.com/tutoriales/article/8878-desinstalar-mysql-en-ubuntu-20-04/)

[Instalar MySQL Windows 10](https://www.profesionalreview.com/2018/12/13/mysql-windows-10/)

[Reiniciar servicio en Windows](https://help.clouding.io/hc/es/articles/360011456839-C%C3%B3mo-reiniciar-MySQL-en-Linux-y-en-Windows)

-------------------

## Uso de API

Se incresa a la carpeta src, desde ahi se abre una terminal.

Para ejecutar por primera vez el servidor, se debe de instalar las dependencias.

    npm install
    
El servidor se inicializa en el puerto 3000, y se usa el comando.
    
    npm start
