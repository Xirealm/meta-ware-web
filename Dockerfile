FROM swr.cn-north-4.myhuaweicloud.com/ddn-k8s/docker.io/node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM swr.cn-north-4.myhuaweicloud.com/ddn-k8s/docker.io/library/nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

