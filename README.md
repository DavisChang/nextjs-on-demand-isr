# NextJS On-Demand Incremental Static Regeneration (K8S & Ingress & Minikube), SonarQube and React Best Practices

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

## Typescript

1. Structure the app in a certain way.
2. Making things reusable.
3. Ensure consistency throughout the app.

[DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)

[Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html)

## React Best Practices

1. Use Typescript !!
2. Ensure the folder structure is easy to understand and consistent.
3. Magic, hard-coded values should be extracted and placed into constants. (/lib/constants)
4. Reusable UI components should be placed in the components folder.
5. Do not add layout styles to reusable components.
6. Reusable components should be as simple as possible.
7. Use React Fragments to replace unnecessary div elements.
8. Using useMemo, useCallback, and React.memo effectively can help optimize performance.
9. Use the previous state in the update function when the new state depends on the previous state.
10. Maintain a single source of truth. Avoid replicating the entire object for other purposes.
11. Do not use useState to manage filters, variants (e.g., on an eCommerce product detail page), and pagination. Instead, use the URL to manage state.
12. Use React Hooks library for data fetching. (Caching in Next.js, SWR, ReactQuery)
13. Continuously improve the project by using components, custom hooks, utilities, and libraries.

## Build Images

```
$ docker build -t nextjs-on-demand-isr-nextjs .
$ docker image tag nextjs-on-demand-isr-nextjs:latest davischang/nextjs-on-demand-isr-nextjs:v1.1.3 && \
docker image tag nextjs-on-demand-isr-nextjs:latest davischang/nextjs-on-demand-isr-nextjs:latest
$ docker image push davischang/nextjs-on-demand-isr-nextjs:latest && \
docker image push davischang/nextjs-on-demand-isr-nextjs:v1.1.3

```

## Use K8S & Ingress & Minikube

```
// start minikube
$ minikube start

// install nginx-ingress
$ helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
$ helm repo update
$ helm install nginx-ingress ingress-nginx/ingress-nginx

$ minikube dashboard --url // dashboard
$ kubectl create namespace nextjsfront
$ helm install next-js-frontend ./deployment/helm -n nextjsfront

// get deployment info
$ kubectl get pods,service,deployment,ingress -n nextjsfront
$ kubectl get endpoints -n nextjsfront
```

## Minikube tunnel

Connect to LoadBalancer services

```
$ minikube tunnel
$ minikube service frontend-service -n nextjsfront
```

## Upgrade a release

```
# update deployment change
$ helm upgrade next-js-frontend ./deployment/helm -n nextjsfront

# verify the deployment's rollout status
$ kubectl rollout status deployment/frontend-container -n nextjsfront
$ helm ls --all-namespaces -a

```

## Rollback a release

```
# find release name
$ helm list -n nextjsfront
# rollback deployment
$ helm rollback next-js-frontend -n nextjsfront
```

## Uninstall a release

```
$ helm uninstall next-js-frontend -n nextjsfront

// stop and delete minikube
$ minikube stop && minikube delete
```

## ConfigMap

You can add ENV in runtime (server-side)

## Secrets (Opaque)

Not Include confidential data in your application code

```
$ kubectl get secrets -n nextjsfront
$ kubectl edit secret env-secret -n nextjsfront

# Find ENV: MY_SECRET_TOKEN: b3BhcXVlLWVudi1zZWNyZXQ=
$ echo "b3BhcXVlLWVudi1zZWNyZXQ=" | base64 -D

```

## Vault Secrets

```

```
