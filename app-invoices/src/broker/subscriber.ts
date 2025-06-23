import { orders } from "./channels/orders.ts";

orders.consume(
  "orders",
  async (message) => {
    if (!message) {
      return null;
    }

    console.log(message?.content.toString());

    orders.ack(message);
  },
  {
    noAck: false,
  }
);
// import { orders } from "./channels/orders.ts";
// import { context, propagation, trace } from "@opentelemetry/api";

// orders.consume(
//   "orders",
//   async (message) => {
//     if (!message) return;

//     const raw = message.content.toString();

//     let payload;
//     try {
//       payload = JSON.parse(raw);
//     } catch (error) {
//       console.error("Invalid message format", error);
//       orders.nack(message);
//       return;
//     }

//     const { data, otel } = payload;

//     // Extrai o contexto de rastreamento (se existir)
//     const extractedContext = propagation.extract(context.active(), otel ?? {});

//     // Cria um novo span com o contexto extraído
//     const span = trace
//       .getTracer("invoices")
//       .startSpan("orders process", undefined, extractedContext);

//     await context.with(trace.setSpan(context.active(), span), async () => {
//       try {
//         console.log("[Invoices] Processing order:", data);

//         // Aqui você faria seu processamento, como salvar no banco etc.

//         orders.ack(message);
//       } catch (error) {
//         console.error("Error processing message:", error);
//         orders.nack(message);
//       } finally {
//         span.end();
//       }
//     });
//   },
//   { noAck: false }
// );
