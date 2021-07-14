import S3 from 'aws-sdk/clients/s3';

// S3 Vars
const bucketName = process.env.AWS_BUCKET;
const region = process.env.AWS_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const client = new S3({
    region,
    accessKeyId,
    secretAccessKey
});

const bucketParams = {
    Bucket : bucketName
};

// Create an album in the bucket
const createAlbum = async (albumName) => {
    albumName = albumName.trim();
    if (!albumName) {
      return alert("Album names must contain at least one non-space character.");
    }
    if (albumName.indexOf("/") !== -1) {
      return alert("Album names cannot contain slashes.");
    }
    var albumKey = encodeURIComponent(albumName);
    try {
      const key = albumKey + "/";
      const params = { Bucket: albumBucketName, Key: key };
      const data = await s3.send(new PutObjectCommand(params));
      alert("Successfully created album.");
      viewAlbum(albumName);
    } catch (err) {
      return alert("There was an error creating your album: " + err.message);
    }
  };
  
  // Make createAlbum function available to the browser
  window.createAlbum = createAlbum;