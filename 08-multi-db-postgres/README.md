#Comando para baixar e configurar a imagem do postgres

docker run \
	--name postgres \
	-e POSTGRES_USER=lkogici \
	-e POSTGRES_PASSWORD=root \
	-e POSTGRES_DB=heroes \
	-p 5432:5432 \
	-d \
	postgres

#Comando para listar os containers que estão em execução
#-a mostra todos os containers
docker ps 

#Comando para baixar e configurar a imagem do adminer

docker run \
	--name adminer \
	-p 8080:8080 \
	--link postgres:postgres \
	-d \
	adminer

#Comando para baixar e configurar a imagem do mongodb

docker run \
	--name mongodb \
	-p 27017:27017 \
	-e MONGO_INITDB_ROOT_USERNAME=admin \
	-e MONGO_INITDB_ROOT_PASSWORD=senhaadmin \
	-d \
	mongo:4

#Comando para baixar e configurar o cliente de alterações do mongo

docker run \
	--name mongoclient \
	-p 3000:3000 \
	--link mongodb \
	-d \
	mongoclient/mongoclient

#Comando para criar um banco e um usuário no mongodb

docker exec -it mongodb \
	mongo --host localhost -u admin -p senhaadmin --authenticationDatabase admin \
	--eval "db.getSiblingDB('herois').createUser({user: 'lkogici', pwd: 'root', roles: [{role: 'readWrite', db: 'herois'}]})"