# JbK53App

## https://jonathan-baloyi.github.io/JbK53App/

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.8.

## Please note, Question types refer to whether a question is for Heavy Vehicle, Light, or Motor-cycle

```
  export enum QuestionTypeEnum {
    LightVehicle = 1,
    MotorCycle = 2,
    Code10 = 3,
    Code14 = 4,
    All = 5,
  }
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Deploy to github pages

1. Set the output path to docs in angular.json file

```
 "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "docs",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "tsconfig.app.json",
            "aot": true,
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.scss"
            ],
            "scripts": []
          },

```

2. Change the base ref in index.html to just a .
3. then run ng build --prod / ng build --configuration production
4. Git push
5. Configure the folder for github pages in github
