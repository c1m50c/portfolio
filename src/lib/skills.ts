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

const compareNames = (a: { name: string }, b: { name: string }) => {
    const aName = a.name.toUpperCase();
    const bName = b.name.toUpperCase();

    return aName < bName ? -1 : aName > bName ? 1 : 0;
};

export const LANGUAGE_SKILLS: SkillEntry[] = [
    {
        description:
            "A multi-paradigm, general-purpose programming language that emphasizes performance, type safety, and concurrency.",
        relative_comfort_level: 9,
        tags: ["functional", "imperative", "memory-safety-focused"],
        name: "Rust",
    },
    {
        name: "Python",
    },
    {
        name: "Go",
    },
    {
        name: "JavaScript",
    },
    {
        name: "TypeScript",
    },
    {
        name: "C",
    },
    {
        name: "C++",
    },
    {
        name: "C#",
    },
    {
        name: "Java",
    },
    {
        name: "Lua",
    },
    {
        name: "x86 Assembly",
    },
    {
        name: "Julia",
    },
    {
        name: "Bash",
    },
    {
        name: "Nu",
    },
    {
        name: "HCL",
    },
].toSorted(compareNames) as SkillEntry[];

export const LIBRARY_AND_FRAMEWORK_SKILLS: SkillEntry[] = [
    {
        name: "Svelte",
    },
    {
        name: "Svelte Kit",
    },
    {
        name: "React",
    },
    {
        name: "Vue",
    },
    {
        name: "Flask",
    },
    {
        name: "Tokio",
    },
    {
        name: "Actix",
    },
    {
        name: "Tailwind",
    },
    {
        name: "Fiber",
    },
    {
        name: "Echo",
    },
    {
        name: "OpenCV",
    },
    {
        name: ".NET",
    },
    {
        name: "Spring",
    },
    {
        name: "Axum",
    },
    {
        name: "Plotly",
    },
    {
        name: "Matplotlib",
    },
    {
        name: "Pandas",
    },
    {
        name: "Numpy",
    },
    {
        name: "Clap",
    },
    {
        name: "Ratatui",
    },
    {
        name: "Egui",
    },
    {
        name: "Tree Sitter",
    },
    {
        name: "Serde",
    },
    {
        name: "Rayon",
    },
    {
        name: "Open Layers",
    },
    {
        name: "Tanstack Query",
    },
    {
        name: "SQLX",
    },
    {
        name: "Peta Poco",
    },
    {
        name: "HTMX",
    },
].toSorted(compareNames) as SkillEntry[];

export const TECHNOLOGY_TOOLS_AND_SERVICE_SKILLS: SkillEntry[] = [
    {
        name: "Azure",
    },
    {
        name: "AWS",
    },
    {
        name: "Git",
    },
    {
        name: "GitHub",
    },
    {
        name: "GitHub Actions",
    },
    {
        name: "Drone",
    },
    {
        name: "Bun",
    },
    {
        name: "Web Assembly",
    },
    {
        name: "Twillio",
    },
    {
        name: "Stripe",
    },
    {
        name: "Okta",
    },
    {
        name: "Auth0",
    },
    {
        name: "Datadog",
    },
    {
        name: "Open Telemetry",
    },
    {
        name: "Terraform",
    },
    {
        name: "Docker",
    },
    {
        name: "Curl",
    },
    {
        name: "Poetry",
    },
    {
        name: "Rye",
    },
    {
        name: "Microsoft SQL Server",
    },
    {
        name: "Postgres",
    },
    {
        name: "MySQL",
    },
    {
        name: "Orcale",
    },
    {
        name: "Godot",
    },
    {
        name: "Unity",
    },
].toSorted(compareNames) as SkillEntry[];
