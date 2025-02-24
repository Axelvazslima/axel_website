import React from "react";
import ContentBlocksComponent from "./ContentBlocksComponent";
import SectionComponent from "./SectionComponent";
import ButtonComponent from "./ButtonComponent";
import { H2Component, H3Component, PComponent } from "./TextComponents";
import { Experience } from "../classes/Experience";

interface SubPagesComponentProps {
    children?: React.ReactNode;
    h2?: string;
    h3?: string;
    p?: string;
    experiences: Experience[];
    filtering: string;
}

function SubPagesComponent({ h2, h3, p, experiences, filtering }: SubPagesComponentProps) {
  return (
    <SectionComponent className="justify-start items-center gap-2 md:h-screen min:h-screen w-screen">
        <H2Component>{h2}</H2Component>
        <H3Component>{h3}</H3Component>
        <PComponent>{p}</PComponent>
        <div className="flex flex-row flex-wrap justify-center gap-2">
        {experiences
          .filter((experience) => experience.type === filtering)
          .map((filteredExperience) => (
            <ContentBlocksComponent experience={filteredExperience} />
          ))}
        </div>
        <a href="/">
        <ButtonComponent className="mt-10" onClick={() => console.log("Button clicked. Returning Home.")}>Home</ButtonComponent>
        </a>
    </ SectionComponent>
  );

}

export default SubPagesComponent;