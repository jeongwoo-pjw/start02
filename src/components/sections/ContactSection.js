import { useState } from 'react';
import './ContactSection.css';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="contact section-pad">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">문의하기</h2>
          <p className="section-subtitle">프로젝트 상담 및 견적 문의를 남겨주세요</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <strong>주소</strong>
                <p>서울특별시 (상세 주소 입력)</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">📞</span>
              <div>
                <strong>전화</strong>
                <p>02-0000-0000</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">✉️</span>
              <div>
                <strong>이메일</strong>
                <p>contact@jwit.co.kr</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">🕐</span>
              <div>
                <strong>운영시간</strong>
                <p>평일 09:00 ~ 18:00</p>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap">
            {sent ? (
              <div className="sent-msg">
                <span>✅</span>
                <p>문의가 접수되었습니다. 빠르게 연락드리겠습니다.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <input
                    type="text"
                    name="name"
                    placeholder="이름 *"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="이메일 *"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="연락처"
                  value={form.phone}
                  onChange={handleChange}
                />
                <textarea
                  name="message"
                  placeholder="문의 내용을 입력해주세요 *"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
                <button type="submit" className="btn-primary submit-btn">
                  문의 보내기
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
