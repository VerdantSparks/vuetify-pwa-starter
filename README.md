# vue-pwa-starter
This is a starter Vue project template with all features added.

## pre-requisites:
OpenSSL
Node Package Manager

run `npm list -qlobal -depth 0` to show installed global package

/usr/local/lib
├── @vue/cli@3.10.0
├── @vue/cli-service-global@3.9.2
├── http-server@0.11.1
└── npm@6.9.0

you will need the following packages installed:
1. @vue/cli
2. @vue/cli-service-global
3. http-server

run `vue create vue-pwa-starter`

? Please pick a preset: (Use arrow keys)
❯ default (babel, eslint) 
  Manually select features 

choose "Manually select features"

? Please pick a preset: Manually select features
? Check the features needed for your project: 
 ◉ Babel
 ◉ TypeScript
 ◉ Progressive Web App (PWA) Support
 ◉ Router
 ◉ Vuex
 ◉ CSS Pre-processors
 ◉ Linter / Formatter
 ◉ Unit Testing
❯◉ E2E Testing

select all

? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, TS, PWA, Router, Vuex, CSS Pre-processors, Linter, Unit, E2E
? Use class-style component syntax? Yes
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with dart-sass)
? Pick a linter / formatter config: TSLint
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)Lint on save
? Pick a unit testing solution: Jest
? Pick a E2E testing solution: Cypress
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? In package.json

run `cd vue-pwa-starter`

run `npm run build`

run `npm run serve`

  App running at:
  - Local:   http://localhost:8081/ 

since ServiceWorker need to run in HTTPS, we need to create SSL certificate for development test.

run `openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem`

it will generate the SSL certificate.

with code compiled by `npm run build` at `dist` folder

run `http-server dist -S -C cert.pem`

Starting up http-server, serving dist through https
Available on:
  https://127.0.0.1:8080

now you can view the web from your mobile phone.

after finished loading, add the web to your mobile phone home screen.

then turn off your mobile phone connectivity.

return to the app and refresh, you will find that the app now able to run offline.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).