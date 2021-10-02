// https://blog.stranianelli.com/svelte-et-github-english/
var ghpages = require('gh-pages');

ghpages.publish(
    'public',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/c1m50c/portfolio.git',
        user: {
            name: 'c1m',
            email: 'terminalityms@gmail.com'
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);
