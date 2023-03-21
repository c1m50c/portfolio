use std::collections::HashMap;

use include_dir::{Dir, include_dir};
use once_cell::unsync::Lazy;


const SKILLS_DIRECTORY: Dir = include_dir!("static/skills");

static mut SKILL_CATEGORIES: Lazy<HashMap<String, SkillCategory>> = Lazy::new(|| {
    let file_contents = SKILLS_DIRECTORY.files()
        .map(|file| {
            file.contents_utf8()
                .expect("Failed to read contents of file into a UTF8 string")
        });

    let skill_categories = file_contents.map(|string| {
        serde_yaml::from_str(string)
            .expect("Failed to convert string into `SkillCategory`")
    });

    skill_categories
        .map(|category: SkillCategory| (category.name.clone(), category))
        .collect()
});


#[derive(Debug, PartialEq, Eq)]
#[derive(serde::Deserialize)]
pub struct SkillCategory {
    pub name: String,
    pub description: String,
    pub skills: Vec<Skill>,
}


#[derive(Debug, PartialEq, Eq)]
#[derive(serde::Deserialize)]
pub struct Skill {
    pub name: String,
    pub description: String,
    pub tags: Option<Vec<String>>,
    pub proficency: Option<Proficency>,
}


#[derive(Debug, Clone, Copy)]
#[derive(PartialEq, Eq, PartialOrd, Ord)]
#[derive(serde::Deserialize)]
pub enum Proficency {
    Low,
    Medium,
    High,
}


/// Returns a reference to the [`HashMap`] of [Category Names][String] to [Skill Categories][`SkillCategory`] in the [`SKILL_CATEGORIES`] static variable.
/// This [`HashMap`] contains all of the [`SkillCategory`] JSON files in the `json/skills/` directory.
pub fn get_skill_categories() -> &'static HashMap<String, SkillCategory> {
    unsafe { &SKILL_CATEGORIES }
}


pub fn lookup_skill_category(category: &String) -> Option<&'static SkillCategory> {
    unsafe { SKILL_CATEGORIES.get(category) }
}