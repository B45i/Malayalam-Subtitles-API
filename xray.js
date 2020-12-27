const Xray = require('x-ray');
const x = Xray().concurrency(1); // hack for concurrency issue

const translatedBy =
    'figure.wp-block-table.info > table > tbody > tr:nth-child(3) > td:nth-child(2) > a';

x('https://malayalamsubtitles.org/translations/', '.sitemap-item', [
    {
        title: 'a',
        link: 'a@href',
        post: x('a@href', {
            title: 'h1.entry-title',
            posterMalayalam: '.poster>img@src',
            descriptionMalayalam: 'article p:nth-child(5)',
            imdbURL: '.imdb a@href',
            srtURL: 'a.download-on-click@data-downloadurl',
            translatedBy: {
                name: translatedBy,
                url: translatedBy + '@href',
            },
        }),
    },
]).write('results.json');
