const data = {
  baseUrl: "https://pixabay.com/api/",
  apiKey: "23539275-fb90155ac37cf87d4395ca2a5",
};

function sendUrl(value, page) {
  return `${data.baseUrl}?q=${value}&page=${page}&key=${data.apiKey}&image_type=photo&orientation=horizontal&per_page=12`;
}

export default sendUrl;
