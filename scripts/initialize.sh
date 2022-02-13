#!/bin/bash
cd /home/ec2-user/roadgram-practice
npm install
npm install pm2@latest -g
pm2 start dist/main.js