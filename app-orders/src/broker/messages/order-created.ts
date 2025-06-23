import { channels } from "../channels/index.ts";
import type { OrderCreatedMessage } from "../../../../contracts/messages/order-created-message.ts";

export function dispatchOrderCreated(data: OrderCreatedMessage) {
  console.log("[RabbitMQ] Sending message to queue 'orders':", data);
  channels.orders.sendToQueue("orders", Buffer.from(JSON.stringify(data)));
}

// import { channels } from "../channels/index.ts";
// import type { OrderCreatedMessage } from "../../../../contracts/messages/order-created-message.ts";
// import { context, propagation } from "@opentelemetry/api";

// export function dispatchOrderCreated(data: OrderCreatedMessage) {
//   const otelHeaders: Record<string, string> = {};

//   // Injeta o contexto de trace atual
//   propagation.inject(context.active(), otelHeaders);

//   const payload = {
//     data,
//     otel: otelHeaders,
//   };

//   console.log("[RabbitMQ] Sending message to queue 'orders':", payload);

//   channels.orders.sendToQueue("orders", Buffer.from(JSON.stringify(payload)));
// }
