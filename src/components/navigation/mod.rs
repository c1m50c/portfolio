use crate::portfolio_prelude::*;


#[function_component]
pub fn NavigationBar() -> Html {
    let style = use_style!("
        padding: 1rem 0;
        position: fixed;
        width: 100vw;
        top: 0;

        justify-content: center;
        display: flex;
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
            color: var(--anchor-hover-color);
            opacity: 100%;
        }
    ");

    html! {
        <nav class={ style }>
            <a href="#skills">{ "SKILLS" }</a>
            <a href="#projects">{ "PROJECTS" }</a>
            <a href="#contact">{ "CONTACT" }</a>
        </nav>
    }
}