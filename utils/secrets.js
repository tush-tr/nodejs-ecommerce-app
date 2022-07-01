const secrets = {
  SESSION_KEY: "TusharRajpoot",
};

const setSecrets = async () => {
  try {
    Object.keys(secrets).forEach((secretKey) => {
      process.env[secretKey] = secrets[secretKey];
    });
    return true;
  } catch (err) {
    return false;
  }
};

module.exports = setSecrets;

