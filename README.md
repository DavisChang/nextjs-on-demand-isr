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

## Build Images

```
$ docker build -t davischang/with-docker-multi-env-development .
$ docker image tag davischang/with-docker-multi-env-development davischang/with-docker-multi-env-development:v1.0.1
$ docker image push  davischang/with-docker-multi-env-development:v1.0.1
```

## Use K8S & Minikube

```
$ minikube start
$ minikube dashboard --url // dashboard
$ kubectl create namespace nextjsfront
# helm install next-js-frontend ./deployment/helm -n nextjsfront

$ kubectl get pods -n nextjsfront
$ kubectl get service -n nextjsfront
$ kubectl get deployment -n nextjsfront
$ kubectl get ingress -n nextjsfront

$ minikube tunnel

$ helm upgrade next-js-frontend ./deployment/helm -n nextjsfront // update deployment change
$ kubectl rollout status deployment/frontend-container -n nextjsfront // verify the deployment's rollout status

$ helm ls --all-namespaces -a
$ helm uninstall next-js-frontend -n nextjsfront
```
