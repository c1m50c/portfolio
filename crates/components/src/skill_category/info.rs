use stylist::{YieldStyle, StyleSource, css};
use yew::prelude::*;
use types::json;


pub struct SkillInfo {
    obj: &'static json::Skill,
}