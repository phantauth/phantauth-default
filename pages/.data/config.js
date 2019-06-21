
var domain = process.env.PHANTAUTH_DOMAIN || "phantauth.net";

module.exports = {
    ttl: Number(process.env.PHANTAUTH_TTL || "0"),
    domain: domain,
    developerPortalUri: process.env.PHANTAUTH_DEVELOPER_PORTAL_URI || ("https://www." + domain)
  };
