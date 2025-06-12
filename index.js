const core = require('@actions/core');
const axios = require('axios');

async function run() {
  try {
    const version = core.getInput('version');
    const system = core.getInput('system');
    const environment = core.getInput('environment');
    const appId = core.getInput('app_id');
    const appKey = core.getInput('app_key');
    const baseUrl = core.getInput('enov8_base_url');

    const finalUrl = `${baseUrl.replace(/\/$/, '')}/api/environmentinstance`;

    const payload = `{
  "System": "${system}",
  "Environment": "${environment}",
  "Version": "${version}"
}`;

    const response = await axios.put(finalUrl, payload, {
      headers: {
        'user-id': appId,
        'app-id': appId,
        'app-key': appKey,
        'Content-Type': 'text/plain'
      }
    });

    core.info(`✅ Enov8 API responded: ${response.status}`);
    core.info(`Response Body: ${JSON.stringify(response.data)}`);
  } catch (error) {
    if (error.response) {
      core.setFailed(`❌ API Error: ${error.response.status} ${error.response.statusText}`);
      core.error(`Response body: ${JSON.stringify(error.response.data)}`);
    } else if (error.request) {
      core.setFailed(`❌ No response from Enov8 API.`);
      core.error(error.request);
    } else {
      core.setFailed(`❌ Request setup error: ${error.message}`);
    }
  }
}

run();
