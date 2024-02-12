type ComfortLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

type Link = {
    label: string;
    url: string;
};

export type SkillEntry = {
    relative_comfort_level?: ComfortLevel;
    description?: string;
    tags?: string[];
    links?: Link[];
    name: string;
};

export const LANGUAGE_SKILLS: SkillEntry[] = [
    {
        description: "A multi-paradigm, general-purpose programming language that emphasizes performance, type safety, and concurrency.",
        relative_comfort_level: 9,
        tags: ["functional", "imperative", "memory-safety-focused"],
        name: "Rust"
    },
];

export const LIBRARY_ENGINE_AND_FRAMEWORK_SKILLS: SkillEntry[] = [
];

export const TECHNOLOGY_AND_SERVICE_SKILLS: SkillEntry[] = [
];