use crate::portfolio_prelude::*;
use crate::types::skills;
use itertools::Itertools;
use skill::Skill;

mod proficency;
mod skill;


#[derive(Debug, PartialEq, Properties)]
pub struct SkillCategoryProps {
    pub category_identifier: String,
}


#[function_component]
pub fn SkillCategory(properties: &SkillCategoryProps) -> Html {
    let SkillCategoryProps { category_identifier } = properties;

    let style = use_style!("
        .description {
            opacity: 60%;
        }
    
        .skills {
            grid-template-columns: repeat(auto-fill, minmax(10em, 1fr));
            justify-content:center;
            display: grid;
            gap: 1rem;
        }
    ");

    let category = skills::lookup_skill_category(category_identifier)
        .expect("Failed to lookup skill category");

    let maybe_description = (!category.description.is_empty())
        .then(|| html!{ <p class={ "description" }>{ &category.description }</p> })
        .unwrap_or_else(|| html! {  });

    html!{
        <section id={ category.name.to_lowercase() } class={ style }>
            <h1>{ &category.name }</h1>
            { maybe_description }
            <div class={ "skills" }>
                {
                    category.skills.iter()
                        .sorted_by(|a, b| Ord::cmp(&b.proficency, &a.proficency))
                        .map(|skill| html! { <Skill skill={ skill }/> })
                        .collect::<Html>()
                }
            </div>
        </section>
    }
}