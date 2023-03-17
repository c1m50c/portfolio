pub mod files;


#[derive(Debug, PartialEq, serde::Serialize, serde::Deserialize)]
pub struct SkillCategory {
    pub name: String,
    pub description: String,
    pub skills: Vec<Skill>,
}


#[derive(Debug, PartialEq, serde::Serialize, serde::Deserialize)]
pub struct Skill {
    pub name: String,
    pub description: String,
    pub tags: Option<Vec<String>>,
}


pub fn string_to_object<RefString, Object>(string: RefString) -> Object
where
    RefString: AsRef<str>,
    Object: serde::de::DeserializeOwned
{
    serde_json::from_str(string.as_ref())
        .expect("Failed to convert string into given object.")
}