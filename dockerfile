FROM node:14-alpine
# chuẩn bị môi trường node 14
WORKDIR /hoidanit/backend
# nơi muốn lưu trữ sourd code

COPY package*.json ./
# copy file ném vào docker
# copy package trc vì rất ít khi thay đổi nó
RUN npm install
RUN npm install -g @babel/core @babel/cli
COPY . .
#copy tất cả các file (.-1) vào docker (.-2)

RUN npm run build-src
# tạo ra build vì .dockerignore k copy build

CMD ["npm", "run","build"]
# chạy câu lệnh npm run build
EXPOSE 3000