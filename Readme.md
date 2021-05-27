# Instruction
```sh
terraform init
terrafrom apply
gcloud auth configure-docker
docker build -t gcr.io/helpful-lens-307104/nodejs-test .
docker push gcr.io/helpful-lens-307104/nodejs-test
gcloud container images list
gcloud container clusters get-credentials helpful-lens-307104-gke --region us-central1
ACCOUNT_EMAIL=$(gcloud iam service-accounts --format='value(email)' create k8s-gcr-auth-ro)
gcloud projects add-iam-policy-binding $PROJECT --member serviceAccount:$ACCOUNT_EMAIL --role roles/storage.objectViewer
gcloud iam service-accounts keys create --iam-account $ACCOUNT_EMAIL key.json
kubectl create secret docker-registry gcr-io --docker-server=gcr.io --docker-username=_json_key --docker-email=slodygin@gmail.com --docker-password="$(cat key.json)"
kubectl apply -f nodejs.yaml 
```
