use crate::types::skills::Proficency as ProficencyType;
use crate::portfolio_prelude::*;


#[derive(Debug, PartialEq, Properties)]
pub struct ProficencyProps {
    pub proficency: ProficencyType,
}


#[function_component]
pub fn Proficency(properties: &ProficencyProps) -> Html {
    let ProficencyProps { proficency, .. } = properties;

    let style = use_style!("
        position: absolute;
        height: 2.5rem;
        width: 2.5rem;
        opacity: 50%;

        left: 0;
        top: 15%;

        #Low { fill: #1a1a1a; }
        #Medium { fill: grey; }
        #High { fill: white; }
    ");

    let maybe_medium = matches!(proficency, ProficencyType::Medium|ProficencyType::High)
        .then(|| html!{ <path id="Medium" d="M10.5073 35.9707L20.0288 13.998H29.9165L39.438 35.9707H31.3813L25.3022 19.8574H24.6431L18.564 35.9707H10.5073Z" /> })
        .unwrap_or_else(|| html! {  });

    let maybe_high = matches!(proficency, ProficencyType::High)
        .then(|| html!{ <path id="High" d="M10.5073 27.9707L20.0288 5.99805H29.9165L39.438 27.9707H31.3813L25.3022 11.8574H24.6431L18.564 27.9707H10.5073Z" /> })
        .unwrap_or_else(|| html! {  });

    html! {
        <svg class={ style } viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Low" d="M10.5073 43.9707L20.0288 21.998H29.9165L39.438 43.9707H31.3813L25.3022 27.8574H24.6431L18.564 43.9707H10.5073Z" />
            { maybe_medium }
            { maybe_high }
        </svg>
    }
}