#entra na pasta
npm install

npm run dev

echo se der erro, usa esse comando
echo npm i ts-node

echo baixando mongodb
npm install mongoose

echo inicializar o server, verificar se tem docker baixado
docker run --name mongo --volume /save/mongo:/data/dp -p 27017:27017 -d mongo

echo se der erro
echo copia o hash, (codigo bem grande kkk)
echo docker rm e cola o hash
echo docker run --name mongo --volume /save/mongo:/data/db -p 27017:27017 -d mongo
echo docker run dev