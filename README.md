# 🚀 Serverless CI/CD with GitHub Actions & AWS Lambda

This project demonstrates a fully automated **Continuous Integration and Continuous Deployment (CI/CD)** pipeline. It allows code changes to be deployed to the cloud instantly upon a `git push`.

## 🛠 Project Purpose
The goal of this project is to implement "hands-off" deployments. By automating the build and deploy process, we ensure that the live cloud environment always matches the latest stable version of the code in the repository.

## 🏗 Technology Stack
* **Cloud Provider:** AWS (Amazon Web Services)
* **Compute:** AWS Lambda (Serverless Node.js)
* **CI/CD Tool:** GitHub Actions
* **Security:** IAM OIDC (OpenID Connect) for passwordless authentication

## ⚡ How it Works
1.  **Code:** Developer writes code in `index.js`.
2.  **Push:** Code is pushed to the `main` branch on GitHub.
3.  **Build:** GitHub Actions spins up a temporary Linux runner.
4.  **Auth:** The runner authenticates with AWS using a temporary IAM role.
5.  **Deploy:** The runner packages the code into a `.zip` and updates the AWS Lambda function.

## ⚙️ Setup Instructions
- Create an IAM Role in AWS with OIDC trust for this repository.
- Add the `AWS_ROLE_ARN` as a GitHub Secret.
- Ensure the Lambda function name in `deploy.yml` matches your AWS console.
