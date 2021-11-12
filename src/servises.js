function sendUrl(value, page) {
  const baseUrl = "https://pixabay.com/api/";
  const apiKey = "23539275-fb90155ac37cf87d4395ca2a5";
  return `${baseUrl}?q=${value}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`;
}

export default sendUrl;
