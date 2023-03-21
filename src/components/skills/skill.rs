use crate::types::skills::Skill as SkillType;
use crate::portfolio_prelude::*;

use super::proficency::Proficency;


#[derive(Debug, PartialEq, Properties)]
pub struct SkillProps {
    pub skill: &'static SkillType,
}


#[function_component]
pub fn Skill(properties: &SkillProps) -> Html {
    let SkillType { name, proficency, .. } = properties.skill;

    let style = use_style!("
        background-color: var(--skill-background-color);
        transition: background-color 200ms ease-in;
        text-align: center;
        position: relative;

        &:hover {
            background-color: var(--skill-hover-background-color);
        }
    ");

    let maybe_proficency = proficency
        .and_then(|proficency| Some(html! { <Proficency proficency={ proficency }/> }))
        .unwrap_or_else(|| html!{  });

    html! {
        <span class={ style }>
            <p>{ name }</p>
            { maybe_proficency }
        </span>
    }
}