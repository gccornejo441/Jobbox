import { S3Client } from '@aws-sdk/client-s3';

// S3 Vars
const region = process.env.AWS_REGION;

const s3Client = new S3Client({
    region: region
});


  export { s3Client };
