const DashboardPlugin = require("webpack-dashboard/plugin");

module.exports = {
    resolve.fallback: { "assert": require.resolve("assert/") },
    plugins: [new DashboardPlugin({ port: 3001 })],
};
