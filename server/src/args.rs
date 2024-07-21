use clap::Parser;

#[derive(Debug, Parser)]
pub struct Arguments {
    /// Colon-seperated value of the host and port to *host* the server on.
    #[arg(
        short,
        long,
        default_value = "127.0.0.1:3000",
        env = "PORTFOLIO_ADDRESS"
    )]
    pub address: String,
}
