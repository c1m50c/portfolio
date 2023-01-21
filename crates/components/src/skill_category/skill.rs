use wasm_bindgen::__rt::IntoJsResult;
use types::{json, StyledComponent};
use stylist::{css, Style};
use web_sys::Element;
use yew::prelude::*;


pub struct Skill {
    obj: &'static json::Skill,
    toggled: bool,
}


#[derive(PartialEq, Properties)]
pub struct SkillProps {
    pub obj: &'static json::Skill,
}


pub enum SkillMsg {
    Toggled{ target_class: String },
}


impl Component for Skill {
    type Properties = SkillProps;
    type Message = SkillMsg;

    fn create(ctx: &Context<Self>) -> Self {
        Self {
            obj: &ctx.props().obj,
            toggled: false,
        }
    }

    #[allow(unreachable_patterns)]
    fn update(&mut self, _ctx: &Context<Self>, msg: Self::Message) -> bool {
        match msg {
            SkillMsg::Toggled{ target_class } => {
                match target_class.as_str() {
                    x if x == self.style().get_class_name() => self.toggled = true,
                    "skill-title" => self.toggled = true,
                    "info" => self.toggled = false,
                    _ => {  },
                };

                true
            },

            _msg => unimplemented!(),
        }
    }

    fn view(&self, ctx: &Context<Self>) -> Html {
        let toggle_info = ctx.link().callback(|event: MouseEvent| {
            let target: Element = event.target().unwrap()
                .into_js_result().unwrap().into();
            SkillMsg::Toggled { target_class: target.class_name() }
        });

        let maybe_info = move || -> Html {
            if self.toggled {
                html! {
                    <div class={ "info" }>
                        <div class={ "content" }>
                            <header>
                                <h1>{ &self.obj.name }</h1>
                            </header>
                            <p>{ &self.obj.description }</p>
                        </div>
                    </div>
                }
            } else { html! {  } }
        };

        html! {
            <div class={ self.style() } onclick={ toggle_info }>
                <h3 class={ "skill-title" }>{ &self.obj.name }</h3>
                { maybe_info() }
            </div>
        }
    }
}


impl StyledComponent for Skill {
    fn style(&self) -> Style {
        let css = css!("
            padding: 0 1em;
            text-align: center;
            background-color: var(--tag-color);
            transition: background-color 300ms ease-in;

            &:hover {
                cursor: pointer;
                background-color: var(--tag-hover-color);
            }

            .info {
                cursor: auto;
                background-color: rgb(24, 24, 24, 75%);
                position: absolute;
                height: 100vh;
                width: 100vw;
                left: 0;
                top: 0;
            }

            .info .content {
                background-color: rgb(48, 48, 48);
                height: 70%;
                width: 75%;

                position: absolute;
                margin: auto;
                bottom: 0;
                right: 0;
                left: 0;
                top: 0;
            }
        ");

        Style::create("skill", css)
            .expect("Failed to create `Style`")
    }
}