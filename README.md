# 📦 Enov8 Send Version Info — GitHub Action

Easily send your system, environment, and version details to Enov8 using this lightweight GitHub Action. Perfect for teams automating environment status updates in CI/CD workflows.

---

## 🚀 What This Action Does

This GitHub Action sends a payload like the one below to your Enov8 API endpoint:

```json
{
  "System": "GDW",
  "Environment": "SIT",
  "Version": "10.0.6"
}
```

It handles authentication headers (`user-id`, `app-id`, `app-key`) and builds the final endpoint dynamically using your base URL secret.

---

## 🧾 Inputs

| Name             | Required | Description                                                               |
|------------------|----------|---------------------------------------------------------------------------|
| `version`        | ✅       | The version you want to send (e.g., `10.0.6`)                             |
| `system`         | ✅       | The system name (e.g., `GDW`)                                  |
| `environment`    | ✅       | The environment name (e.g., `SIT`)                                       |
| `app_id`         | ✅       | Enov8 App ID (used as both `app-id` and `user-id`)                         |
| `app_key`        | ✅       | Enov8 App Key                                                              |
| `enov8_base_url` | ✅       | Base URL of the Enov8 instance (e.g., `https://<your org domain>.enov8.com/ecosystem`) |

---

## 🔐 Required Secrets

Add these to your repository’s **Secrets and variables > Actions** section:

| Secret Name        | Example Value                              |
|--------------------|--------------------------------------------|
| `ENOV8_APP_ID`     | `demoapi`                                  |
| `ENOV8_APP_KEY`    | `your-app-key-here`                        |
| `ENOV8_BASE_URL`   | `https://<your org domain>.enov8.com/ecosystem`    |

---

## 🔑 How to Generate an Enov8 API Key

To authenticate with Enov8's REST API, you must generate an API Key from the Enov8 platform.

### 📘 Steps:

1. Log in to the **Enov8 Platform** as a **System Admin**  
2. Go to:  
   `Configuration Management → System Administration → API Management`
3. Click **“Add API Key”**
4. Enter your **Application ID**  
5. Click **“Generate Random Key”** to create your API Key

🔐 **Security Tip:**  
Store the App ID and Key securely in your GitHub repository’s **Actions secrets**.

📚 **Reference:**  
[Official Documentation – Generating an API Key](https://docs.enov8.com/docs/enov8-platform/rest-api#generating-an-api-key)

---

## 🛠 Example Workflow

```yaml
name: Test Enov8 Send Environment Info

on:
  workflow_dispatch:

jobs:
  enov8-test:
    runs-on: ubuntu-latest
    environment: production  # ✅ Uses your GitHub Environment for secrets
    env:
      ENOV8_APP_ID: ${{ secrets.ENOV8_APP_ID }}
      ENOV8_APP_KEY: ${{ secrets.ENOV8_APP_KEY }}
      ENOV8_BASE_URL: ${{ secrets.ENOV8_BASE_URL }}
    steps:

      - name: Send to Enov8
        uses: hpashok24/enov8-send-environment-action@v1.2  # ✅ Correct repo and tag
        with:
          version: "17.26"
          system: "GDW"
          environment: "DEV Env"
```

---

## ✅ Output

On success, the workflow will log:

```
✅ Enov8 API responded: 200
Response Body: { ... }
```

---

## 👨‍💻 Author

Created and maintained by [@hpashok24](https://github.com/hpashok24)  
Open to contributions and suggestions!
