// Import required AWS SDK clients and commands for Node.js.
import { PutObjectCommand, GetBucketCorsCommand } from "@aws-sdk/client-s3";
import { s3Client } from "../../util/s3";

// S3 Vars
const bucketName = process.env.AWS_BUCKET;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

// Set the parameters
const params = {
  Bucket: bucketName, // The name of the bucket. For example, 'sample_bucket_101'.
  Key: "sample_upload.txt", // The name of the object. For example, 'sample_upload.txt'.
  Body: "Coca Cola!!!!!!!!!!!!!!!!!!!!!!!", // The content of the object. For example, 'Hello world!".
};

const run = async () => {
    try {
      const data = await s3Client.send(new GetBucketCorsCommand(params));
      console.log("Success", JSON.stringify(data.CORSRules));
      return data; // For unit tests.
    } catch (err) {
      console.log("Error", err);
    }
  };
  run();