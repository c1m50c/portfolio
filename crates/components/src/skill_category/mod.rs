use types::{json, StyledComponent};
use stylist::{css, Style};
use yew::prelude::*;
use skill::Skill;

mod skill;


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
        Self {
            obj: json::files::get_skill_category(ctx.props().path.clone())
                .expect("")
        }
    }

    fn view(&self, _ctx: &Context<Self>) -> Html {
        let maybe_children = move || -> Html {
            self.obj.skills.iter().map(|skill| {
                html! { <Skill obj={ &*skill } /> }
            }).collect()
        };

        html! {
            <div class={ self.style() }>
                <h2>{ &self.obj.name }</h2>
                <div class={ "skill-container" }>
                    { maybe_children() }
                </div>
            </div>
        }
    }
}


impl StyledComponent for SkillCategory {
    fn style(&self) -> Style {
        let css = css!("
            .skill-container {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(10em, 1fr));
                justify-content: center;
                column-gap: 1rem;
                row-gap: 0.5rem;
            }
        ");

        Style::create("skill-category", css)
            .expect("Failed to create `Style`")
    }
}