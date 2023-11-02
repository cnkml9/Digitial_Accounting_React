import axios from "axios";
import { RequestBuilder } from "../../Utilities/Helpers/RequestHelper";
import { CookieHelper } from "../../Utilities/Helpers/tokenInjector";

export class InternalApiService {
  static ReceiptRequest = async (
    requestType,
    endpoint,
    isAuthNecessary = false,
    body = {},
    id
  ) => {
    let resultHeaders = RequestBuilder.BuildHeaderForInternal(
      isAuthNecessary
        ? {
            Authorization: `Bearer ${
              CookieHelper.GetCookieData("tokenInfo").token
            }`,
          }
        : {}
    );
    switch (requestType) {
      case "GET": {
        let result_endpoint = RequestBuilder.SetEndPoint(`${endpoint}/`);
        return await axios
          .get(result_endpoint, {
            headers: resultHeaders,
          })
      }
      case "POST":
        return await axios
          .post(RequestBuilder.SetEndPoint(`${endpoint}/`), body, {
            headers: resultHeaders,
          })
      case "PUT":
        return await axios
          .put(RequestBuilder.SetEndPoint(endpoint), body ? body : {}, {
            headers: resultHeaders,
          })
      case "DELETE":
        return await axios
          .delete(
            RequestBuilder.SetEndPoint(`${endpoint}/${id ? id : null}`),
            {
              body: body ? body : {},
            },
            { headers: resultHeaders }
          )
      case "PATCH":
        return await axios.patch(RequestBuilder.SetEndPoint(endpoint), {
          headers: resultHeaders,
          body: body ? body : {},
        });
    }
  };
  static HandleRejection = (response, isAuthNecessary) => {
    if (isAuthNecessary && response.statusText === "Unauthorized") {
      CookieHelper.CookieDeleteItem("tokenInfo");
      CookieHelper.CookieDeleteItem("userInfo");
      CookieHelper.CookieDeleteItem("roleInfo");
      window.location.href = "/auth/login";
      // make Toast
    }
  };
  static GetAsync = async (endpoint, isAuthNecessary, id) => {
    try {
      return await this.ReceiptRequest(
        "GET",
        endpoint,
        isAuthNecessary,
        {},
        id
      );
    } catch (error) {
      this.HandleRejection(error.response, isAuthNecessary);
      throw await error;
    }
  };

  static PostAsync = async (endpoint, isAuthNecessary, body) => {
    try {
      return await this.ReceiptRequest(
        "POST",
        endpoint,
        isAuthNecessary,
        body,
        null
      );
    } catch (error) {
      this.HandleRejection(error.response, isAuthNecessary);
      let newError = await error;
      throw newError;
    }
  };

  static PutAsync = async (endpoint, isAuthNecessary, body) => {
    try {
      return await this.ReceiptRequest(
        "PUT",
        endpoint,
        isAuthNecessary,
        body,
        null
      );
    } catch (error) {
      this.HandleRejection(error.response, isAuthNecessary);
      throw await error;
    }
  };

  static DeleteAsync = async (endpoint, isAuthNecessary, id) => {
    try {
      return await this.ReceiptRequest(
        "DELETE",
        endpoint,
        isAuthNecessary,
        {},
        id
      );
    } catch (error) {
      this.HandleRejection(error.response, isAuthNecessary);
      throw await error;
    }
  };

  static PatchAsync = async (endpoint, isAuthNecessary, body) => {
    try {
      return await this.ReceiptRequest(
        "PATCH",
        endpoint,
        isAuthNecessary,
        body,
        null
      );
    } catch (error) {
      this.HandleRejection(error.response, isAuthNecessary);
      throw await error;
    }
  };
}
