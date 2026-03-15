# Open Permit: From 10-Hour Hackathon to Civic Intelligence Platform

## TL;DR
Open Permit (originally AFOG — Automated Factory Farm Objection Generator) is a civic intelligence platform that monitors government permits across 8+ countries, ingests planning applications, and generates AI-powered legal objection letters. Built in 10 hours at Code4Compassion Mumbai, scaled through the AARC Pre-Accelerator in Bangalore, now serving citizens, NGOs, and governments globally. 200+ permits ingested, 40 legal frameworks, 197 funder contacts across 75 countries.

**Stack:** Next.js · Express · Supabase · Google Gemini · Apache 2.0  
**Live:** [openpermit.vercel.app](https://openpermit.vercel.app)  
**Source:** [GitHub](https://github.com/LarytheLord/Automated-Factory-Farm-Objection-Generator)

---

## The Problem

Communities worldwide lose battles against harmful development proposals — factory farms, polluting facilities, questionable zoning changes — because they lack the legal expertise and resources to file proper objections within tight regulatory deadlines. A single factory farm permit can affect thousands of people, but the window to object might be 21 days and the legal language required is impenetrable to most citizens.

The legal advocacy pipeline is broken:
- **Cost barrier:** Hiring lawyers for permit objections costs thousands
- **Time barrier:** Regulatory deadlines are strict and unforgiving
- **Knowledge barrier:** Legal citation requirements vary by jurisdiction
- **Scale barrier:** NGOs can't cover every permit in every country

## Origin: Code4Compassion Mumbai (10 Hours)

Built at the Mumbai Code4Compassion hackathon in a single 10-hour sprint. The prototype could:
- Ingest a planning permit document
- Analyze it using Google Gemini for legal issues
- Generate a structured objection letter with relevant citations
- Output it in a format ready for submission to regulatory bodies

We won the hackathon. But the real question was: could this scale?

## Scaling Through AARC Pre-Accelerator

Open Permit was accepted into the **AARC Pre-Accelerator in Bangalore**. This is where the transformation happened:

### Rebrand: AFOG → Open Permit
The original name was specific to factory farms. The actual technology was jurisdiction-agnostic — it could handle any government permit. The rebrand to Open Permit reflected the broader civic intelligence vision.

### Multi-Country Expansion
Went from India-only to 8+ countries. Each country required:
- Understanding local permit filing systems
- Building legal framework parsers for different jurisdictions
- Adapting objection letter templates to local legal standards
- Translating and localizing the AI prompts

### Data Scale
- **200+ real permits** ingested and processed
- **40 legal frameworks** supported across jurisdictions
- **Recipient routing CSV** for directing objection letters to correct authorities
- Bulk outreach campaigns via Brevo targeting ~150 NGOs/funders across 30+ countries

### Fundraising & Pitch
- Built a **funder outreach database** of 197 contacts across 75 countries
- Multiple **pitch deck iterations** for AARC Demo Day (delivered March 7, 2025)
- Warm leads at **Dasra** (philanthropic org)
- **SFF grant pitch** framing Open Permit as an institutional learning mechanism for existential risk
- LinkedIn and email outreach to collaborator leads (including ALPN for India-specific permit work)

## How Claude Code Manages This

Claude Code is deeply embedded in the Open Permit development workflow. Here's how:

### Codebase Development
The entire Next.js + Express stack was iterated through Claude Code sessions. Complex features like the permit ingestion pipeline, Gemini API integration for legal text generation, and the recipient routing system were all built through collaborative Claude Code conversations — often starting with a problem statement and ending with deployed code.

### Pitch Deck & Funder Materials
Every version of the AARC Demo Day pitch deck content, the funder outreach database structure, the SFF grant framing — all developed through Claude Code. The grant pitch in particular required framing Open Permit not just as a civic tool but as an **institutional learning mechanism** — that conceptual work happened in Claude conversations.

### Data Pipeline Work
The CSV-based operations are a core part of how Open Permit operates:
- Permit data ingestion and normalization
- Funder contact databases (197 contacts, 75 countries)
- Recipient routing for objection letters
- Bulk email campaign structuring via Brevo

All of this data pipeline work — CSV parsing, validation, transformation, template generation — runs through Claude Code sessions.

### Legal Framework Expansion
Each new country requires understanding local legal standards. Claude Code sessions help research jurisdiction requirements, draft legal templates, and validate citation formats before they go into the platform.

## Technical Architecture

```
┌─────────────────────────────────────────────────┐
│                   Frontend                       │
│              Next.js + React                     │
│   Permit Upload → Analysis View → Letter Gen     │
└─────────────┬───────────────────────────────────┘
              │
┌─────────────▼───────────────────────────────────┐
│                Backend API                       │
│                Express.js                        │
│   Permit Parser → Gemini Integration → Router    │
└─────────────┬───────────────────────────────────┘
              │
┌─────────────▼───────────────────────────────────┐
│              Data Layer                          │
│          Supabase (PostgreSQL)                   │
│   Permits │ Legal Frameworks │ Users │ Letters   │
└─────────────────────────────────────────────────┘
              │
┌─────────────▼───────────────────────────────────┐
│            AI Layer                              │
│        Google Gemini API                         │
│   Permit Analysis → Citation Gen → Letter Draft  │
└─────────────────────────────────────────────────┘
```

## What's Next

- **India-specific permit work** via ALPN collaborator
- **Self-hosted infrastructure** evaluation (Yotta Data Center partnership in Panvel)
- **Anthropic Fellows Program** exploration for AI safety angle
- Continued fundraising across the 197-contact pipeline
- Expanding legal framework coverage past 40 jurisdictions

## Key Lesson

The biggest insight from Open Permit: **civic tech doesn't need to be slow.** The gap between "10-hour hackathon prototype" and "production platform serving 8 countries" is not years — it's focused execution, the right tools (Claude Code, Gemini, Supabase), and a refusal to wait for permission.

---

*Open Permit is open source under Apache 2.0. Contributions welcome.*
