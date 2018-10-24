FROM node:latest
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install \
    && npm install mocha chai --save-dev \
    && npm install --global mocha \
    && npm install request --save-dev \
    && npm install istanbul@1.0.0-alpha.2 --save-dev \
    && npm install --global istanbul@1.0.0-alpha.2 \
    && npm install --save-dev babel-cli
COPY . /usr/src/app
EXPOSE 3000
CMD ["node","./bin/www"]
# CMD ["mocha", "test/unit/test-pages.js", "--reporter", "spec"]
