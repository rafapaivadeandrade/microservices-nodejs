import { fastify } from "fastify";
import { randomUUID } from "node:crypto";
import { fastifyCors } from "@fastify/cors";
import { z } from "zod";
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { channels } from "../broker/channels/index.ts";
import { schema } from "../db/schema/index.ts";
import { db } from "../db/client.ts";
import { dispatchOrderCreated } from "../broker/messages/order-created.ts";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.register(fastifyCors, { origin: "*" });

app.get("/health", () => {
  return "OK";
});

app.post(
  "/orders",
  {
    schema: {
      body: z.object({
        amount: z.coerce.number(),
      }),
    },
  },
  async (request, reply) => {
    const { amount } = request.body;

    console.log("Creating an order with amount", amount);

    const orderId = randomUUID();

    dispatchOrderCreated({
      orderId,
      amount,
      customer: {
        id: "B9176D35-7276-4255-A323-D825CAEE03B5",
      },
    });

    try {
      await db.insert(schema.orders).values({
        id: orderId,
        customerId: "B9176D35-7276-4255-A323-D825CAEE03B5",
        amount,
      });
    } catch (err) {
      console.log(err);
    }

    return reply.status(201).send();
  }
);

app.listen({ host: "0.0.0.0", port: 3333 }).then(() => {
  console.log("[Orders] HTTP Server running!");
});
