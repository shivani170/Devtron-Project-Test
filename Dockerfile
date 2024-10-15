FROM nginx

WORKDIR /index
COPY package.json .
Run npm i
COPY . .
CMD ["npm", "start"]


