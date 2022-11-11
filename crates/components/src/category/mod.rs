use yew::virtual_dom::AttrValue;
use yew::prelude::*;


#[derive(PartialEq, Properties)]
pub struct CategoryProps {
    pub title: AttrValue,

    #[prop_or_default]
    pub children: Children,
}


pub struct Category {  }


impl Component for Category {
    type Properties = CategoryProps;
    type Message = ();

    fn create(_ctx: &Context<Self>) -> Self {
        return Self {  };
    }

    fn view(&self, ctx: &Context<Self>) -> Html {
        return html! {
            <div id={ ctx.props().title.clone() }>
                <h1>{ &ctx.props().title }</h1>
                { for ctx.props().children.iter() }
            </div>
        };
    }
}