FROM node:alpine

WORKDIR /app

COPY nginx.conf /etc/nginx/site-enabled

COPY frontend .
# For npm@5 or later, copy package-lock.json as well
# COPY package.json package-lock.json ./

EXPOSE 8080

CMD [ "npm", "start" ]

