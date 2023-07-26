export default function loadBalancer(NigeriaDownload, CanadaDownload) {
  return Promise
    .race([NigeriaDownload, CanadaDownload])
    .then((res) => res);
}
