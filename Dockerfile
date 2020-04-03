
FROM node:alpine
WORKDIR /app
RUN NODE_ENV=production
RUN yarn global add pm2
COPY process.json .
COPY frontend ./frontend
EXPOSE 8080
CMD ["pm2-runtime", "process.json"]