

## Plan: Add Missing Terms to Glossary and Quiz Sections

### Gap Analysis

After reviewing all chapters against the glossary and quiz, here are the missing items:

**Missing from Glossary:**

*Technology section:*
- **Clearinghouse** — referenced in ChapterOnchainGTM (custodians, clearinghouses, legacy middlemen)
- **Onchain Credit** — referenced in ChapterOnchainGTM as a key hook
- **DeFi** — used across multiple chapters, never defined
- **Infrastructure Arbitrage** — core concept of Chapter 14

*Marketing section:*
- **Sibos** — referenced in Chapter 4 (events table) and Chapter 12 quiz
- **Demand Generation** — used in ChapterChecklist (Phase 3 title)
- **CRM** — referenced heavily in Chapter 06c (HubSpot tracking)
- **Nurture Sequence** — referenced in Chapter 12 quiz and sales cycle content
- **Product Champion** — referenced in Chapter 12 quiz (enterprise buying dynamics)
- **First-Touch / Last-Touch Attribution** — defined in Chapter 06c but not in glossary (only Multi-Touch is there)
- **Board-Ready One-Pager** — referenced in Chapter 12 quiz hint
- **Clay** — referenced in Chapter 06c as a key tool
- **HeyReach** — referenced in Chapter 06c as a LinkedIn outreach tool

*Buyers section:*
- **LP Allocator** — referenced in Chapter 03 persona and quiz

**Missing from Quiz (Test Yourself):**

- **Onchain GTM section** — no quiz questions cover the new Chapter 14 content (infrastructure vs feature positioning, three selling stages)
- **Pipeline Attribution Model section** — Chapter 06c content on building attribution models has no quiz coverage beyond 2 basic questions
- **Demand Gen Checklist** — no quiz questions test the tactical checklist content

### Changes

**File: `src/components/playbook/chapters/Chapter13.tsx`**
- Add ~13 new glossary terms across existing sections (Buyers, Technology, Marketing Terms)

**File: `src/components/playbook/chapters/Chapter12.tsx`**
- Add new quiz section: "Onchain GTM & Infrastructure Positioning" (~3 questions covering Chapter 14 concepts)
- Add new quiz section: "Demand Generation & Tactical Execution" (~3 questions covering checklist and tooling content)

### No other files affected. No backend changes.

