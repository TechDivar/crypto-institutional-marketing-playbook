import { ChapterHeader } from "./ui/ChapterHeader";
import { NavigationButtons } from "./ui/NavigationButtons";
import { Chapter01 } from "./chapters/Chapter01";
import { Chapter02 } from "./chapters/Chapter02";
import { Chapter03 } from "./chapters/Chapter03";
import { Chapter04 } from "./chapters/Chapter04";
import { Chapter05 } from "./chapters/Chapter05";
import { Chapter06 } from "./chapters/Chapter06";
import { Chapter07 } from "./chapters/Chapter07";
import { Chapter08 } from "./chapters/Chapter08";
import { Chapter09 } from "./chapters/Chapter09";
import { Chapter10 } from "./chapters/Chapter10";
import { Chapter11 } from "./chapters/Chapter11";
import { Chapter12 } from "./chapters/Chapter12";
import { Chapter13 } from "./chapters/Chapter13";

interface ChapterRendererProps {
  chapterId: number;
  onNavigate: (id: number) => void;
  totalChapters: number;
}

const chapterComponents: Record<number, React.FC> = {
  1: Chapter01,
  2: Chapter02,
  3: Chapter03,
  4: Chapter04,
  5: Chapter05,
  6: Chapter06,
  7: Chapter07,
  8: Chapter08,
  9: Chapter09,
  10: Chapter10,
  11: Chapter11,
  12: Chapter12,
  13: Chapter13,
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
