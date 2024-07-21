use std::io;

use clap::Parser;
use tokio::net::TcpListener;

#[tokio::main]
async fn main() -> Result<(), io::Error> {
    let args = portfolio::args::Arguments::parse();
    tracing_subscriber::fmt().compact().init();

    let listener = TcpListener::bind(&args.address).await?;
    axum::serve(listener, portfolio::routes::router()).await
}
