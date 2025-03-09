export type DataType = 'post' | 'project' | 'certification' | 'badge';

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
    link: string;
};

export type Certification = baseData & {
    company: string;
    tags: string[];
    link: string;
};

export type Badge = baseData & {
    image: string;
    tags: string[];
    link: string;
    fixed: boolean;
};

export type Data = Post | Project | Certification | Badge;