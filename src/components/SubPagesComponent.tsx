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
    experience: Experience;
}

function SubPagesComponent({ h2, h3, p, experience }: SubPagesComponentProps) {
  return (
    <SectionComponent className="justify-center">
        <H2Component>{h2}</H2Component>
        <H3Component>{h3}</H3Component>
        <PComponent>{p}</PComponent>
        <ContentBlocksComponent experience={experience} />
        <ButtonComponent onClick={() => console.log("Button clicked. Returning Home.")}>Home</ButtonComponent>
    </ SectionComponent>
  );

}

export default SubPagesComponent;