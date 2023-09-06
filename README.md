# PM2

## To start the server use the following command

## start and daemonize an applciation

pm2 start server.js --name server

## Start NPM applications

test-bench % pm2 start --name client npm -- start

## stop an application

pm2 stop <name>

pm2 stop server

show examples of how to use pm2
pm2 examples

list all processes
pm2 list

pm2 start --name <app name> npm -- start
ecosystem.config.js

## To delete a service use the following

pm2 delete
