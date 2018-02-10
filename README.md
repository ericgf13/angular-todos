
A simple application using Angular 5 for TODO management made during a training course.

# Installation

Install Angular CLI: `npm install -g @angular/cli`
Install dependencies on root folder: `npm install`

# REST API

A rest api is needed to serve as backend of the application.
By default, a simulated api is used with the angular module `HttpClientInMemoryWebApiModule` and the mock data in `in-memory-data.service.ts`. Remove it from `app.module.ts` if you don't want to use it.
You can then provide your own api, with the base url setup in `environment.ts`.
If the api is on a different server, edit the file `proxy.conf.json` with the correct address, and use `ng serve --proxy-config proxy.conf.json` when deploying.

During the course, the api used was provided by the framework [Deployd](http://deployd.com/) setup in a docker container.

# Commands used to create the project

```
$ ng new angular-todos
$ cd angular-todos
$ ng generate module todo --module=app
$ ng generate component todo/todo-list --module=todo
$ ng generate component todo/todo-form --module=todo
$ ng generate service todo/todo --module=todo
$ ng generate service todo/message --module=todo
$ ng generate class todo/todo
```

***

# AngularTodos

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
