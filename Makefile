# Builds the web application.
build:
	npm run build

# Runs the web application locally.
local:
	npm run dev

# Uploads the `main` branch to GitHub Pages.
# Process of changing the website, and uploading should go as follows...
# $ npm run build
# $ git commit
# $ git push
# $ make upload
upload:
	git subtree push --prefix public/ origin gh-pages