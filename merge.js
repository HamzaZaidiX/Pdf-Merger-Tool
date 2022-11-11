const PDFMerger = require("pdf-merger-js");

var merger = new PDFMerger();

const mergePdfs = async (p1,p2) => {
  await merger.add(p1); //merge all pages. parameter is the path to file and filename.
  await merger.add(p2); // merge only page 2
  await merger.add(p1,p2, [1, 3]); // merge the pages 1 and 3
  await merger.add(p2,p2, '4, 7, 8'); // merge the pages 4, 7 and 8
  await merger.add(p1,p2, '3 to 5'); //merge pages 3 to 5 (3,4,5)
  let d = new Date().getTime()
  await merger.save(`public/${d}.pdf`); //save under given name and reset the internal document
  return d

  // Export the merged PDF as a nodejs Buffer
  // const mergedPdfBuffer = await merger.saveAsBuffer();
  // fs.writeSync('merged.pdf', mergedPdfBuffer);
}

module.exports = {mergePdfs}
