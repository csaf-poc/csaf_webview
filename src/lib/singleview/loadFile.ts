import { convertToDocModel } from "$lib/singleview/docmodel/docmodel";
import {
  extractProducts,
  generateProductVulnerabilities
} from "./productvulnerabilities/productvulnerabilities";
import { appStore } from "$lib/store";
const loadFile = (csafFile: File) => {
  const fileReader: FileReader = new FileReader();
  let jsonDocument = {};
  fileReader.onload = (e: ProgressEvent<FileReader>) => {
    if (e.target) {
      try {
        jsonDocument = JSON.parse(e.target.result as string);
      } catch (_) {
        /*
						Treat unparsable documents as empty documents
					   	The according errors will be reflected in the converted
					   	DocModel.
					*/
      }
      const docModel = convertToDocModel(jsonDocument);
      const products = extractProducts(jsonDocument);
      const productLookup = products.reduce((o: any, n: any) => {
        o[n.product_id] = n.name;
        return o;
      }, {});
      docModel.productsByID = productLookup;
      docModel.productVulnerabilities = generateProductVulnerabilities(
        jsonDocument,
        products,
        productLookup
      );
      console.log(docModel);
      appStore.setDocument(docModel);
    }
  };
  fileReader.readAsText(csafFile);
};

export { loadFile };
