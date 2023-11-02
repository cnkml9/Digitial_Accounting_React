import { SerializeXmlDataToJson } from "../../Utilities/Helpers/XmlSerializerHelper";
import { RequestBuilder } from "../../Utilities/Helpers/RequestHelper";
import axios from "axios";

class ExternalApiService {
  static GetAsync = () => {
    let resultHeaders = RequestBuilder.BuildHeaderForExternal();
    axios
      .get(RequestBuilder.SetEndPointForExternal(), {
        headers: resultHeaders,
      })
      .then((response) => {
        console.log(SerializeXmlDataToJson(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export { ExternalApiService };
