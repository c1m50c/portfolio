use button::NavigationButton; mod button;

use stylist::{YieldStyle, StyleSource, css};
use yew::prelude::*;


pub struct NavigationBar {  }


impl Component for NavigationBar {
    type Properties = ();
    type Message = ();

    fn create(_ctx: &Context<Self>) -> Self {
        return Self {  };
    }

    fn view(&self, _ctx: &Context<Self>) -> Html {
        return html! {
            <nav class={ self.style_class() }>
                <NavigationButton link={ "#skills" } title={ "Skills" } />
                <NavigationButton link={ "#projects" } title={ "Projects" } />
                <NavigationButton link={ "#contact" } title={ "Contact" } />
            </nav>
        };
    }
}


impl YieldStyle for NavigationBar {
    fn style_from(&self) -> StyleSource<'static> {
        return css!("
            padding: 1rem 0;
            position: fixed;
            width: 100vw;

            display: flex;
            justify-content: center;
            gap: 1rem;
        ");
    }
}