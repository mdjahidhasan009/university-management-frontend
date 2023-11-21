FROM node:19-alpine
WORKDIR /app
COPY . .
RUN yarn install
COPY .env.local .env
RUN yarn build
EXPOSE 4200
RUN ["chmod", "+x", "./entrypoint.sh"]
ENTRYPOINT ["sh", "./entrypoint.sh"]