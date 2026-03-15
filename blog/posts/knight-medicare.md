# Knight Medicare: Building an AI Therapy Platform as a 19-Year-Old CTO

## TL;DR
Knight Medicare is an AI-powered Cognitive Behavioral Therapy platform built in collaboration with a Harvard PhD psychologist. As CTO and co-founder, I lead the full technical stack — Next.js 15, React 19, Supabase — covering 27 psychiatric disorders and 10 therapy modalities. The platform makes evidence-based mental health support accessible through AI-assisted therapeutic conversations.

**Stack:** Next.js 15 · React 19 · TypeScript · Supabase · AI/ML  
**Role:** CTO & Co-founder

---

## Why This Exists

Mental healthcare has a global access problem. There aren't enough therapists, they're too expensive for most people, and the stigma barrier in many cultures (especially in India) means people who need help don't seek it. CBT (Cognitive Behavioral Therapy) is one of the most evidence-backed therapeutic approaches, and its structured nature makes it uniquely suited for AI augmentation.

The key insight: **you don't replace therapists — you extend their reach.** AI handles the structured CBT exercises, psychoeducation, and between-session support. Human therapists focus on complex cases, crisis intervention, and the relationship-building that AI can't replicate.

## The Partnership

This isn't a solo project. Knight Medicare was co-founded with a **Harvard PhD psychologist** who brings clinical expertise, therapeutic framework design, and research validation. The division is clean:
- **Clinical side:** Therapy protocols, disorder coverage, safety frameworks, ethical guidelines
- **Technical side (me):** Full-stack architecture, AI integration, deployment, scaling

## Technical Architecture

### Stack Decisions
- **Next.js 15 + React 19:** Server components for fast initial loads, streaming for therapeutic conversation interfaces
- **TypeScript:** Non-negotiable for a healthcare platform — type safety prevents bugs that could affect therapeutic accuracy
- **Supabase:** Auth, real-time subscriptions for conversation state, PostgreSQL for structured clinical data
- **Abstraction layers:** Built to survive infrastructure changes (critical after the Supabase India block situation)

### Coverage
- **27 psychiatric disorders** — from major depression and anxiety disorders to PTSD, OCD, eating disorders, and substance use disorders
- **10 therapy modalities** — CBT core, plus behavioral activation, exposure therapy, cognitive restructuring, mindfulness-based approaches, and more
- Each disorder-modality combination has clinician-validated conversation flows

### Safety Architecture
Mental health AI has unique safety requirements:
- Crisis detection and escalation pathways
- Clear boundaries on what the AI will and won't address
- Session logging for clinical review
- Explicit disclaimers and human therapist referral triggers

## How Claude Code Runs the Technical Side

### Codebase Architecture
The full Next.js 15 / React 19 codebase was built and iterated through Claude Code. The therapeutic conversation engine, Supabase schema design, auth flows, and abstraction layers — all developed through Claude Code sessions.

### Infrastructure Hardening
When the Supabase India block hit, Claude Code was used to:
- Design abstraction layers so the platform isn't locked to any single BaaS provider
- Evaluate migration to Yotta (self-hosted Supabase on Indian sovereign cloud)
- Build fallback connection logic and data portability features

### Clinical Data Modeling
The 27-disorder × 10-modality matrix creates a complex data model. Claude Code helped design:
- The disorder taxonomy schema
- Therapy session state machines
- Progress tracking and outcome measurement structures
- The conversation flow engine that adapts based on disorder and modality

## The CTO Experience at 19

Running technical for a healthcare AI startup while being a college student is a particular kind of chaos. Some patterns that work:

**Claude Code as a force multiplier.** A single developer can't build a production healthcare platform alone in any reasonable timeline. Claude Code sessions handle the heavy lifting — complex data migrations, API integrations, debugging session state edge cases — while I focus on architectural decisions and clinical accuracy validation.

**Ruthless prioritization.** Not every feature matters equally. The CBT conversation engine and safety architecture come before pretty dashboards. Ship the core therapeutic value first.

**Async collaboration.** Working with a co-founder in a different timezone requires structured communication. Design docs, Supabase schema diagrams, and shared Claude Code conversation summaries keep everyone aligned.

## What's Next

- Expanding therapy modality coverage
- Adding clinician dashboards for supervision
- Exploring partnerships with mental health organizations in India
- Infrastructure migration to sovereign cloud (Yotta evaluation ongoing)

## Key Lesson

Healthcare AI is not about replacing human judgment — it's about **scaling access to evidence-based care.** The 27×10 disorder-modality matrix means thousands of possible therapeutic paths. No single therapist can deliver all of them. AI can, 24/7, in any language, at zero marginal cost per session.

---

*Knight Medicare is in active development. If you're working in mental health tech or clinical AI, reach out.*
