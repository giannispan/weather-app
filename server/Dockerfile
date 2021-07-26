FROM        node:16-alpine as builder

COPY        package.json /srv/weather-app/
WORKDIR     /srv/weather-app/

RUN         yarn install --production

COPY        .babelrc /srv/weather-app/
COPY        .eslintrc.json /srv/weather-app/
COPY        app.js /srv/weather-app/
COPY        config /srv/weather-app/config/
COPY        api /srv/weather-app/api/
COPY        middlewares /srv/weather-app/middlewares/
COPY        routes.js /srv/weather-app/

RUN         yarn run build

FROM        node:16-alpine


ENV         HTTP_MODE http
ARG         NODE_PROCESSES=2
ENV         NODE_PROCESSES=$NODE_PROCESSES

# Install pm2
RUN         npm install -g pm2

# Copy over code
WORKDIR     /srv/api/
COPY        --from=builder /srv/weather-app/build /srv/api/build
COPY        --from=builder /srv/weather-app/package.json /srv/api/package.json

RUN         deluser --remove-home node \
            && addgroup -S node -g 9999 \
            && adduser -S -G node -u 9999 node

CMD         ["npm", "start"]

USER        node