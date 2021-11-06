# ingress

Routing Rules between services with ingress/nginx

<https://kubernetes.github.io/ingress-nginx/>

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
