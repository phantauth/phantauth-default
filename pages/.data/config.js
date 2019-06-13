
var domain = process.env.PHANTAUTH_DOMAIN || "phantauth.net";

module.exports = {
    domain: domain,
    developerPortalUri: process.env.PHANTAUTH_DEVELOPER_PORTAL_URI || ("https://www." + domain)
  };
