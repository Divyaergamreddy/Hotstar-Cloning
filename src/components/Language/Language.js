import "./Language.css";

const Language = () => {
  const genres = [
    {
      id: 1,
      elanguage: "Telugu",
      language: "తెలుగు",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1381/1121381-h-6c23f89e0ba2",
    },
    {
      id: 2,
      elanguage: "Hindi",
      language: "हिन्दी",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2155/1272155-h-53b5cac1c094",
    },
    {
      id: 3,
      elanguage: "English",
      language: "अंग्रेज़ी",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2158/1272158-h-aa2d20facda2",
    },
   
    {
      id: 4,
      elanguage: "Malayalam",
      language: "മലയാളം",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2159/1272159-h-54c3e895c74e",
    },
    {
      id: 5,
      elanguage: "Tamil",
      language: "தமிழ்",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2160/1272160-h-d078165f23bb",
    },
   
   
    {
      id: 6,
      elanguage: "Kannada",
      language: "ಕಂದ",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/LANGUAGE/5711/5711/5711-h",
    },
    {
      id: 7,
      elanguage: "Korean",
      language: "한국어",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/7339/1307339-h-303abe8ea3d6",
    },
  ];
  const list = [];

  genres.forEach((genre) => {
    list.push(
      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5 col-xs-7 image-box p-1">
        <img
          className="d-block w-100 rounded"
          src={genre.image}
          alt="test.png"
        />
        <div class="centered">
          {genre.language} <br />
          {genre.elanguage}
        </div>
      </div>
    );
  });

  return (
    <div className="outer-container">
      <div className="p-4"></div>
      <div class="inner-container">
        <h3 className="text-color-white">Language</h3>
        <div className="row">{list}</div>
      </div>
    </div>
  );
};

export default Language;
