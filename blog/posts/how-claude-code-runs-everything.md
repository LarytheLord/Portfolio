# How Claude Code Manages Everything: Running 11 Projects Across 4 Domains

## TL;DR
Claude Code is the operational backbone of my entire development workflow. Across 11 active projects spanning civic tech, healthcare AI, EdTech, and open source — everything from architecture decisions to pitch deck content to CSV data pipelines to infrastructure migrations runs through Claude Code sessions. This isn't "AI writes my code" — it's "AI is my technical co-pilot across every domain I operate in."

---

## The Scale of Operations

At any given time, I'm running:

| Domain | Projects | What Claude Code Does |
|--------|----------|----------------------|
| **Civic Tech** | Open Permit | Codebase dev, pitch decks, funder outreach, legal framework expansion, data pipelines |
| **Healthcare AI** | Knight Medicare | Full stack dev, Supabase schema, abstraction layers, clinical data modeling |
| **EdTech** | Adventurers Guild | Next.js/Prisma codebase, financial modeling, feature specs, PM audit |
| **Open Source** | Open Paws (multiple repos) | RAG systems, data pipelines, platform infrastructure, Project Slingshot |
| **OSS Contributions** | 40+ external repos | Codebase understanding, PR preparation, test writing, review responses |
| **Infrastructure** | Cross-project | Yotta migration evaluation, Supabase alternatives, self-hosting analysis |
| **Fundraising** | Open Permit + broader | Grant pitches, funder databases, outreach campaigns, pitch iterations |
| **Career** | Portfolio, applications | Resume, portfolio updates, program applications (Anthropic Fellows, FR8, Good Growth) |

That's not a workload a 19-year-old CS student handles alone. Claude Code is how it's possible.

## How It Actually Works

### Pattern 1: Architecture Sessions
When starting a new feature or project, I open a Claude Code session with the full context:
- What exists (existing codebase, database schema, API structure)
- What needs to exist (feature requirements, user stories, constraints)
- What could go wrong (edge cases, security considerations, scaling concerns)

Claude Code doesn't just generate code — it helps me **think through architecture.** The back-and-forth conversation surfaces edge cases I wouldn't have considered, suggests patterns from other domains, and challenges assumptions.

**Example:** Knight Medicare's abstraction layer design. When the Supabase India block hit, I needed to decouple the entire data layer from Supabase-specific APIs. Claude Code helped design the abstraction so that swapping from Supabase to self-hosted PostgreSQL (via Yotta) would require changing adapter code, not business logic.

### Pattern 2: Data Pipeline Development
A surprising amount of my work is data pipelines, not web UIs:
- **Open Permit:** CSV processing for 197 funder contacts across 75 countries, recipient routing for objection letters, permit data normalization
- **Project Slingshot:** 12+ API sources feeding a Supabase data layer for UK factory farming discourse tracking
- **Financial analysis:** Personal IDFC First Bank data analysis (6.5 months), investment strategy modeling
- **Outreach campaigns:** Brevo bulk campaigns targeting ~150 NGOs/funders across 30+ countries

Claude Code handles the tedious but critical parts: CSV parsing, data validation, transformation logic, template generation, API integration boilerplate. I focus on what the data means and where it needs to go.

### Pattern 3: Pitch & Strategy Work
This might surprise people, but a huge amount of my Claude Code usage is **non-technical:**
- **AARC Demo Day pitch deck:** Multiple iterations of the Open Permit pitch, refining the narrative from "hackathon project" to "civic intelligence platform"
- **SFF grant pitch:** Framing Open Permit as an institutional learning mechanism for existential risk — that conceptual framing was developed through Claude conversations
- **Dasra outreach:** Warm funder approach strategy, email drafts, follow-up sequences
- **ALPN collaboration:** Drafting outreach to a collaborator for India-specific permit work
- **Financial models:** Adventurers Guild lean bootstrapping model with Indian market compensation rates

### Pattern 4: OSS Contribution Workflow
When contributing to repos with thousands of stars:
1. **Codebase understanding:** "Here's the repo structure. I see this issue. Explain how this module works and what a fix would look like."
2. **PR preparation:** "Draft a clear PR description that explains the problem, the solution, and how I tested it."
3. **Review iteration:** "The maintainer asked for this change. Here's their comment. How should I modify the code?"

This workflow turned me from "occasional OSS contributor" to "56+ merged PRs in 2026" — because the bottleneck isn't coding ability, it's **understanding unfamiliar codebases quickly enough to contribute meaningfully.**

### Pattern 5: Infrastructure Decisions
The cross-project infrastructure work requires evaluating complex tradeoffs:
- **Yotta evaluation:** 29 services across 11 projects, 4 vCPU/16GB KVM VM, 63%+ projected cost reduction. Claude Code helped model the migration plan, identify service dependencies, and estimate downtime.
- **SMS provider selection:** MSG91 + Plivo dual approach (India + international). Claude Code compared pricing models, API capabilities, and reliability across providers.
- **Supabase alternatives:** When the India block hit, Claude Code helped evaluate self-hosting options, migration complexity, and data portability for each affected project.

## The Meta-Pattern: Claude Code as Institutional Memory

Across 100+ conversations, Claude Code has accumulated context about:
- How all 11 projects relate to each other
- My technical preferences and architectural patterns
- The fundraising pipeline and where each contact stands
- Infrastructure constraints and migration plans
- Career goals and where different opportunities fit

This means each new session starts with context. When I say "update the Open Permit pitch for the Dasra meeting," Claude Code knows what Open Permit is, what the current pitch covers, who Dasra is, and what angle would resonate. That **compounding context** is the real value — not any individual code generation.

## What Claude Code Doesn't Do

Honesty matters. Here's what Claude Code **doesn't** handle:
- **Clinical decisions** for Knight Medicare — that's the Harvard PhD co-founder's domain
- **Relationship building** — fundraiser meetings, hackathon networking, team management are human work
- **Creative vision** — the "what should we build" decisions come from understanding users and markets
- **Shipping discipline** — Claude Code can build anything, but deciding what to ship today vs. next month is a human judgment call
- **Accountability** — when code breaks in production at 2 AM, that's on me, not on Claude

## The Workflow in Practice

A typical day might look like:

```
Morning:
├── Claude Code session: Review overnight Slingshot data pipeline results
├── Claude Code session: Fix a bug in Adventurers Guild quest assignment
└── Claude Code session: Iterate on Open Permit funder email draft

Afternoon:
├── Claude Code session: Design new Knight Medicare therapy module
├── Manual: Code review on Adventurers Guild intern PRs
└── Claude Code session: Prepare OSS contribution for kepler repo

Evening:
├── Claude Code session: Financial model update for Adventurers Guild
├── Manual: College coursework
└── Claude Code session: Update portfolio content (yes, this too)
```

That's 6-7 Claude Code sessions per day, each solving a different problem in a different domain. The context switching would be impossible without a tool that can hold the full context of each project.

## By The Numbers

```
Claude Code Usage (estimated):
├── Sessions per day: 6-7
├── Projects covered: 11+
├── Domains: Civic tech, Healthcare AI, EdTech, OSS, Infra, Fundraising
├── Output types: Code, data pipelines, pitch content, financial models,
│                 documentation, outreach drafts, architecture designs
└── Force multiplier: ~4-5x (conservative estimate)
```

Without Claude Code, I'd be running maybe 2-3 projects. With it, I run 11. That's the real story.

## Key Lesson

Claude Code isn't a replacement for engineering skill — it's a **multiplier** for it. You still need to know what good architecture looks like, what questions to ask, what tradeoffs matter, and when to push back on a generated solution. But once you have that judgment, Claude Code lets you apply it across 5x more projects than you could otherwise handle.

The analogy I use: Batman doesn't fight crime because he has a Batcave full of gadgets. He fights crime because he has the **judgment** to use those gadgets effectively. The gadgets just extend his reach. Claude Code is my Batcave.

---

*This entire portfolio update was managed through Claude Code. Meta enough for you?*
