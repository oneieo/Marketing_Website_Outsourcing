// import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between">

          {/* 왼쪽 로고 */}
          <div className="flex items-center">
            <img
              src="/images/icon-footer-logo.png"
              alt="화경 로고"
              className="w-[181px] h-[120px] object-contain"
            />

          </div>

          {/* 오른쪽 정보 (좌측 정렬) */}
          <div className="text-left text-sm text-slate-400 leading-relaxed w-[260px] mr-24">
            <div>상호명: 화경마케팅</div>
            <div>대표: 이민경</div>
            <div>사업자등록번호: 675-03-03592</div>
            <div>주소: 전주시 덕진구 금암1길 33</div>
            <div>전화: 010-5579-3312</div>
            <div>이메일: dialsrud0614@naver.com</div>
          </div>

        </div>

        <div className="mt-10 text-center text-[10px] text-slate-600">
          © 2024 화경(HWAGYEONG). All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
