# 📦 Enov8 Send Environment Info — Official GitHub Action

This official GitHub Action by Enov8 sends system, environment, and version info to your Enov8 platform.

---

## 🚀 What This Action Does

Sends a payload like:
```json
{
  "System": "Partner Portal",
  "Environment": "SIT2",
  "Version": "10.0.6"
}
```
to your Enov8 API with secure authentication headers.

---

## 🧾 Inputs

| Name             | Required | Description                                                               |
|------------------|----------|---------------------------------------------------------------------------|
| `version`        | ✅       | Version string (e.g., 10.0.6)                                             |
| `system`         | ✅       | System name (e.g., Partner Portal)                                        |
| `environment`    | ✅       | Environment name (e.g., SIT2)                                             |
| `app_id`         | ✅       | Enov8 App ID (used for both user-id & app-id)                             |
| `app_key`        | ✅       | Enov8 App Key                                                             |
| `enov8_base_url` | ✅       | Base Enov8 URL (e.g., https://dashboard.enov8.com/ecosystem)              |

---

## 🔐 Required Secrets

| Secret Name        | Example Value                              |
|--------------------|--------------------------------------------|
| `ENOV8_APP_ID`     | demoapi                                    |
| `ENOV8_APP_KEY`    | your-app-key-here                          |
| `ENOV8_BASE_URL`   | https://dashboard.enov8.com/ecosystem      |

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
        uses: Enov8/send-environment-info-action@v1
        with:
          version: "10.0.6"
          system: "Partner Portal"
          environment: "SIT2"
          app_id: ${{ secrets.ENOV8_APP_ID }}
          app_key: ${{ secrets.ENOV8_APP_KEY }}
          enov8_base_url: ${{ secrets.ENOV8_BASE_URL }}
```

---

## 🔑 How to Generate an Enov8 API Key

**Steps:**

1. Log in as **System Admin**
2. Go to `Configuration Management → System Administration → API Management`
3. Click **Add API Key**
4. Enter your **Application ID** and click **Generate Random Key**

More info: [Enov8 REST API Docs](https://docs.enov8.com/docs/enov8-platform/rest-api#generating-an-api-key)

---

✅ **Secure:** Use GitHub secrets for credentials.
✅ **Official:** Developed and maintained by Enov8.