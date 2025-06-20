const core = require('@actions/core');
const axios = require('axios');

async function run() {
  try {
    const version = core.getInput('version');
    const system = core.getInput('system');
    const environment = core.getInput('environment');
    const appId = process.env.ENOV8_APP_ID;
    const appKey = process.env.ENOV8_APP_KEY;
    const baseUrl = process.env.ENOV8_BASE_URL;

// TEMP DEBUG
  core.info(`🔍 Using Base URL: ${baseUrl}`);

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
      core.error(`Response: ${JSON.stringify(error.response.data)}`);
    } else {
      core.setFailed(`❌ ${error.message}`);
    }
  }
}

run();
