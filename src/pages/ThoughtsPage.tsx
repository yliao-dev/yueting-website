import { useState } from "react";
import ThoughtsCategory from "../components/thoughts/ThoughtsCategory";
import { ThoughtsData } from "../data/thoughts/thoughtsData";
import LineBreak from "../components/shared/LineBreak";
import { useTypingEffect } from "../hooks/useTypingEffect";
import ThoughtsPost from "../components/thoughts/ThoughtsPost";

const ThoughtsPage = () => {
  const [selectedCategory, setCategory] = useState<string>("");
  const [typingDone, setTypingDone] = useState(false);
  const titleText = useTypingEffect("Reflections", 50, () =>
    setTypingDone(true)
  );

  const filteredEntries = selectedCategory
    ? ThoughtsData.filter((entry) => entry.category === selectedCategory)
    : ThoughtsData;

  return (
    <div className="thoughts">
      <section className="thoughts__intro">
        <h1 className="typing-cursor">{titleText}</h1>
        <p>
          A space for ideas, lessons, and personal reflections—from everyday
          thoughts to deeper insights.
        </p>
      </section>

      <ThoughtsCategory onSelect={setCategory} />
      <LineBreak />

      {typingDone && (
        <section className="thoughts__content">
          {filteredEntries.map((thoughts) => (
            <ThoughtsPost
              key={thoughts.id}
              id={thoughts.id}
              title={thoughts.title}
              author={thoughts.author}
              description={thoughts.description}
              category={thoughts.category}
              date={thoughts.date}
              mdPath={thoughts.mdPath}
              mdPath2={thoughts.mdPath2}
              coverImage={thoughts.coverImage}
            />
          ))}
        </section>
      )}
    </div>
  );
};

export default ThoughtsPage;
