FROM node as builder

RUN mkdir -p /app
WORKDIR /app

COPY . .

RUN npm install
RUN npm run build


FROM nginx

COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./docker-entrypoint.sh /docker-entrypoint.sh

RUN chmod +x /docker-entrypoint.sh

ENTRYPOINT [ "./docker-entrypoint.sh" ]