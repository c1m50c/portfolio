# Builds a release *build* of the site.
build:
    bun --bun tailwindcss -i server/public/index.css -o target/index.css --minify
    cargo build --release