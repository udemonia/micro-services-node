# ingress

Routing Rules between services with ingress/nginx

<https://kubernetes.github.io/ingress-nginx/>

How can the browser make requests to our backend services?

We could expose each service with a node port but that isn't done in serious production apps

Instead, we use a load balancing service

_LOAD BALANCING SERVICE_: it tells kubernetes to reach out to its provider and provision a load balancer. Gets traffic to a single pod

_INGRESS CONTROLLER_: A pod with a set of routing rules to distribute traffic to other services

We're going to use the ingress Nginx controller

It's essentially a pod that understands the request, then forwards it on to the correct ip cluster/pod

<https://kubernetes.github.io/ingress-nginx/deploy/#provider-specific-steps>

## installing ingress controller

Load Balancing + Ingress Controller

<https://kubernetes.github.io/ingress-nginx/deploy/#quick-start>

this install is essentially a yaml file...

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.48.1/deploy/static/provider/cloud/deploy.yaml
```

---

You may encounter a warning or error about the v1beta1 API version that is being used.

The v1 Ingress API is now required as of Kubernetes v1.22 and the v1beta1 will no longer work.

Only a few very minor changes are needed:

<https://kubernetes.io/docs/concepts/services-networking/ingress/>

Notably, a pathType needs to be added, and how we specify the backend service name and port has changed:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ingress-service
  annotations:
    kubernetes.io/ingress.class: nginx
    nginx.ingress.kubernetes.io/use-regex: 'true'
spec:
  rules:
    - host: ticketing.dev
      http:
        paths:
          - path: /api/users/?(.*)
            pathType: Prefix
            backend:
              service:
                name: auth-srv
                port:
                  number: 3000
```

We will include a separate v1 Ingress manifest attached to each appropriate lecture throughout the course so that students can refer to the changes.

---
