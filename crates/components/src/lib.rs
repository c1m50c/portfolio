use navigation_bar::NavigationBar; mod navigation_bar;

use stylist::{StyleSource, YieldStyle, css};
use yew::prelude::*;


pub struct App {  }


impl Component for App {
    type Properties = ();
    type Message = ();

    fn create(_ctx: &Context<Self>) -> Self {
        return Self {  };
    }

    fn update(&mut self, _ctx: &Context<Self>, _msg: Self::Message) -> bool {
        return false;
    }

    fn view(&self, _ctx: &Context<Self>) -> Html {
        return html! {
            <div class={ self.style_class() }>
                <NavigationBar />
            </div>
        }
    }
}


impl YieldStyle for App {
    fn style_from(&self) -> StyleSource<'static> {
        return css!("");
    }
}