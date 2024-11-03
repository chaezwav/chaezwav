export default function formatAsTitle(url: string): string {
  if (!url) {
    return "";
  }

  const urlParts = url.split("/");
  const lastPart = urlParts.pop();

  if (!lastPart) {
    return "";
  }

  const urlpath = lastPart.split("-");

  for (let i = 0; i < urlpath.length; i++) {
    if (urlpath[i]) {
      urlpath[i] = urlpath[i][0].toUpperCase() + urlpath[i].substr(1);
    }
  }

  return urlpath.join(" ");
}
