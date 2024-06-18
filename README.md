# NextJS On-Demand Incremental Static Regeneration

On-demand ISR in [Next.js](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#revalidating-data)

## Running Locally

```bash
$ npm run build && npm start
```

Open Landing [http://localhost:3000/](http://localhost:3000/)
Open Detail [http://localhost:3000/1](http://localhost:3000/1) - [http://localhost:3000/5000](http://localhost:3000/5000)

## Regeneration All Pages

```
$ node generateAllPages.js
```

## Success

You can find all static pages in .next/server/app.....
And the response header has X-Nextjs-Cache: HIT

## Revalidating Cache Data

```
$ curl -X POST http://localhost:3000/api/webhook -H "Content-Type: application/json" -d '{"token": "token", "id": 222}'

```
