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
                <a href="#Skills">{ "Skills" }</a>
                <a href="#Projects">{ "Projects" }</a>
                <a href="#Contact">{ "Contact" }</a>
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
            top: 0;

            display: flex;
            justify-content: center;
            gap: 1rem;
            
            a {
                text-decoration: none;
                font-size: 1.33rem;
                font-weight: 600;

                opacity: 12.5%;
                color: var(--text-color);
                transition: color 300ms ease-in, opacity 300ms ease-in;
            }

            a:hover {
                color: var(--link-hover-color);
                opacity: 100%;
            }
        ");
    }
}