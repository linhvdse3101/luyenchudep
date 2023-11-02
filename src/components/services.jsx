import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>DỊCH VỤ CỦA CHÚNG TÔI CHO LẬP TRÌNH VIÊN LÀM NÊN TRANG WEB</h2>
          <p>
          Chúng tôi là đối tác đáng tin cậy của bạn trong việc phát triển và quản lý trang web. Với đội ngũ lập trình viên chuyên nghiệp và kỹ thuật viên kinh nghiệm, chúng tôi cam kết cung cấp các dịch vụ chất lượng sau:
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
