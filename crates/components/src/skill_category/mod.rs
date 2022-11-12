use skill::Skill; mod skill;

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
        return html! {
            <div>
                <h1>{ &self.obj.name }</h1>
                <div>
                    {
                        for self.obj.skills.iter().map(
                            |skill| {
                                html! { <Skill obj={ &*skill } /> }
                            }
                        )
                    }
                </div>
            </div>
        };
    }
}