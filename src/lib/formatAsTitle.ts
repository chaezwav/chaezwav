export default function formatAsTitle(url: string) {
  const urlpath = url.split("/").pop().split("-");

  for (let i = 0; i < urlpath.length; i++) {
    urlpath[i] = urlpath[i][0].toUpperCase() + urlpath[i].substr(1);
  }

  return urlpath.join(" ");
}
