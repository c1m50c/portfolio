use stylist::{YieldStyle, StyleSource, css};
use wasm_bindgen::__rt::IntoJsResult;
use web_sys::Element;
use yew::prelude::*;
use types::json;


pub struct Skill {
    obj: &'static json::Skill,
    toggled: bool,
}


#[derive(PartialEq, Properties)]
pub struct SkillProps {
    pub obj: &'static json::Skill,
}


pub enum SkillMsg {
    Toggled,
}


impl Component for Skill {
    type Properties = SkillProps;
    type Message = SkillMsg;

    fn create(ctx: &Context<Self>) -> Self {
        return Self {
            obj: &ctx.props().obj,
            toggled: false,
        };
    }

    #[allow(unreachable_patterns)]
    fn update(&mut self, _ctx: &Context<Self>, msg: Self::Message) -> bool {
        return match msg {
            SkillMsg::Toggled => {
                self.toggled = !self.toggled;
                true
            },

            _msg => unimplemented!(),
        };
    }

    fn view(&self, ctx: &Context<Self>) -> Html {
        let clicked_info_bg = ctx.link().batch_callback(|event: MouseEvent| {
            let target: Element = event.target().unwrap()
                .into_js_result().unwrap().into();
            
            if target.class_name() == "info" {
                return Some(SkillMsg::Toggled)
            } None
        });

        let maybe_info = move || -> Html {
            if self.toggled {
                html! {
                    <div class={ "info" } onclick={ clicked_info_bg }>
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

        return html! {
            <div class={ self.style_class() }>
                <h3 onclick={ ctx.link().callback(|_| SkillMsg::Toggled) }>
                    { &self.obj.name }
                </h3>
                { maybe_info() }
            </div>
        };
    }
}


impl YieldStyle for Skill {
    fn style_from(&self) -> StyleSource<'static> {
        return css!("
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
    }
}