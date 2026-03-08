import { ChapterHeader } from "./ui/ChapterHeader";
import { NavigationButtons } from "./ui/NavigationButtons";
import { ChapterJobMarket } from "./chapters/ChapterJobMarket";
import { Chapter01 } from "./chapters/Chapter01";
import { Chapter02 } from "./chapters/Chapter02";
import { Chapter03 } from "./chapters/Chapter03";
import { Chapter04 } from "./chapters/Chapter04";
import { Chapter05 } from "./chapters/Chapter05";
import { Chapter05b } from "./chapters/Chapter05b";
import { Chapter06 } from "./chapters/Chapter06";
import { Chapter07 } from "./chapters/Chapter07";
import { Chapter08 } from "./chapters/Chapter08";
import { Chapter09 } from "./chapters/Chapter09";
import { Chapter10 } from "./chapters/Chapter10";
import { Chapter11 } from "./chapters/Chapter11";
import { Chapter12 } from "./chapters/Chapter12";
import { Chapter13 } from "./chapters/Chapter13";
import { ChapterThankYou } from "./chapters/ChapterThankYou";

interface ChapterRendererProps {
  chapterId: number;
  onNavigate: (id: number) => void;
  totalChapters: number;
}

const chapterComponents: Record<number, React.FC> = {
  1: ChapterJobMarket,
  2: Chapter01,
  3: Chapter02,
  4: Chapter03,
  5: Chapter04,
  6: Chapter05,
  7: Chapter05b,
  8: Chapter06,
  9: Chapter07,
  10: Chapter08,
  11: Chapter09,
  12: Chapter10,
  13: Chapter11,
  14: Chapter12,
  15: Chapter13,
  16: ChapterThankYou,
};

export const ChapterRenderer = ({ chapterId, onNavigate, totalChapters }: ChapterRendererProps) => {
  const ChapterContent = chapterComponents[chapterId];

  return (
    <div>
      <ChapterHeader chapterId={chapterId} />
      {ChapterContent && <ChapterContent />}
      <NavigationButtons chapterId={chapterId} onNavigate={onNavigate} totalChapters={totalChapters} />
    </div>
  );
};
