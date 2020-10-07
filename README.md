# CI / CD

url staging: https://portfolio-adrien-staging.herokuapp.com/

url prod: https://portfolio-adrien-prod.herokuapp.com/#/

Utilisation de Github action. Il permet de tester mon code et de le déployer. Il est connecté directement au répertoire GIT. 
Utilisation de heroku pour déployer le code sur le cloud soit 2 applications ( staging et prod)

Worflows: 2 fichiers ( 1 pour staging et l'autre pour la prod)
Chacun d'entre eux installe l'application et la déploie en vérifiant plusieurs choses dont notamment la propreté du code (lint), la sécurité de celui-ci.
À chaque push, une pull request est déclaré.



# portfolio

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

### Lints and fixes files
```
npm run lint
```

### Sass lint
```
sass-lint 'src/assets/scss/components/*.scss' -v -q
```

### Vue Eslint 
```
$ npx eslint src/views/*.vue
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
