export enum Icons {
    GitHub = "github"
}

export type Link = {
    url: string;
    icon: Icons | string;
}

export type Skill = {
    name: string;
    description: string;
    category: string;
    tags: string[] | undefined;
    links: Link[] | undefined;
};