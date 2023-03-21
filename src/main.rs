use crate::components::navigation::NavigationBar;
use crate::components::skills::SkillCategory;
use crate::portfolio_prelude::*;

use itertools::Itertools;

mod components;
mod types;


fn main() {
    yew::Renderer::<App>::new()
        .render();
}


#[function_component]
fn App() -> Html {
    html! {
        <main>
            <NavigationBar />
            <section id={ "skills" }>
                {
                    types::skills::get_skill_categories().keys().sorted()
                        .map(|identifier| html!{ <SkillCategory category_identifier={ identifier.clone() } /> })
                        .collect::<Html>()
                }
            </section>
        </main>
    }
}


/// Collections of imports use commonly across the crate.
pub(crate) mod portfolio_prelude {
    pub use yew::{Html, Properties, function_component, html};
    pub use stylist::yew::use_style;
}