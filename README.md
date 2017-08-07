# React Medellin
# WORKSHOP: Nuestra primera aplicación en React.

## Agenda
1. Por qué React?
2. Arquitectura utilizando componentes
3. Nuestro primer componente - Hola Mundo
4. Composición de componentes
5. Ejercicio #1 - Serie de TV (10 mins)
6. Props
7. Ejercicio #2 - Serie de TV + props (10 mins)
8. Reutilización de componentes
9. Ejercicio #3 - Múltiples series (10 mins)
10. Estado local en los componentes
12. Ejercicio #4 - Interactuando con formularios (10 mins)
13. APIs
14. Ejercicio #5 - Interactuando con APIs (10 mins)
15. Despliegue de aplicaciones
16. Cierre

# Deploy
1. `npm install -D gh-pages` o `yarn add gh-pages -D`
2. Crear un repositorio en github
3. Agregar `"homepage": "https://tuusuariodegithub.github.io/el-nombre-del-repositorio`
4. Actualizar su `package.json` con:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build",
```
5. Correr `npm run deploy` o `yarn deploy`
6. Ir a `https://tuusuariodegithub.github.io/el-nombre-del-repositorio`
