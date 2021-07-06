import { MongoClient } from 'mongodb';
import bcrypt from 'bcrypt';
import { jsPDF } from "jspdf";

const uri = process.env.MONGODB_URL;

// Creates a new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const handler = async (req, res) => {
  console.log("requested body: ", req.body)

  if (req.method === 'POST') {
    await client.connect();

    const database = client.db("moviedb");
    const resume = database.collection("resume_builder");

    let {
      first_name,
      last_name,
      street,
      city,
      state,
      zip,
      email,
      school_1,
      school_1_start,
      school_1_end,
      school_2,
      school_2_start,
      school_2_end,
      school_3,
      school_3_start,
      school_3_end,
      skills
    } = req.body;

    console.log(first_name)

    // document to be inserted
    const entry = {
      first_name: first_name,
      last_name: last_name,
      street: street,
      city: city,
      state: state,
      zip: zip,
      email: email,
      school_1: school_1,
      school_1_start: school_1_start,
      school_1_end: school_1_end,
      school_2: school_2,
      school_2_start: school_2_start,
      school_2_end: school_2_end,
      school_3: school_3,
      school_3_start: school_3_start,
      school_3_end: school_3_end,
      skills: skills
    };

    const result = await resume.insertOne(entry);


    var pageWidth = 8.5,
      lineHeight = 1.2,
      margin = 0.5,
      maxLineWidth = pageWidth - margin * 2,
      fontSize = 12,
      ptsPerInch = 72,
      oneLineHeight = (fontSize * lineHeight) / ptsPerInch,
      text =
        `${first_name}\n` +
        `${last_name}\n` +
        `${street}\n` +
        `${state}\n` +
        `${zip}\n` +
        `${email}\n` +
        `${school_1}\n` +
        `${school_1_start}\n` +
        `${school_1_end}\n` +
        `${school_2}\n` +
        `${school_2_start}\n` +
        `${school_2_end}\n` +
        // Notice that the following will be wrapped to two lines automatically!
        `${skills}`,
      doc = new jsPDF({
        unit: "in",
        lineHeight: lineHeight
      }).setProperties({ title: "String Splitting" });

    // splitTextToSize takes your string and turns it in to an array of strings,
    // each of which can be displayed within the specified maxLineWidth.
    var textLines = doc
      .setFont("helvetica")
      .setFontSize(fontSize)
      .splitTextToSize(text, maxLineWidth);

    // doc.text can now add those lines easily; otherwise, it would have run text off the screen!
    doc.text(textLines, margin, margin + 2 * oneLineHeight);

    // You can also calculate the height of the text very simply:
    var textHeight = (textLines.length * fontSize * lineHeight) / ptsPerInch;
    doc
      .setFont("Helvetica", "normal")
      .text(
        "By Jobbox",
        margin,
        margin + oneLineHeight
      );

    doc.save("Sample_.pdf");


     return res.redirect('/user/resume-builder');

  }

}



export default handler;