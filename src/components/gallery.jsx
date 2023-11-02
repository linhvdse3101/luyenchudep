import { Image } from "./image";
import React, {useState} from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>
          Nội dung trang web về luyện chữ đẹp của chúng tôi được thiết kế để cung cấp cho bạn những thông tin quan trọng và hữu ích về luyện chữ đẹp. Chúng tôi cam kết hỗ trợ bạn trong việc phát triển kỹ năng viết đẹp và thúc đẩy sự sáng tạo trong viết văn của bạn.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-3 col-md-3 col-lg-3"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
