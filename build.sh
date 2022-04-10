docker stop nekan-front
docker rm nekan-front
docker rmi nekan-front
docker build -t nekan-front .
docker run --name nekan-front -p 8005:3000 -d --restart always nekan-front

