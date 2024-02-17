now we are going to talk about volume and networking in the folder dc2
docker is used to run dbs/redis and other services locally
this is so useful hence we will demonstrate is.

docker ki help se ham koi bhi db  download toh kr lenge lekin 
jab ham usko use kr ke fir se restart krenge tab uska data delete milega
isliye ham volume ka use krenge
it make sure to retain info across restarts VOLUME

jab bhi ham docker ka use kre toh ham chahte hai ki ek container dusre 
docker container se talk kr sake isliye ham NETWORK  ka use krenge

Command To connect index to index1
docker run -p 3003:3001 --name server --network net1  backend1
docker run -p 3003:3001 --name server2 --network net1  backend2
