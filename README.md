# Lab 6 — Multi-Directory Demo + MCP Configs

> ใช้กับ Module 6 (Advanced)

ครอบคลุม Lab 6A (MCP), 6B (Subagent parallel), 6C (Multimodal), 6D (Cloud parallel)

## โครงสร้าง

```
multi-dir-demo/        # Lab 6B — repo มีหลาย directory ให้ subagent audit
├── src/
│   ├── components/    # มี TSX files (intentionally missing prop types)
│   ├── api/           # มี TS routes (intentionally missing validation)
│   └── utils/         # มี TS helpers (intentionally has unused exports)
└── package.json

mcp-config-samples/    # Lab 6A — ตัวอย่าง config.toml
├── filesystem.toml
├── github.toml
└── postgres.toml
```

## Lab 6A — MCP (Context7)

ใช้ **Context7** — MCP server ที่ดึง live documentation ของ library ใด ก็ได้

```bash
# Copy Context7 block ไปต่อท้าย ~/.codex/config.toml
cat mcp-config-samples/context7.toml >> ~/.codex/config.toml

# เปิด codex
cd ~/codex-sandbox       # folder ใด ก็ได้
codex
```

prompt:
```
use context7 to look up the latest FastAPI lifespan events documentation.
Show me an example using @asynccontextmanager.
```

หรือ:
```
Use Context7 to fetch the latest Drizzle ORM API for inserting rows
with returning(). Then write a sample.
```

สังเกต: Codex เรียก `resolve-library-id` → `get-library-docs` ผ่าน MCP → ได้ docs จริง ที่อาจใหม่กว่า training cutoff ของ model

## Lab 6B — Subagent Parallel

```bash
cd multi-dir-demo/
codex --full-auto
```
prompt:
```
Spawn 3 subagents in parallel to:
1. Audit src/components/ for missing prop types
2. Audit src/api/ for missing input validation
3. Audit src/utils/ for unused exports
Return a single combined report with priorities.
```

สังเกต TUI แสดง subagent หลายตัวทำงานพร้อมกัน

## Lab 6C — Multimodal

ใน folder ใด ก็ได้:
```bash
codex
```
prompt:
```
Please look at <path/to/screenshot.png> and create a React + Tailwind
component that matches the visual style. Save to ./Card.tsx.
```

(หา screenshot จาก Tailwind UI / Stripe / Linear)

## Lab 6D — Cloud Parallel

ต้อง push code ขึ้น GitHub แล้วใช้ codex.com/codex web:
- Task #1: Add JSDoc to all exported functions in src/utils/
- Task #2: Generate CONTRIBUTING.md based on existing conventions
- Task #3: Find and remove dead code

## ✅ Checkpoint

- [ ] เพิ่ม MCP ได้อย่างน้อย 1 server
- [ ] Spawn subagent / ใช้ /review ได้
- [ ] เคยส่งรูปให้ Codex แล้วได้ output
- [ ] เข้าใจรูปแบบ workflow แบบ parallel cloud
