function requestValidator(obj) {
  const checkMethods = ["GET", "POST", "DELETE", "CONNECT"];
  const checkUri = /^[\w.]+$/g;
  const checkVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
  const checkMessage = [`<`, `>`, `\\`, `&`, `'`, `"`];

  if (!obj.hasOwnProperty("method")) {
    throw new Error("Invalid request header: Invalid Method");
  }
  if (!obj.hasOwnProperty("uri")) {
    throw new Error("Invalid request header: Invalid URI");
  }
  if (!obj.hasOwnProperty("version")) {
    throw new Error("Invalid request header: Invalid Version");
  }
  if (!obj.hasOwnProperty("message")) {
    throw new Error("Invalid request header: Invalid Message");
  }

  if (!checkMethods.includes(obj.method)) {
    throw new Error("Invalid request header: Invalid Method");
  }
  if (!obj.uri || (obj.uri !== "*" && !obj.uri.match(checkUri))) {
    throw new Error("Invalid request header: Invalid URI");
  }
  if (!checkVersions.includes(obj.version)) {
    throw new Error("Invalid request header: Invalid Version");
  }

  for (const el of obj.message) {
    if (checkMessage.includes(el)) {
      throw new Error("Invalid request header: Invalid Message");
    }
  }
  return obj;
}
console.log(
  requestValidator({
    method: "GET",
    uri: "svn.public.catalog",
    version: "HTTP/1.1",
    message: "",
  })
);
