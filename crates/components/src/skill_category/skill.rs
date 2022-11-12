use yew::prelude::*;
use types::json;


pub struct Skill {
    obj: &'static json::Skill,
}


#[derive(PartialEq, Properties)]
pub struct SkillProps {
    pub obj: &'static json::Skill,
}


impl Component for Skill {
    type Properties = SkillProps;
    type Message = ();

    fn create(ctx: &Context<Self>) -> Self {
        return Self {
            obj: &ctx.props().obj,
        };
    }

    fn view(&self, _ctx: &Context<Self>) -> Html {
        return html! {
            <div>
                <h3>{ &self.obj.name }</h3>
                <p>{ &self.obj.description }</p>
            </div>
        };
    }
}