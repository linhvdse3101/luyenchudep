import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>ĐỘI NGŨ CỦA CHÚNG</h2>
          <p>
          Chào mừng bạn đến với khóa học luyện chữ đẹp! Chúng tôi tận tâm đem đến cho bạn một trải nghiệm học tập độc đáo và bổ ích. Tại đây, bạn sẽ học cách viết chữ đẹp và thể hiện sự tỉ mỉ, tinh tế trong từng nét chữ. Khóa học chúng tôi sẽ giúp bạn phát triển kỹ năng viết đẹp và tự tin trong việc thể hiện cá tính qua bức tranh chữ của riêng mình.

Chúng tôi tự hào có một đội ngũ giảng viên có kinh nghiệm, sẵn sàng hướng dẫn bạn từng bước. Hãy cùng chúng tôi khám phá vẻ đẹp của từng nét chữ và tạo ra những tác phẩm độc đáo của riêng bạn. Hãy tham gia khóa học luyện chữ đẹp của chúng tôi và bắt đầu hành trình viết đẹp của bạn ngay hôm nay!
          </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
