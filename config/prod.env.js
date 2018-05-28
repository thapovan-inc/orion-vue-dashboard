module.exports = {
    NODE_ENV: '"production"',
    AWS_ACCESS_KEY: process.env.SNAP_AWS_KEY,
    AWS_SECRET_KEY: process.env.SNAP_AWS_SECRET,
    AWS_REGION: process.env.SNAP_AWS_REGION,
    AWS_BUCKET: 'snap-vue-sample-app',
    AWS_DISTRIBUTION: process.env.SNAP_APP_CLOUDFRONT_DIST,
};
