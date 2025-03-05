import React from "react";
import SectionComponent from "./SectionComponent";
import ButtonComponent from "./ButtonComponent";
import { H2Component, H3Component, PComponent } from "./TextComponents";
import { CertificationBlockComponent, PostBlockComponent, ProjectBlockComponent } from "./ContentBlocksComponent";
import { Certification, Post, Project } from "../classes/Data";

interface SubPagesComponentProps {
    children?: React.ReactNode;
    h2?: string;
    h3?: string;
    p?: string;
    posts?: Post[];
    projects?: Project[];
    certifications?: Certification[];
}

function SubPagesComponent({ h2, h3, p, posts, projects, certifications }: SubPagesComponentProps) {
  return (
    <SectionComponent className="gap-2 min-h-screen h-full w-screen items-center">
        <H2Component>{h2}</H2Component>
        <H3Component>{h3}</H3Component>
        <PComponent>{p}</PComponent>
        <div className="flex flex-wrap justify-center items-center gap-2 md:p-4 p-2 w-full">
        <PostsPage posts={ posts }/>
        <ProjectsPage projects={ projects }/>
        <CertificationsPage certifications={ certifications }/>
        </div>
        <a href="/">
        <ButtonComponent className="mt-10" onClick={() => console.log("Button clicked. Returning Home.")}>Home</ButtonComponent>
        </a>
    </ SectionComponent>
  );

}

interface PostsPageProps {
  posts: Post[] | undefined;
}

function PostsPage({ posts }: PostsPageProps) {
  return (
    <>
    {posts && posts.map((post) => (
      <PostBlockComponent post={post} />
    ))}
    </>
  );
}

interface ProjectsPageProps {
  projects: Project[] | undefined;
}

function ProjectsPage({ projects }: ProjectsPageProps) {
  return (
    <>
    {projects && projects.map((project) => (
      <ProjectBlockComponent project={project} />
    ))}
    </>
  );
}

interface CertificationsPageProps {
  certifications: Certification[] | undefined;
}

function CertificationsPage({ certifications }:  CertificationsPageProps) {
  return (
    <>
    {certifications && certifications.map((certification) => (
      <CertificationBlockComponent certification={certification} />
    ))}
    </>
  );
}

export default SubPagesComponent;