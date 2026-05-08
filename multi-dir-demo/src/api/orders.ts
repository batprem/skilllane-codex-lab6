// Intentionally missing input validation
import type { Request, Response } from "express";

export async function createOrder(req: Request, res: Response) {
  const order = req.body;
  // Should validate: items array, prices, etc.
  const created = await db.orders.create(order);
  res.json(created);
}

export async function refundOrder(req: Request, res: Response) {
  const id = req.params.id;
  const { amount, reason } = req.body;
  // No validation — could refund any amount
  await db.orders.refund(id, amount, reason);
  res.json({ ok: true });
}

declare const db: any;
