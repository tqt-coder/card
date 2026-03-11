import React from 'react'

// ── Edit your love story here ───────────────────────────────
const STORY = [
  {
    date:  'Tháng 3, 2020',
    title: 'Lần Đầu Gặp Gỡ',
    desc:  'Chúng tôi gặp nhau lần đầu tại một buổi tiệc của bạn bè chung. Ánh mắt đầu tiên chạm nhau, và trái tim tôi đã biết đây là người đặc biệt.',
    icon:  '💫',
    side:  'left',
  },
  {
    date:  'Tháng 6, 2020',
    title: 'Lời Tỏ Tình',
    desc:  'Dưới ánh hoàng hôn tuyệt đẹp tại bờ biển Vũng Tàu, anh đã cầm tay em và nói những điều chân thành từ trái tim.',
    icon:  '💌',
    side:  'right',
  },
  {
    date:  'Tháng 3, 2022',
    title: 'Chuyến Du Lịch Đầu Tiên',
    desc:  'Cùng nhau khám phá Đà Lạt — thành phố sương mù lãng mạn. Những khoảnh khắc đó chúng tôi sẽ không bao giờ quên.',
    icon:  '✈️',
    side:  'left',
  },
  {
    date:  'Tháng 12, 2024',
    title: 'Lời Cầu Hôn',
    desc:  'Trong một buổi tối lãng mạn dưới ánh nến lung linh, anh đã quỳ gối cầu hôn với nhẫn kim cương và lời hứa mãi mãi.',
    icon:  '💍',
    side:  'right',
  },
  {
    date:  '26 tháng 04, 2026',
    title: 'Lễ Thành Hôn',
    desc:  'Chúng tôi bước vào một chương mới của cuộc đời — bắt đầu hành trình sống cùng nhau mãi mãi.',
    icon:  '💒',
    side:  'left',
  },
]
// ────────────────────────────────────────────────────────────

function Story() {
  return (
    <section id="story" className="section story-section">
      <div className="container">
        <div className="section-header" data-animate>
          <span className="section-tag">Our Journey</span>
          <h2 className="section-title">Câu Chuyện Tình Yêu</h2>
          <div className="section-divider"><span>❤</span></div>
          <p className="section-desc">
            Mỗi khoảnh khắc là một trang trong cuốn sách tình yêu của chúng tôi
          </p>
        </div>

        <div className="timeline">
          {STORY.map((item, i) => (
            <div
              key={i}
              className={`timeline-item timeline-${item.side}`}
              data-animate
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="timeline-icon">{item.icon}</div>
              <div className="timeline-content">
                <span className="timeline-date">{item.date}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Story
