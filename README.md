# NestJS e-commerce

Example to exercise clean architecture with different databases + cache layer + DDD.

[![Run E2E Tests](https://github.com/henriqueweiand/nestjs-ecommerce/actions/workflows/run-e2e-tests.yml/badge.svg)](https://github.com/henriqueweiand/nestjs-ecommerce/actions/workflows/run-e2e-tests.yml)
[![Run Unit Tests](https://github.com/henriqueweiand/nestjs-ecommerce/actions/workflows/run-unit-tests.yml/badge.svg)](https://github.com/henriqueweiand/nestjs-ecommerce/actions/workflows/run-unit-tests.yml)

blog post about the project -> https://medium.com/nestjs-ninja/mastering-nestjs-unleashing-the-power-of-clean-architecture-and-ddd-in-e-commerce-development-97850131fd87

## Pre requirements

- To use the full project, you will need to have a Stripe dev account;
- Mongo or Postgres dabatase;

## Running locally

1. Instal the dependecies
2. copy .env.example to .env'
3. run `docker-compose up -d`, it will create a Mongo instance
4. run `yarn start:dev`
5. Access `http://localhost:3000/api`

The default database is set Mongo, but it can be changed inside `app.module.ts`

## API Documentation

Running the solution, access `http://localhost:3000/api`

![Preview](https://github.com/henriqueweiand/nestjs-ecommerce/blob/master/assets/swagger.png)

## To-do

- [x] Product
- [x] User
- [x] Order
- [x] Add Mongo
- [x] Add Postgres
- [x] Add way to switch database easly
- [x] Cache layer
- [x] A few Unit tests
- [x] A few e2e tests
- [x] Stripe integration
