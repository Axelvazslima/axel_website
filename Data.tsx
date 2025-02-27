export type DataType = 'post' | 'project' | 'certification';

export type baseData = {
    id: number;
    title: string;
    description: string;
}

export type Post = baseData & {
    content: string;
    date: string;
    tags: string[];
};
  
export type Project = baseData & {
    company: string;
    content: string;
    image: string;
    skills: string[];
    tags: string[];
};

export type Certification = baseData & {
    company: string;
    tags: string[];
    link: string;
};

export type Data = Post | Project | Certification;