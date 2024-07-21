use axum::{
    extract::State,
    http::StatusCode,
    response::{Html, IntoResponse},
};
use minijinja::context;

pub async fn index(
    State(jinja_environment): State<minijinja::Environment<'static>>,
) -> impl IntoResponse {
    let template = jinja_environment.get_template("index.html");
    let context = context! {greetee => "Portfolio"};

    if let Ok(template) = template {
        let rendered = template.render(context).unwrap_or_default();
        return (StatusCode::OK, Html(rendered));
    }

    (StatusCode::NOT_FOUND, Html(String::default()))
}
