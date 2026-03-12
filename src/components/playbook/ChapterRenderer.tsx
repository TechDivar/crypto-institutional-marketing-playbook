import { lazy, Suspense } from "react";
import { ChapterHeader } from "./ui/ChapterHeader";
import { NavigationButtons } from "./ui/NavigationButtons";

const ChapterJobMarket = lazy(() => import("./chapters/ChapterJobMarket").then(m => ({ default: m.ChapterJobMarket })));
const Chapter01 = lazy(() => import("./chapters/Chapter01").then(m => ({ default: m.Chapter01 })));
const Chapter02 = lazy(() => import("./chapters/Chapter02").then(m => ({ default: m.Chapter02 })));
const Chapter03 = lazy(() => import("./chapters/Chapter03").then(m => ({ default: m.Chapter03 })));
const Chapter04 = lazy(() => import("./chapters/Chapter04").then(m => ({ default: m.Chapter04 })));
const Chapter05 = lazy(() => import("./chapters/Chapter05").then(m => ({ default: m.Chapter05 })));
const Chapter05b = lazy(() => import("./chapters/Chapter05b").then(m => ({ default: m.Chapter05b })));
const Chapter06 = lazy(() => import("./chapters/Chapter06").then(m => ({ default: m.Chapter06 })));
const Chapter06b = lazy(() => import("./chapters/Chapter06b").then(m => ({ default: m.Chapter06b })));
const Chapter06c = lazy(() => import("./chapters/Chapter06c").then(m => ({ default: m.Chapter06c })));
const Chapter07 = lazy(() => import("./chapters/Chapter07").then(m => ({ default: m.Chapter07 })));
const Chapter08 = lazy(() => import("./chapters/Chapter08").then(m => ({ default: m.Chapter08 })));
const Chapter09 = lazy(() => import("./chapters/Chapter09").then(m => ({ default: m.Chapter09 })));
const Chapter10 = lazy(() => import("./chapters/Chapter10").then(m => ({ default: m.Chapter10 })));
const Chapter11 = lazy(() => import("./chapters/Chapter11").then(m => ({ default: m.Chapter11 })));
const Chapter12 = lazy(() => import("./chapters/Chapter12").then(m => ({ default: m.Chapter12 })));
const Chapter13 = lazy(() => import("./chapters/Chapter13").then(m => ({ default: m.Chapter13 })));
const ChapterThankYou = lazy(() => import("./chapters/ChapterThankYou").then(m => ({ default: m.ChapterThankYou })));

interface ChapterRendererProps {
  chapterId: number;
  onNavigate: (id: number) => void;
  totalChapters: number;
}

const chapterComponents: Record<number, React.LazyExoticComponent<React.FC>> = {
  1: ChapterJobMarket,
  2: Chapter01,
  3: Chapter02,
  4: Chapter03,
  5: Chapter04,
  6: Chapter05,
  7: Chapter05b,
  8: Chapter06,
  9: Chapter06b,
  10: Chapter06c,
  11: Chapter07,
  12: Chapter08,
  13: Chapter09,
  14: Chapter10,
  15: Chapter11,
  16: Chapter12,
  17: Chapter13,
  18: ChapterThankYou,
};

export const ChapterRenderer = ({ chapterId, onNavigate, totalChapters }: ChapterRendererProps) => {
  const ChapterContent = chapterComponents[chapterId];
  const isThankYou = chapterId === 18;

  return (
    <div>
      {!isThankYou && <ChapterHeader chapterId={chapterId} />}
      <Suspense fallback={<div className="min-h-[50vh]" />}>
        {ChapterContent && <ChapterContent />}
      </Suspense>
      {!isThankYou && (
        <NavigationButtons chapterId={chapterId} onNavigate={onNavigate} totalChapters={totalChapters} />
      )}
    </div>
  );
};
