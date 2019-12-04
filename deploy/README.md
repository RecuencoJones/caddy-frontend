# Deployment with Kubesail

Download the kubeconfig file from https://kubesail.com/config

Once downloaded, the deployment to kubernetes is simply done by:

```
set KUBECONFIG=/path/to/kubesail/kubeconfig
kubectl apply -f deploy/core.yml
```
