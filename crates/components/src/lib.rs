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
                    <p>{ "Lorem ipsum" }</p>
                </Category>
                <Category title={ "Projects" }>
                    <p>{ "Lorem ipsum" }</p>
                </Category>
                <Category title={ "Contact" }>
                    <p>{ "Lorem ipsum" }</p>
                </Category>
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