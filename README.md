# 📦 Enov8 Send Environment Info — GitHub Action

Easily send your system, environment, and version details to **Enov8** using this secure GitHub Action.  
Ideal for teams automating environment status updates in CI/CD workflows — **without exposing credentials in workflow files**.

---

## 🚀 What This Action Does

This GitHub Action sends a simple payload to your Enov8 REST API:

```json
{
  "System": "GDW",
  "Environment": "SIT",
  "Version": "10.0.6"
}
```

It securely handles authentication (`user-id`, `app-id`, `app-key`) using **Environment secrets**, not `with:` inputs.

---

## ✅ How It Works

✔️ **Non-sensitive inputs** (`version`, `system`, `environment`) are passed in `with:`  
✔️ **Sensitive credentials** (`app-id`, `app-key`, `base_url`) are securely read from Environment secrets using `process.env`.

---

## 🧾 Inputs

| Name           | Required | Description                                       |
|----------------|----------|---------------------------------------------------|
| `version`      | ✅       | Version to send (e.g., `10.0.6`)                  |
| `system`       | ✅       | System name (e.g., `GDW`)                         |
| `environment`  | ✅       | Environment name (e.g., `SIT`)                    |

> ⚠️ **Do not pass credentials in `with:` — use Environment secrets!**

---

## 🔐 How to Create a GitHub Environment and Add Secrets

Using a **GitHub Environment** is the recommended way to store your Enov8 credentials.

### ✅ Step 1 — Create an Environment

1. Go to **your repository → ⚙️ Settings → Environments**  
2. Click **“New environment”** and name it, e.g. `production`.

### ✅ Step 2 — Add Secrets

Inside the Environment:

| Secret Name        | Example Value                              |
|--------------------|--------------------------------------------|
| `ENOV8_APP_ID`     | `demoapi`                                  |
| `ENOV8_APP_KEY`    | `your-app-key`                             |
| `ENOV8_BASE_URL`   | `https://<your-domain>.enov8.com/ecosystem`|

Click **“Add secret”** for each — done!

### ✅ Step 3 — Use in Your Workflow

Reference the Environment secrets:

```yaml
jobs:
  send-update:
    environment: production  # ✅ must match your Environment name
    env:
      ENOV8_APP_ID: ${{ secrets.ENOV8_APP_ID }}
      ENOV8_APP_KEY: ${{ secrets.ENOV8_APP_KEY }}
      ENOV8_BASE_URL: ${{ secrets.ENOV8_BASE_URL }}
```

**Only jobs that declare the Environment can access these secrets — extra secure!**

---

## 🔑 How to Generate an Enov8 API Key

1. Log in to **Enov8 Platform** as **System Admin**  
2. Go to: `Configuration Management → System Administration → API Management`  
3. Click **“Add API Key”**
4. Enter your **Application ID**  
5. Click **“Generate Random Key”**  

📚 [Official Docs: Generating an API Key](https://docs.enov8.com/docs/enov8-platform/rest-api#generating-an-api-key)

---

## 🛠 Example Workflow

```yaml
name: Send Enov8 Version Info

on:
  workflow_dispatch:

jobs:
  send-update:
    runs-on: ubuntu-latest
    environment: production
    env:
      ENOV8_APP_ID: ${{ secrets.ENOV8_APP_ID }}
      ENOV8_APP_KEY: ${{ secrets.ENOV8_APP_KEY }}
      ENOV8_BASE_URL: ${{ secrets.ENOV8_BASE_URL }}
    steps:
      - name: Push version info to Enov8
        uses: hpashok24/enov8-send-environment-action@v1.2
        with:
          version: "10.0.6"
          system: "GDW"
          environment: "SIT"
```

---

## ✅ Expected Output

On success, the Action logs:

```
✅ Enov8 API responded: 200
Response Body: { ... }
```

---

## 👨‍💻 Author

Created and maintained by [@hpashok24](https://github.com/hpashok24)  
PRs and suggestions welcome!

---

## ⚡️ Ready to automate your Enov8 updates securely!

