## Nextjs On-Demand ISR, Manually trigger regenerate 5000 pages and pre-build certain ids

Run the server

```bash
npm run build && npm start
```

Open [http://localhost:3000/photo/1](http://localhost:3000/photo/1) - [http://localhost:3000/photo/5000](http://localhost:3000/photo/5000) with your browser to see the result.

## Manually trigger regenerate 5000 or also pre-build certain ids

Concurrency 30 limit

```
$ node revalidate.js
```

## Success

You can find all static pages in .next/server/app/photo .....
And the response header has X-Nextjs-Cache: HIT
