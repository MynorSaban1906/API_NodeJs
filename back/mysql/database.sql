CREATE DATABASE practica6; -- creacion de una base de datos

use practica6;-- usar la base creada anteriormente


CREATE TABLE curso(
  codigo int primary key AUTO_INCREMENT,
  nombre varchar(25)
);


CREATE TABLE estudiante(
  carnet int primary key, -- llave primaria
  nombre varchar(25),
  correo varchar(25),
  contra varchar(25)
);


CREATE TABLE asignacion(
  codigo int primary key AUTO_INCREMENT,
  carnet_estudiante int,
  codigo_curso int,
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(carnet_estudiante) REFERENCES estudiante(carnet),
  FOREIGN KEY(codigo_curso) REFERENCES curso(codigo)
);


----inserto datos a la tabla curso
INSERT INTO curso(nombre)(nombre) VALUES('MATEMATICA BASICA 1');
INSERT INTO curso(nombre) VALUES('MATEMATICA BASICA 2');
INSERT INTO curso(nombre) VALUES('FISICA BASICA 1');
INSERT INTO curso(nombre) VALUES('DEPORTES 1');
INSERT INTO curso(nombre) VALUES('IPC 1');


--inserto datos a la tabla estudiante
INSERT INTO estudiante VALUES(20184512,'MARIA DEL ROSARIO','maria@gmail.com','maria123');
INSERT INTO estudiante VALUES(20178451,'JOSE LOPEZ','jose@gmail.com','jose123');
INSERT INTO estudiante VALUES(20191542,'MATEO ALVAREZ','mateo@gmail.com','mateo123');
INSERT INTO estudiante VALUES(20101245,'JUAN GONZALES','juan@gmail.com','juan123');



--inserto datos a la asignacion
INSERT INTO asignacion(carnet_estudiante,codigo_curso) VALUES (20184512,2);
INSERT INTO asignacion(carnet_estudiante,codigo_curso) VALUES (20184512,3);
INSERT INTO asignacion(carnet_estudiante,codigo_curso) VALUES (20184512,4);
INSERT INTO asignacion(carnet_estudiante,codigo_curso) VALUES (20178451,1);
INSERT INTO asignacion(carnet_estudiante,codigo_curso) VALUES (20178451,4);
INSERT INTO asignacion(carnet_estudiante,codigo_curso) VALUES (20191542,2);
INSERT INTO asignacion(carnet_estudiante,codigo_curso) VALUES (20191542,4);




