import { useState } from 'react';
import './ContactSection.css';

const INFO = [
  { icon: '📍', label: '주소',   value: '서울특별시 (상세 주소 입력)' },
  { icon: '📞', label: '전화',   value: '02-0000-0000' },
  { icon: '✉️', label: '이메일', value: 'contact@jwit.co.kr' },
  { icon: '🕐', label: '운영시간', value: '평일 09:00 ~ 18:00' },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <section id="contact" className="contact section-pad">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Contact</span>
          <h2 className="section-title">프로젝트 상담</h2>
          <p className="section-subtitle">견적 문의 및 상담을 남겨주시면 빠르게 연락드립니다</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            {INFO.map((item) => (
              <div key={item.label} className="info-item">
                <div className="info-icon-wrap">{item.icon}</div>
                <div>
                  <strong>{item.label}</strong>
                  <p>{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="contact-form-wrap">
            {sent ? (
              <div className="sent-msg">
                <span>✅</span>
                <p>문의가 접수되었습니다.<br />빠르게 연락드리겠습니다.</p>
              </div>
            ) : (
              <>
                <p className="form-title">문의 내용 작성</p>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <input type="text" name="name" placeholder="이름 *" value={form.name} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="이메일 *" value={form.email} onChange={handleChange} required />
                  </div>
                  <input type="tel" name="phone" placeholder="연락처" value={form.phone} onChange={handleChange} />
                  <textarea name="message" placeholder="문의 내용을 입력해주세요 *" rows={5} value={form.message} onChange={handleChange} required />
                  <button type="submit" className="btn-primary submit-btn">문의 보내기 →</button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
