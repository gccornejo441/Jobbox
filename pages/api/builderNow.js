import PDFDocument from 'pdfkit';
const fs = require('fs');

const builderNow = async (req, res) => {

    console.log("REA.BODY: ", req.body);

    if (req.method === "POST") {

        const doc = new PDFDocument();

        // https://stackoverflow.com/questions/44731255/send-pdf-file-made-with-pdfkit-to-the-client-for-display/67017960#67017960
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", `inline; filename=${req.body.first_name}_resume.pdf`);

        doc.pipe(fs.createWriteStream('output.pdf'));

        // and some justified text wrapped into columns
        doc
          .fillColor('black')
          .font('Times-Bold', 16)
          .moveUp(1.6)
          .text(req.body.first_name + " " + req.body.last_name, {
            width: 412,
            align: 'center',
            indent: 40,
            columns: 1,
            height: 500,
            ellipsis: true
          })

        // and some justified text wrapped into columns

        
        doc.end();
    }

}

export default builderNow;