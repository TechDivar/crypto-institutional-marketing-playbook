

## Plan: Add Progress Bar, Key Takeaways Cards, and Pull Quotes

### 1. Reading Progress Bar
Create a `ReadingProgressBar` component — a thin fixed bar at the very top of the screen that fills based on scroll position through the page.

**File**: `src/components/playbook/ui/ReadingProgressBar.tsx`
- Uses `useEffect` + scroll listener to calculate `scrollY / (docHeight - windowHeight)`
- Renders a 3px fixed bar at top with `bg-primary` fill, `z-50`
- Smooth width transition

**Integration**: Add to `PlaybookLayout.tsx` — render when `activeChapter !== null`, above everything else.

### 2. Pull Quote Component
Create a `PullQuote` component for highlighting key one-liners between sections.

**File**: `src/components/playbook/ui/PullQuote.tsx`
- Large italic text, left border accent (primary color), generous padding
- Optional `author` prop for attribution
- Styled distinctly from `Callout` — more editorial/magazine feel

**Integration**: Add 1-2 pull quotes per chapter in existing chapter files where strong one-liners already exist. Will add to ~6-8 chapters that have the best quotes (e.g., "Institutions do not close on vision. They close on justification." from ChapterOnchainGTM).

### 3. Key Takeaways Card
Create a `KeyTakeaways` component — a styled card at the bottom of each chapter.

**File**: `src/components/playbook/ui/KeyTakeaways.tsx`
- Card with gradient top border, "Key Takeaways" header with a bookmark icon
- 3-4 bullet points per chapter
- Placed just before the navigation buttons

**Integration**: Add to `ChapterRenderer.tsx` with a data map of takeaways per chapter ID, or add directly inside each chapter file before the closing fragment. Adding a takeaways data structure in `playbook-data.ts` keeps it cleaner — each chapter gets a `takeaways: string[]` array.

### Files to modify/create

| File | Action |
|------|--------|
| `src/components/playbook/ui/ReadingProgressBar.tsx` | Create |
| `src/components/playbook/ui/PullQuote.tsx` | Create |
| `src/components/playbook/ui/KeyTakeaways.tsx` | Create |
| `src/components/playbook/PlaybookLayout.tsx` | Add progress bar |
| `src/data/playbook-data.ts` | Add `takeaways` arrays to each chapter |
| `src/components/playbook/ChapterRenderer.tsx` | Render KeyTakeaways after chapter content |
| ~8 chapter files | Add 1-2 PullQuote components where strong quotes exist |

### No backend changes needed.

