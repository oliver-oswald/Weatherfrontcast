const Image = (props) => {
  switch (props) {
    case "sunny":
      return (
        <img
          alt="Sonnig"
          style={{
            aspectRatio: "1/1",
            height: "80%",
            margin: "auto",
          }}
          src="//ssl.gstatic.com/onebox/weather/64/sunny.png"
          id="wob_tci"
          data-atf="1"
          data-frt="0"
        ></img>
      );
    case "partly_cloudy":
      return (
        <img
          alt="Sonnig"
          style={{
            aspectRatio: "1/1",
            height: "80%",
            margin: "auto",
          }}
          src="//ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          id="wob_tci"
          data-atf="1"
          data-frt="0"
        ></img>
      );
    case "cloudy":
      return (
        <img
          alt="Sonnig"
          style={{
            aspectRatio: "1/1",
            height: "80%",
            margin: "auto",
          }}
          src="//ssl.gstatic.com/onebox/weather/64/cloudy.png"
          id="wob_tci"
          data-atf="1"
          data-frt="0"
        ></img>
      );
    case "rain_s_cloudy":
      return (
        <img
          alt="Sonnig"
          style={{
            aspectRatio: "1/1",
            height: "80%",
            margin: "auto",
          }}
          src="//ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png"
          id="wob_tci"
          data-atf="1"
          data-frt="0"
        ></img>
      );
    case "rain":
      return (
        <img
          alt="Sonnig"
          style={{
            aspectRatio: "1/1",
            height: "80%",
            margin: "auto",
          }}
          src="//ssl.gstatic.com/onebox/weather/64/rain.png"
          id="wob_tci"
          data-atf="1"
          data-frt="0"
        ></img>
      );
    case "thunderstorms":
      return (
        <img
          alt="Sonnig"
          style={{ aspectRatio: "1/1" }}
          src="//ssl.gstatic.com/onebox/weather/64/thunderstorms.png"
          id="wob_tci"
          data-atf="1"
          data-frt="0"
        ></img>
      );
    case "snow":
      return (
        <img
          alt="Sonnig"
          style={{
            aspectRatio: "1/1",
            height: "80%",
            margin: "auto",
          }}
          src="//ssl.gstatic.com/onebox/weather/64/snow.png"
          id="wob_tci"
          data-atf="1"
          data-frt="0"
        ></img>
      );
    default:
      return <></>;
  }
};

export default Image;