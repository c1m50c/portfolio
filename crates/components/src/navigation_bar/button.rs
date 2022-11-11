use stylist::{YieldStyle, StyleSource, css};
use yew::virtual_dom::AttrValue;
use yew::prelude::*;


pub struct NavigationButton {  }


#[derive(PartialEq, Properties)]
pub struct NavigationButtonProps {
    pub title: AttrValue,
    pub link: AttrValue,
}


impl Component for NavigationButton {
    type Properties = NavigationButtonProps;
    type Message = ();

    fn create(_ctx: &Context<Self>) -> Self {
        return Self {  }
    }

    fn view(&self, ctx: &Context<Self>) -> Html {
        return html! {
            <a href={ ctx.props().link.clone() } class={ self.style_class() }>
                { &ctx.props().title }
            </a>
        };
    }
}


impl YieldStyle for NavigationButton {
    fn style_from(&self) -> StyleSource<'static> {
        return css!("
            cursor: pointer;
            text-decoration: none;
            font-size: 1.25rem;
            font-weight: 600;

            opacity: 12.5%;
            color: var(--text-color);
            transition: all 300ms ease-in;
        ");
    }
}