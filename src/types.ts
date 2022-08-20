export enum Icon {
    github = "github"
}

export type Link = {
    url: string;
    icon: Icon | string;
}

export type Skill = {
    name: string;
    description: string;
    category: string;
    tags: string[] | undefined;
    links: Link[] | undefined;
};