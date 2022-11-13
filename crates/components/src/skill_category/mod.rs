use info::SkillInfo; mod info;
use skill::Skill; mod skill;

use stylist::{YieldStyle, css, StyleSource};
use yew::prelude::*;
use types::json;


pub struct SkillCategory {
    obj: &'static json::SkillCategory
}


#[derive(PartialEq, Properties)]
pub struct SkillCategoryProps {
    pub path: String,
}


impl Component for SkillCategory {
    type Properties = SkillCategoryProps;
    type Message = ();

    fn create(ctx: &Context<Self>) -> Self {
        return Self {
            obj: json::files::get_skill_category(ctx.props().path.clone())
                .expect("")
        };
    }

    fn view(&self, _ctx: &Context<Self>) -> Html {
        let maybe_children = move || -> Html {
            self.obj.skills.iter().map(|skill| {
                html! { <Skill obj={ &*skill } /> }
            }).collect()
        };

        return html! {
            <div class={ self.style_class() }>
                <h2>{ &self.obj.name }</h2>
                <div class={ "skill-container" }>
                    { maybe_children() }
                </div>
            </div>
        };
    }
}


impl YieldStyle for SkillCategory {
    fn style_from(&self) -> StyleSource<'static> {
        return css!("
            .skill-container {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(10em, 1fr));
                justify-content: center;
                column-gap: 1rem;
                row-gap: 0.5rem;
            }
        ");
    }
}