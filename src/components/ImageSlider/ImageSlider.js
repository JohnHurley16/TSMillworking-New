import React, { useEffect, useState, forwardRef } from "react";
import Slider from "react-slick";
import ImageItem from "./ImageItem"
import HeadingSection from "../HeadingSection/HeadingSection";

const ImageSlider = forwardRef(({ _data }, ref) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(process.env.REACT_APP_INSTA_API_KEY)
  useEffect(() => {
    const fetchPics = async () => {
      const res = await fetch(`https://graph.instagram.com/me/media?access_token=${process.env.REACT_APP_INSTA_API_KEY}&fields=media_url,media_type,caption,permalink`)
      const json_res = await res.json()

      const photo_data = []
      let count = 0;

      for (let i = 0; i < json_res.data.length; i++) {
        if (json_res.data[i].media_type === "IMAGE") {
          json_res.data[i].key = count;
          count++
          photo_data.push(json_res.data[i])
        }
      }
      setData(photo_data)
      setLoading(false)
    }
    fetchPics()
  }, [])


  const settings = {
    autoplay: true,
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "owl-carousel blog-slider",
    responsive: [
      {
        breakpoint: 901,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section ref={ref}>
      <div className="dn-bg-lines">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="container">
        <div className="row">
          <HeadingSection title="Recent Projects" />
        </div>
        <div className="row mt-50">
          <div className="col-md-12 remove-padding">
            <Slider {...settings}>
              {data.map((post, key) => (
                <ImageItem post={post} key={key} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
})


export default ImageSlider;
