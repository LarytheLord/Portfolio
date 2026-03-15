# Infrastructure: The Supabase India Block, Yotta Migration, and Running 29 Services Across 11 Projects

## TL;DR
When Supabase was blocked in India, it affected multiple production projects across my stack. The response: evaluate a full migration of 29 services across 11 projects to Yotta's self-hosted cloud (Option B: 4 vCPU/16GB KVM VM) on Indian sovereign infrastructure, with a projected 63%+ cost reduction. This is the story of infrastructure decisions at scale when you're a 19-year-old running multiple production platforms.

---

## The Supabase India Block

Supabase — the open-source Firebase alternative that powers multiple projects in my stack — was blocked in India. The impact was immediate and cross-cutting:

**Affected projects:**
- **Knight Medicare:** CBT therapy platform (27 disorders, 10 therapy types) — production data layer
- **Open Permit:** Civic intelligence platform (200+ permits, 40 legal frameworks) — core database
- **Adventurers Guild:** Developer marketplace (500+ users) — user data, quest storage
- **AfA Resource Chatbot:** RAG system — vector storage (pgvector)
- **Project Slingshot UK:** Data pipeline — 12+ API sources feeding Supabase

When your primary database provider gets blocked in your country, you learn very quickly how important infrastructure abstraction is.

## The Evaluation: Three Options

### Option A: Wait It Out
Hope the block gets reversed. Risk: indefinite downtime for Indian users, no control over timeline.

**Verdict:** Unacceptable for production platforms.

### Option B: Yotta Self-Hosted (Selected)
Migrate to Yotta Data Centre in Panvel — Indian sovereign cloud infrastructure:
- **Spec:** 4 vCPU / 16GB RAM KVM VM
- **Self-hosted Supabase:** Run the open-source Supabase stack (PostgreSQL, GoTrue, PostgREST, Realtime) on our own infrastructure
- **Cost:** 63%+ reduction vs. Supabase cloud pricing
- **Control:** Full data sovereignty, no dependency on external SaaS provider's regional availability

### Option C: Alternative BaaS Providers
Evaluate Firebase, PlanetScale, Neon, or other managed databases.

**Verdict:** Each has tradeoffs — Firebase lacks PostgreSQL, PlanetScale doesn't support pgvector, Neon works for new projects (Adventurers Guild uses it) but migrating existing Supabase projects is complex.

## The Migration Plan

### Scope: 29 Services Across 11 Projects

```
Migration Inventory:
├── Knight Medicare
│   ├── Auth (GoTrue)
│   ├── Database (PostgreSQL)
│   ├── Realtime subscriptions
│   └── Storage (therapy session data)
├── Open Permit
│   ├── Auth
│   ├── Database (permits, legal frameworks, users)
│   └── Edge functions
├── Project Slingshot
│   ├── Database (API ingestion data)
│   └── Scheduled functions
├── AfA Chatbot
│   ├── pgvector (embeddings)
│   └── Database (resources, conversations)
└── [7 more projects...]
    └── Various Supabase services
```

### Abstraction Layer Strategy

The key architectural decision: **don't just migrate, abstract.**

For Knight Medicare specifically, Claude Code helped design abstraction layers:

```typescript
// Before: Supabase-specific
const { data } = await supabase.from('sessions').select('*')

// After: Abstracted
const data = await db.sessions.findAll()
// db adapter can point to Supabase, self-hosted PG, or any future provider
```

This means the next infrastructure disruption doesn't require rewriting business logic — just swapping the adapter.

### Yotta Data Center Visit (March 11, 2025)

Visited the Yotta Data Center in Panvel to evaluate:
- **Physical security and redundancy**
- **Network connectivity and latency** to major Indian cities
- **VM provisioning and management tools**
- **Support SLAs and escalation paths**
- **Partnership possibilities** (not just customer, but potential integration partner)

The visit confirmed Yotta as the right choice for Indian sovereign hosting.

## Cross-Project Infrastructure Decisions

### SMS Provider: MSG91 + Plivo Dual Approach
Knight Medicare and other projects need SMS for auth and notifications:
- **MSG91:** India-focused, best rates for domestic SMS, DLT compliance built-in
- **Plivo:** International coverage for non-India users
- **Dual approach:** Route India traffic through MSG91, international through Plivo

Evaluated through Claude Code sessions comparing pricing models, API capabilities, delivery rates, and DLT compliance requirements.

### Database Strategy by Project

| Project | Current | Target | Why |
|---------|---------|--------|-----|
| Knight Medicare | Supabase Cloud | Yotta Self-Hosted | Data sovereignty, healthcare compliance |
| Open Permit | Supabase Cloud | Yotta Self-Hosted | Core platform, needs reliability |
| Adventurers Guild | Neon Postgres | Keep Neon | Already on Neon, works well, no India block |
| AfA Chatbot | Supabase pgvector | Yotta Self-Hosted | Vector search needs to be local |
| Project Slingshot | Supabase Cloud | Yotta Self-Hosted | Data pipeline reliability |

### Cost Analysis

```
Current (Supabase Cloud, all projects):
├── Monthly cost: ~$XX (multiple Pro plans)
└── Annual: ~$XXX

Projected (Yotta Self-Hosted):
├── VM cost: ~$XX/month (4 vCPU/16GB)
├── All 29 services on single VM
└── Annual savings: 63%+
```

The cost reduction is significant, but the real value is **control.** No more regional blocks taking down production platforms.

## How Claude Code Managed the Migration Planning

### Service Inventory
Claude Code helped catalog all 29 services across 11 projects — identifying which Supabase features each project uses (Auth, Database, Realtime, Storage, Edge Functions, pgvector) and what the migration complexity looks like for each.

### Docker Compose for Self-Hosted Supabase
The self-hosted Supabase stack runs via Docker Compose:
- PostgreSQL with pgvector extension
- GoTrue for authentication
- PostgREST for auto-generated REST API
- Realtime for WebSocket subscriptions
- Storage API for file management
- Kong for API gateway

Claude Code helped design the Docker Compose configuration, environment variables, and networking setup for the Yotta VM.

### Migration Scripts
For each project, Claude Code helped write:
- Database schema migration scripts
- Data export/import procedures
- Auth user migration (GoTrue to GoTrue)
- Environment variable updates across all project deployments
- Health check and rollback procedures

### Abstraction Layer Implementation
The Knight Medicare abstraction layer — and the template for applying it to other projects — was designed and implemented through Claude Code sessions. The pattern:
1. Define a generic database interface
2. Implement Supabase adapter (current)
3. Implement self-hosted PostgreSQL adapter (target)
4. Swap adapters via environment variable
5. Run both in parallel during migration for validation

## Key Lessons

### 1. Never Lock Into a Single Provider
The Supabase India block taught me: **if your stack depends on a single provider's regional availability, you don't have a stack — you have a liability.** Abstraction layers aren't overengineering; they're insurance.

### 2. Self-Hosting is Cheaper at Scale
For a single project, managed services make sense. For 11 projects with 29 services, self-hosting on a $XX/month VM saves 63%+ and gives you full control. The operational overhead of self-hosting is real, but Claude Code significantly reduces it.

### 3. Indian Sovereign Cloud Matters
For Indian users, Indian data sovereignty isn't just a compliance checkbox — it's a latency and reliability advantage. Yotta in Panvel means single-digit millisecond latency to Mumbai and reasonable latency nationwide.

### 4. Infrastructure Planning is Product Planning
The time spent on migration planning wasn't "ops overhead" — it was product work. Reliable infrastructure means Knight Medicare therapy sessions don't drop mid-conversation, Open Permit objection letters get generated on time, and Adventurers Guild quest assignments don't fail.

---

*Infrastructure is the invisible foundation. When it works, nobody notices. When it breaks, everyone does.*
