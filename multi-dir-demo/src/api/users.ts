// Intentionally missing input validation — for Lab 6B subagent to find
import type { Request, Response } from "express";

export async function createUser(req: Request, res: Response) {
  const { email, password, name } = req.body;
  // No validation — should use zod or similar
  const user = await db.users.create({ email, password, name });
  res.json(user);
}

export async function updateUser(req: Request, res: Response) {
  const id = req.params.id;
  const updates = req.body;
  // No validation of `updates` — could allow arbitrary field changes
  const user = await db.users.update(id, updates);
  res.json(user);
}

export async function deleteUser(req: Request, res: Response) {
  const id = req.params.id;
  await db.users.delete(id);
  res.json({ ok: true });
}

declare const db: any;
