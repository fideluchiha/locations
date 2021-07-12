# Locations

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.

## Development server



correr la imagen de docker docker-compose up -d que se encuentra en este directorio

si la base no se restablecio la tabla se crea con el siguiente scritp

CREATE TABLE public.location (
	"location" bigserial NOT NULL,
	"name" varchar(120) NOT NULL,
	area_m2 numeric NOT NULL,
	setParentLocation varchar NULL,
	created_at timestamp(0) NULL,
	updated_at timestamp(0) NULL,
	CONSTRAINT tbl_locations_pkey PRIMARY KEY (location)
	
);

Desplegar el war locationRestApi en un apache tomcat 

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.