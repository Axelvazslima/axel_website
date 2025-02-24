import { SvgIcons } from "./classes/Image";
import LearningBlockComponent from "./components/LearningBlockComponent";
import SectionComponent from "./components/SectionComponent";

const Learning = () => {

  return (
    <SectionComponent className="flex-col items-center md:h-screen justify-center">
      <h2 className="md:text-4xl text-2xl font-bold mb-4">
        What I am currently focusing on...
      </h2>
      {SvgIcons.filter(icon => icon.domain.includes("learning")).map((icon) => (
        <LearningBlockComponent title={icon.name} content={icon.content} image={icon.path} alt={icon.name} />
      ))}
    </SectionComponent>
  );
};

export default Learning;