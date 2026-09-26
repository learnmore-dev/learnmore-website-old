---
slug: "devops-docker-kubernetes-interview-questions"
title: "Top 30 DevOps, Docker & Kubernetes Interview Questions (CI/CD, Helm, Pods)"
category: "Interview Questions"
categorySlug: "interview-questions"
author: "Vikram Malhotra"
authorRole: "DevOps & SRE Practice Lead"
date: "2026-07-26"
readTime: 13
summary: "In-depth DevOps interview questions covering Docker containerization, multi-stage builds, Kubernetes architecture (Pods, Services, Ingress, HPA), Helm charts, and CI/CD automation."
relatedCourseSlug: "devops-training"
metaTitle: "DevOps, Docker & Kubernetes Interview Questions 2026 - LearnMore"
metaDescription: "Master DevOps & SRE interviews with 30 comprehensive questions on Docker, Kubernetes pods/services, Helm, CI/CD pipelines, and troubleshooting."
---

## 1. Explain Kubernetes Architecture: Control Plane vs Worker Node components
Kubernetes coordinates container workloads across a clustered fleet of compute instances:
### Control Plane:
- **kube-apiserver:** Front-end REST API gateway handling all internal and external communication.
- **etcd:** Distributed, consistent key-value store containing the cluster state and configuration.
- **kube-scheduler:** Assigns newly created Pods to optimal worker nodes based on resource constraints.
- **kube-controller-manager:** Runs core controllers (Node Controller, Deployment Controller, Endpoint Controller).

### Worker Nodes:
- **kubelet:** Agent running on each node ensuring containers described in PodSpecs are running and healthy.
- **kube-proxy:** Network proxy managing packet forwarding and IP table rules for Services.
- **Container Runtime:** (containerd/CRI-O) pulls images and executes containers.

---

## 2. How do Docker Multi-Stage builds reduce container image footprint?
Multi-stage builds allow developers to use multiple `FROM` statements in a single Dockerfile:
- The build stage compiles source code using heavy toolchains (e.g. Maven, Node.js, Go compiler).
- The final production stage copies only the compiled binary or dist bundle into a minimal scratch or alpine runtime image, reducing image sizes from 1GB+ down to under 50MB and eliminating build vulnerabilities.

---

## 3. Difference between ClusterIP, NodePort, LoadBalancer, and Ingress in K8s?
- **ClusterIP:** Default internal virtual IP accessible only from within the Kubernetes cluster.
- **NodePort:** Exposes the Service on a static high-range port (30000-32767) on every node's IP.
- **LoadBalancer:** Provisions an external cloud load balancer (e.g. AWS Network Load Balancer) pointing to the Service.
- **Ingress:** Layer 7 HTTP/HTTPS reverse proxy controller providing host and path-based routing, SSL termination, and rate limiting across multiple backend Services.

---

## 4. How do you troubleshoot and debug a CrashLoopBackOff error in Kubernetes?
1. Inspect pod events and lifecycle: `kubectl describe pod <pod-name>`.
2. Check standard container logs: `kubectl logs <pod-name> --previous`.
3. Verify liveness/readiness probe failure configurations.
4. Check memory/CPU limits causing OOMKilled (Out of Memory) termination.
5. Verify ConfigMaps, Secrets, and environmental variables required by the entrypoint.

---

## 5. How do Helm package managers and GitOps (ArgoCD) work in production?
- **Helm:** Package manager for Kubernetes that bundles YAML manifests into versioned charts with parameterized `values.yaml`.
- **GitOps (ArgoCD):** Continuous delivery framework where Git repositories serve as the single source of truth for declared infrastructure. ArgoCD continuously reconciles live cluster state against Git manifests.
