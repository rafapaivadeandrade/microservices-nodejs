# 🧩 Microservices Architecture — Orders & Invoices

## ℹ️ About

This project is a microservices architecture built with **Node.js** and **TypeScript**, integrating services via **RabbitMQ**, with distributed tracing through **OpenTelemetry** and visualization using **Jaeger**. It also uses **PostgreSQL** via **Drizzle ORM**, **Kong API Gateway** for routing and service management, and is fully containerized using **Docker**, with **Pulumi** for infrastructure as code to deploy on AWS.

## 🧱 Architecture Overview

- **Orders Service**: Exposes HTTP endpoints, persists data into PostgreSQL, and publishes messages to RabbitMQ.
- **Invoices Service**: Listens to the `orders` queue and processes incoming messages.
- **Kong Gateway**: Central API Gateway that routes and controls access to microservices.
- **Observability**: End-to-end tracing implemented with OpenTelemetry and visualized in Jaeger, including context propagation over RabbitMQ.
- **Infrastructure**: Managed with Docker and Pulumi for local and cloud deployments(AWS).

## 🔍 Preview


<details>
  <summary>📦 Example of a complete distributed Kong and RabbitMQ flow</summary>

  ![Image](https://github.com/user-attachments/assets/eacb0ed4-6264-41c7-9004-f33fc31db0e9)
  
  ![Image](https://github.com/user-attachments/assets/c6ed14ae-024b-4900-833f-4f6e50fd51bf)

</details>

<details>
  <summary>📊 Example of a complete distributed trace from <code>orders</code> to <code>invoices</code></summary>

  ![Image](https://github.com/user-attachments/assets/6905e7ee-817c-454f-9042-e1d85abadbce)
  
  ![Image](https://github.com/user-attachments/assets/7f507e8d-7fa2-4984-bf1f-a72f93d3ff72)

</details>

<details>
  <summary>☁️ Example of service deployment on AWS</summary>

  ![Image](https://github.com/user-attachments/assets/c2252723-9584-493b-8034-9b742f31b1a7)

</details>


</div>

  

## 🖥 Technologies  

The project was developed with the following technologies:

  

<details>

<details> <summary><strong>Backend</strong></summary>
  
Node.js


Fastify

Zod

PostgreSQL

Drizzle ORM

AMQP (RabbitMQ)

OpenTelemetry

Jaeger

Kong API Gateway

TypeScript

</details> <details> <summary><strong>Dev & Infra</strong></summary>
AWS

Docker

Docker Compose

Pulumi

dotenv

</details>

## 🚀 Getting Started

### Pre-requisites

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Pulumi](https://www.pulumi.com/)
- [Yarn](https://yarnpkg.com/) or `npm`
  

First of all you need to have `node` and `yarn`(or `npm`) installed on your machine.

  

_If you decide to use npm don't forget to delete yarn.lock in folders_

  

Then you can clone the repository.

`git clone https://github.com/rafapaivadeandrade/microservices-nodejs`
  

First start the application backend.


1. `cd microservices-nodejs`

1. 1. `cd app-orders`
      
1. 2. `cd app-invoices`
   
2. `yarn` or `npm install`

3. `yarn dev` or `npm run dev`
  

## 📝 License


This project is under the MIT license. See the [LICENSE]([https://github.com/rafapaivadeandrade/microservices-nodejs/blob/master/LICENSE.md](https://github.com/rafapaivadeandrade/microservices-nodejs/blob/master/LICENSE.md)) for more information.

  
---

