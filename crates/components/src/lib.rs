use skill_category::SkillCategory;
use navigation_bar::NavigationBar;
use category::Category;

use types::StyledComponent;
use stylist::{css, Style};
use yew::prelude::*;

mod navigation_bar;
mod skill_category;
mod category;


pub struct App {  }


impl Component for App {
    type Properties = ();
    type Message = ();

    fn create(_ctx: &Context<Self>) -> Self {
        Self {  }
    }

    fn view(&self, _ctx: &Context<Self>) -> Html {
        html! {
            <div class={ self.style() }>
                <NavigationBar />
                <Category title={ "Skills" }>
                    <SkillCategory path="Languages" />
                </Category>
                <Category title={ "Projects" } />
                <Category title={ "Contact" } />
            </div>
        }
    }
}


impl StyledComponent for App {
    fn style(&self) -> Style {
        let css = css!("padding: 2.5rem 0;");
        Style::create("app", css)
            .expect("Failed to create `Style`")
    }
}