import React from "react";
import "./Genres.css";

const Genres = () => {
  const genres = [
    {
      id: 1,
      category: "Comedy",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2189/1272189-h-474580e995d8",
    },
    {
      id: 2,
      category: "Drama",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2164/1272164-h-a40109f63230",
    },
    {
      id: 3,
      category: "Family",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2184/1272184-h-dc6d91e320bb",
    },
    {
      id: 4,
      category: "Crime",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2195/1272195-h-2981b9780648",
    },
    {
      id: 5,
      category: "Romance",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2168/1272168-h-0b9e56f3a569",
    },
   
   
    {
      id: 6,
      category: "Reality",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2167/1272167-h-57b30637dc58",
    },
   
    {
      id: 7,
      category: "Mythology",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2194/1272194-h-c7381829728b",
    },
    
    {
      id: 8,
      category: "Action",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2163/1272163-h-6a39e5230553",
    },
    {
      id: 9,
      category: "Talk Show",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2196/1272196-h-a60017186aff",
    },
    
    {
      id: 10,
      category: "Awards",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2197/1272197-h-e5a9bee75d55",
    },
    {
      id: 11,
      category: "Science",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2173/1272173-h-20b3596ec020",
    },
    {
      id: 13,
      category: "Documentary",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2199/1272199-h-a2cbf3b8c190",
    },
    {
      id: 14,
      category: "Horror",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2200/1272200-h-a1e428920c37",
    },
    {
      id: 15,
      category: "Thriller",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2162/1272162-h-1a65d09d73f0",
    },
    {
      id: 16,
      category: "Sports",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/GENRE/9836/9836/9836-h",
    },
    {
      id: 17,
      category: "Kids",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2172/1272172-h-56b5d331231d",
    },
    {
      id: 18,
      category: "Anime",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/847/1330847-h-5f1c7139d1a1",
    },
    {
      id: 19,
      category: "Animals & Nature",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2171/1272171-h-0c5bfb2ee8df",
    },
    {
      id: 20,
      category: "Animation",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2170/1272170-h-159c4a86d84a",
    },
    {
      id: 21,
      category: "Historical",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4454/1044454-h-bdead73b8dae",
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
        <div class="centered upper-case">{genre.category}</div>
      </div>
    );
  });

  return (
    <div className="outer-container">
      <div className="p-4"></div>
      <div class="inner-container">
        <h3 className="text-color-white">Genres</h3>
        <div className="row">
          {/* <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5 col-xs-7 image-box p-1">
            <img
              className="d-block w-100 rounded"
              src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2167/1272167-h-57b30637dc58"
              alt="test.png"
            />
            <div class="centered">Centered</div>
          </div>         */}
          {list}
        </div>
      </div>
    </div>
  );
};

export default Genres;
