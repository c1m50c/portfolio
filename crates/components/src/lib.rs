use skill_category::SkillCategory; mod skill_category;
use navigation_bar::NavigationBar; mod navigation_bar;
use category::Category; mod category;

use stylist::{StyleSource, YieldStyle, css};
use yew::prelude::*;


pub struct App {  }


impl Component for App {
    type Properties = ();
    type Message = ();

    fn create(_ctx: &Context<Self>) -> Self {
        return Self {  };
    }

    fn view(&self, _ctx: &Context<Self>) -> Html {
        return html! {
            <div class={ self.style_class() }>
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


impl YieldStyle for App {
    fn style_from(&self) -> StyleSource<'static> {
        return css!("
            padding: 2.5rem 0;
        ");
    }
}