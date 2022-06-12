# Open Patterson
[![Netlify Status](https://api.netlify.com/api/v1/badges/ffdeadf6-3b05-47ca-9cba-3224c943271b/deploy-status)](https://app.netlify.com/sites/aquamarine-piroshki-ada614/deploys)  


Uses [Jekyll + Tailwind Starter](https://github.com/stefcoetzee/jekyll-tailwind/)

## TODO & Notes
- .circleci currently unused
- Currently deploying with Netlify, consider using CircleCI + AWS S3 (+AWS CloudFront?)

## Usage

### Development

```bash
# Start a live-reload server at http://localhost:4000
bin/start
```

### Production

Note: Delete `.site` and it’s contents to see the production build output.

```bash
bin/build-prod
```

