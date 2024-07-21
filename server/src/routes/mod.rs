use axum::{routing::get, Router};

mod index;

pub fn router() -> Router {
    let mut jinja_environment = minijinja::Environment::<'static>::new();
    jinja_environment.set_loader(minijinja::path_loader("templates"));

    Router::new()
        .route("/", get(index::index))
        .with_state(jinja_environment)
}
