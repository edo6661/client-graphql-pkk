module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'MY_ENV',
        allowUndefined: true,
        blocklist: [
          'BLOCKED_ENV_VAR',
          'PRODUCTION_BLOCKED_ENV_VAR',
          'STAGING_BLOCKED_ENV_VAR',
        ],
        allowlist: [
          'ALLOWED_ENV_VAR',
          'TEST_ENV_VAR',
          'PRODUCTION_BLOCKED_ENV_VAR',
          'PRODUCTION_ALLOWED_ENV_VAR',
          'PRODUCTION_TEST_ENV_VAR',
          'STAGING_BLOCKED_ENV_VAR',
          'STAGING_ALLOWED_ENV_VAR',
          'STAGING_TEST_ENV_VAR',
        ],
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
