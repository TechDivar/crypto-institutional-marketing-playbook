

## Plan: Remove PDF/Email, Remove Ch 19, Add Onchain GTM Chapter

### What changes

**1. Remove PDF download and email capture entirely**
- Delete `src/components/playbook/ui/EmailCaptureForm.tsx`
- Remove email form from `PlaybookHero.tsx`, `PlaybookSidebar.tsx`, and `ChapterThankYou.tsx`
- Restore simpler CTAs (Substack subscribe button stays)

**2. Remove Chapter 19 (The Institutional Marketing Stack)**
- Delete `src/components/playbook/chapters/ChapterFramework.tsx`
- Remove from `ChapterRenderer.tsx`, `playbook-data.ts`, and `PlaybookSidebar.tsx`

**3. Add new chapter: "Onchain GTM Strategy for Fintechs"**
- Create `src/components/playbook/chapters/ChapterOnchainGTM.tsx`
- Best placement: **after "The Launch Playbook" (Ch 13) and before "Metrics and KPIs"** — the launch chapter covers positioning-to-post-launch, and the onchain GTM chapter extends that with a specific institutional GTM motion before measuring results with KPIs
- Content structured with `SectionBlock`, `BulletList`, and `Callout` components matching playbook design
- Sections: Core Strategic Insight, Three GTM Angles, Three-Stage GTM Motion, Key Messaging Principle

**4. Update chapter numbering and navigation**
- `playbook-data.ts`: Replace Ch 19 (Marketing Stack) with new chapter, reorder so the new chapter is id 14, bump current 14-18 to 15-19
- `ChapterRenderer.tsx`: Update component mapping — remove ChapterFramework, add ChapterOnchainGTM at position 14, shift others
- `PlaybookSidebar.tsx`: Remove the hardcoded Ch 20 Thank You button, update to Ch 20 (since 19 chapters + Thank You)
- `NavigationButtons.tsx`: No code changes needed (already dynamic)
- `PlaybookHero.tsx`: Update chapter count from 18 to 19 (replacing one, net same count of 19)

**5. Update homepage stats**
- Keep "19 Chapters" on homepage (removing one chapter but adding one = net 19)

### Files to modify
| File | Action |
|------|--------|
| `EmailCaptureForm.tsx` | Delete |
| `ChapterFramework.tsx` | Delete |
| `ChapterOnchainGTM.tsx` | Create |
| `playbook-data.ts` | Replace Ch 19, insert new ch at id 14, shift |
| `ChapterRenderer.tsx` | Update mapping |
| `PlaybookHero.tsx` | Remove email form, keep stats |
| `PlaybookSidebar.tsx` | Remove email form, fix Thank You nav |
| `ChapterThankYou.tsx` | Remove email form |

