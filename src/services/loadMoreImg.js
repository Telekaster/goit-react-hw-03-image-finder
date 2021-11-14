import axios from "axios";

export default function loadMoreImg(value, page, prevState, state) {
  const baseUrl = "https://pixabay.com/api/";
  const apiKey = "23539275-fb90155ac37cf87d4395ca2a5";

  axios
    .get(
      `${baseUrl}?q=${value}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => {
      return state.setState({ images: [...prevState, ...response.data.hits] });
    });
}
