import React from "react";
import { useEffect } from "react";
import S from "./Styles/Gallery.module.css";
import "./Styles/Gallery.css";
import { imageSlide, photos } from "../Data/GalleryData.js";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import PhotoAlbum from "react-photo-album";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";


const GalleryPage = () => {
  const [Index, setIndex] = useState(-1);

  useEffect(() => {

    document.querySelector(`.${S.aboutHead} h1`).classList.add(`${S.fadeIn}`);

    const imgObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        
        entry.target.classList.toggle(`active`, entry.isIntersecting);

        if (entry.isIntersecting) {
          imgObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold:0.5,
      rootMargin:"0px 0px -300px 0px"
    }
  );

  const Images = document.querySelectorAll(`.react-photo-album--column`);
  
  Images.forEach((img)=>{

    imgObserver.observe(img);  

  })

  }, []);

  return (
    <>

      <div className={`${S.aboutHead}`}>
        <h1>GALLERY</h1>
      </div>

      <div className={`${S.aboutBody}`}>
        <PhotoAlbum
          layout="columns"
          photos={photos}
          columns={(containerWidth) => {
            if (containerWidth < 400) return 2;
            if (containerWidth < 800) return 3;
            return 4;
          }}
          onClick={(event, photo, index) => setIndex(index)}
          componentsProps={{ imageProps: { loading: "lazy" } }}
        />

        <Lightbox
          open={Index >= 0}
          index={Index}
          close={() => setIndex(-1)}
          slides={imageSlide}
          plugins={[Captions, Fullscreen, Slideshow, Thumbnails]}
          thumbnails={{
            borderRadius: 10,
          }}
        />
      </div>

    </>
  );
};

export default GalleryPage;
