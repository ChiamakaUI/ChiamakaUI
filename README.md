# Chiamaka Ezemba

Backend and fullstack engineer. Currently founding engineer at [VidBloq](https://vidbloq.com), building SDK infrastructure for blockchain-based monetization inside live video — tipping, paid access, prediction markets, and contests, settled in USDC on Solana.
VidBloq is multi-tenant: each tenant gets the same monetization primitives configured to their product.

---

## Stack

**Backend**: Node.js, TypeScript, PostgreSQL (PgTyped — typed `.sql` files, not an ORM), Express, WebSockets  
**Frontend**: React, Next.js 14, Tailwind, shadcn/ui  
**Blockchain**: Solana, Anchor, Rust 
**Infra**: Railway, Vercel, LiveKit

---

## Projects

**[defi-primitive](https://github.com/ChiamakaUI/defi-primitive)** — DeFi primitives in Rust: constant product AMM, Uniswap V3-style concentrated liquidity with tick crossing, and a price-time priority order book. Type-safe token pairs enforced at compile time via phantom types. Invariants verified with proptest.

**[ledgerly-server](https://github.com/ChiamakaUI/ledgerly-server)** — Backend for a paid call-booking platform. Every booking creates a USDC escrow on Solana — locked at booking, released on call completion, refundable on host no-show. PgTyped for typed SQL, no ORM, no controllers layer.

**SquadXI** — Fantasy football platform with on-chain prize distribution. Single Anchor program manages the full contest lifecycle. Chose on-chain settlement to eliminate platform trust assumptions on prize custody.

---

## Currently

Open to remote backend or fullstack roles. Strongest in event-driven systems, real-time data pipelines, and on-chain financial transactions.

→ [LinkedIn](https://linkedin.com/in/chiamaka-ezemba) · [Email](mailto:ezembachiamaka@gmail.com)
