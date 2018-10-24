FROM node:latest
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install \
    && npm install mocha chai --save-dev \
    && npm install --global mocha \
    && npm install request --save-dev \
    && npm install istanbul@0.4.4 --save-dev \
    && npm i nyc --save-dev
COPY . /usr/src/app
EXPOSE 3000
CMD ["node","./bin/www"]
# CMD ["mocha", "test/unit/test-pages.js", "--reporter", "spec"]
