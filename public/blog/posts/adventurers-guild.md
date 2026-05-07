# The Adventurers Guild: Building a Gamified Developer Marketplace

## TL;DR
The Adventurers Guild is a gamified developer marketplace where companies post "quests" (real projects) and CS students complete them for XP, rewards, and progression through an F-to-S ranking system. 500+ users, GirlScript Summer of Code 2025, operating under Open Paws. Built lean for the Indian market with a financial model based on bootstrapping and bootcamp revenue.

**Stack:** Next.js · Prisma · Neon Postgres · TypeScript  
**Live:** [adventurersguild.space](https://adventurersguild.space)  
**Source:** [GitHub](https://github.com/LarytheLord/Adventurers-Guild)

---

## The Problem

CS education globally (and especially in India) has a massive gap between classroom theory and industry practice. Students graduate with algorithms knowledge but can't build production systems. The usual solutions — internships and freelancing — have their own problems:

- **Internships** are gatekept by credentials and connections
- **Freelancing** requires an existing reputation
- **Open source** has a steep onboarding curve and no structured progression
- **Bootcamps** teach skills but don't connect directly to real work

## The Solution: RPG Mechanics for Real Work

The Adventurers Guild takes inspiration from RPG game design (and yes, from Batman's approach to building systems and teams):

### Ranking System: F to S
Every student starts at F rank. As they complete quests and earn XP, they progress:
- **F/E Rank:** Bootcamp-level tasks, guided projects, learning quests
- **D/C Rank:** Real client projects with oversight, bug fixes, feature additions
- **B/A Rank:** Complex projects, leadership roles, mentoring lower ranks
- **S Rank:** Architecture decisions, client-facing work, Guild leadership

### Quest System
External companies, startups, NGOs, and individuals post real projects as "quests." The Guild acts as intermediary:
- **Quality assurance:** Review team (Open Paws founder + me + mentor + senior dev) validates all deliverables
- **Rank matching:** Students can only accept quests at or below their rank level
- **Payment:** Adventurers get paid for completed work; Guild takes 15-30% service fee

### Integration with Open Paws
The Adventurers Guild operates under the Open Paws umbrella:
- **Two-track system:** 20 quality interns handle backlog (D+ rank work), bootcamp students handle F/E rank tasks
- **Payment infrastructure** through Open Paws is ready
- **IP/legal framework** based on existing Open Paws client structure

## How Claude Code Built This

### Phase 1 Codebase Audit
The initial Next.js/Prisma/Neon Postgres codebase went through a comprehensive PM-reviewed audit via Claude Code. The audit covered:
- Code quality and architectural consistency
- Database schema validation against the quest/rank/XP requirements
- API endpoint coverage for the full user journey
- Security review for payment and auth flows

### Feature Build Prompts
Each major feature was developed through structured Claude Code sessions:
- Quest creation and assignment pipeline
- XP calculation and rank progression engine
- Client dashboard for quest posting and status tracking
- Admin panel for QA review workflows

### Financial Modeling
The financial model was built collaboratively with Claude Code:
- Indian market rate analysis for developer compensation
- Open Paws bootcamp cost modeling
- Revenue projections based on quest volume and service fees
- Break-even analysis for lean bootstrapped operation

## Technical Architecture

```
┌────────────────────────────────────────────┐
│             Frontend (Next.js)              │
│  Quest Board → Profile → Rank Dashboard    │
└──────────────┬─────────────────────────────┘
               │
┌──────────────▼─────────────────────────────┐
│            API Layer (Next.js API)          │
│  Auth → Quests → XP/Rank → Payments        │
└──────────────┬─────────────────────────────┘
               │
┌──────────────▼─────────────────────────────┐
│           Prisma ORM + Neon Postgres        │
│  Users │ Quests │ Submissions │ XP Logs     │
└────────────────────────────────────────────┘
```

## GirlScript Summer of Code 2025

The Adventurers Guild was selected for **GirlScript Summer of Code 2025**, which brought:
- Open source contributors from across India
- 10 stars and 25 forks on GitHub
- Community validation of the gamification approach
- Contributors who became early adopters of the platform

## Key Decisions

**Why Neon Postgres over Supabase?** After the Supabase India block situation affecting Knight Medicare and other projects, we chose Neon for its serverless Postgres model with no regional restrictions. Prisma provides the ORM layer.

**Why under Open Paws?** Brand leverage, payment infrastructure, legal framework, and a shared mission around building ethical tech. All bootcamp/campus/hackathon work operates under Open Paws branding.

**Why bootstrapped?** VC funding for an EdTech platform in India requires proving unit economics first. The lean model — low compensation overhead at Indian market rates, bootcamp funding covering costs — lets us prove the concept before seeking external capital.

## What's Next

- Scaling the intern track to 20 quality developers
- Hiring a dedicated mentor for the QA/review team
- Building AI-driven quest matching (rank + skills + interest → optimal quest pairing)
- Expanding beyond India to other emerging markets

---

*The Adventurers Guild is open source. If you're a CS student looking for real-world experience, or a company with projects to post, reach out.*
