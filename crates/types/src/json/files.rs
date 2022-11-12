use super::{SkillCategory, string_to_object};
use std::collections::HashMap;
use once_cell::unsync::Lazy;


static mut SKILL_CATEGORIES: Lazy<HashMap<String, SkillCategory>> = Lazy::new(|| {
    let mut map = HashMap::new();

    let languages = include_str!("../../../../json/skills/languages.json").to_string();
    map.insert("Languages".into(), string_to_object(languages));

    return map;
});


pub fn get_skill_category(key: String) -> Option<&'static SkillCategory> {
    return unsafe { SKILL_CATEGORIES.get(&key) };
}