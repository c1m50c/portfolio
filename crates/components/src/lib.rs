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
        return html! { <h1>{ "Hello, World!" }</h1> }
    }
}