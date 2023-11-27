FROM node

WORKDIR /app/

# First, copy the package.json file. This is done separately to leverage Docker cache
COPY express/package.json .

RUN npm install

COPY . .

ENTRYPOINT ["node", "express/app.js"]
