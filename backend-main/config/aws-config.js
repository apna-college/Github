const AWS = require("aws-sdk");

AWS.config.update({ region: "ap-south-1" });

const s3 = new AWS.S3();
const S3_BUCKET = "insert_bucket_name";

module.exports = { s3, S3_BUCKET };
