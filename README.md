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
| `system`         | ✅       | The system name (e.g., `Partner Portal`)                                  |
| `environment`    | ✅       | The environment name (e.g., `SIT2`)                                       |
| `app_id`         | ✅       | Enov8 App ID (used as both `app-id` and `user-id`)                         |
| `app_key`        | ✅       | Enov8 App Key                                                              |
| `enov8_base_url` | ✅       | Base URL of the Enov8 instance (e.g., `https://dashboard.enov8.com/ecosystem`) |

---

## 🔐 Required Secrets

Add these to your repository’s **Secrets and variables > Actions** section:

| Secret Name        | Example Value                              |
|--------------------|--------------------------------------------|
| `ENOV8_APP_ID`     | `demoapi`                                  |
| `ENOV8_APP_KEY`    | `your-app-key-here`                        |
| `ENOV8_BASE_URL`   | `https://dashboard.enov8.com/ecosystem`    |

---

## 🛠 Example Workflow

```yaml
name: Send Enov8 Update

on:
  workflow_dispatch:

jobs:
  send-update:
    runs-on: ubuntu-latest
    steps:
      - name: Push version info to Enov8
        uses: hpashok24/enov8-send-environment-action@v1
        with:
          version: "10.0.6"
          system: "Partner Portal"
          environment: "SIT2"
          app_id: ${{ secrets.ENOV8_APP_ID }}
          app_key: ${{ secrets.ENOV8_APP_KEY }}
          enov8_base_url: ${{ secrets.ENOV8_BASE_URL }}
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
