class RequestBuilder {
  static BuildHeaderForInternal = (headers) => {
    return {
      ...{
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      ...(headers ?? {}),
    };
  };
  static BuildHeaderForExternal = (headers) => {
    return {
      ...{
        Accept: "*/*",
        "Content-Type": "text/xml",
        "Access-Allow-Origin": "*",
      },
      ...(headers ?? {}),
    };
  };
  static SetEndPoint = (endpoint) => {
    try {
      let baseEndpoint = `${
        import.meta.env.VITE_REACT_NODE_ENV === "PRODUCTION"
          ? import.meta.env.VITE_REACT_APP_PRODUCTION_ENDPOINT
          : import.meta.env.VITE_REACT_APP_DEVELOPMENT_ENDPOINT
      }${endpoint}`;
      let full_filled_endpoint = baseEndpoint;
      return full_filled_endpoint;
    } catch (error) {
      console.log(error);
    }
  };
  static SetEndPointForExternal = () => {
    return `${
      import.meta.env.VITE_REACT_NODE_ENV === "PRODUCTION"
        ? import.meta.env.VITE_REACT_APP_PRODUCTION_EXCHANGE_ENDPOINT
        : import.meta.env.VITE_REACT_APP_DEVELOPMENT_EXCHANGE_ENDPOINT
    }`;
  };
}

export { RequestBuilder };
