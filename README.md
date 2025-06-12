# Enov8 Send Environment Info GitHub Action

This GitHub Action sends system, environment, and version info to the Enov8 API.

## 📥 Inputs

| Name            | Required | Description                                                   |
|-----------------|----------|---------------------------------------------------------------|
| version         | ✅       | Version string (e.g. 10.0.6)                                  |
| system          | ✅       | System name (e.g. Partner Portal)                             |
| environment     | ✅       | Environment name (e.g. SIT2)                                  |
| app_id          | ✅       | Enov8 App ID (also used as User ID)                           |
| app_key         | ✅       | Enov8 App Key                                                 |
| enov8_base_url  | ✅       | Enov8 base URL (e.g. https://dashboard.enov8.com/ecosystem)   |

## 🚀 Example Usage

```yaml
- name: Send Enov8 Environment Info
  uses: your-org/enov8-send-environment-action@v1
  with:
    version: "10.0.6"
    system: "Partner Portal"
    environment: "SIT2"
    app_id: ${{ secrets.ENOV8_APP_ID }}
    app_key: ${{ secrets.ENOV8_APP_KEY }}
    enov8_base_url: ${{ secrets.ENOV8_BASE_URL }}
```