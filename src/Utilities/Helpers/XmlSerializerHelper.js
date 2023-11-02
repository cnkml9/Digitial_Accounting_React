

export const SerializeXmlDataToJson = (xml) => {
    var obj = {};
  
    if (xml.nodeType == 1) { // element node
      if (xml.attributes.length > 0) {
        obj["@attributes"] = {};
        for (var i = 0; i < xml.attributes.length; i++) {
          var attribute = xml.attributes.item(i);
          obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
        }
      }
    } else if (xml.nodeType == 3) { // text node
      obj = xml.nodeValue;
    }
    
    if (xml.hasChildNodes()) {
      for(var j = 0; j < xml.childNodes.length; j++) {
        var item = xml.childNodes.item(j);
        var nodeName = item.nodeName;
        
        if (typeof(obj[nodeName]) == "undefined") {
          obj[nodeName] = SerializeXmlDataToJson(item);
        } else {
          if (typeof(obj[nodeName].push) == "undefined") {
            var old = obj[nodeName];
            obj[nodeName] = [];
            obj[nodeName].push(old);
          }
          obj[nodeName].push(SerializeXmlDataToJson(item));
        }
      }
    }
    
    return obj;
}
