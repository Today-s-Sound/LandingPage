import { Play, Bell, Globe, Smartphone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-surface" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <p className="text-primary text-sm font-medium mb-4">
              시각장애인을 위한 맞춤형 서비스
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              웹의 변화를
              <br />
              <span className="text-primary">소리로 전달합니다</span>
            </h1>

            <p className="text-lg text-text-secondary max-w-md mx-auto lg:mx-0 mb-8">
              구독한 웹페이지의 업데이트를 실시간으로 감지하고 음성으로
              알려드립니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
              <a
                href="#download"
                className="bg-primary text-black px-6 py-3 rounded-xl font-medium hover:bg-primary-light transition-colors flex items-center justify-center gap-2"
              >
                <Smartphone size={18} />앱 다운로드
              </a>
              <a
                href="#features"
                className="text-white px-6 py-3 rounded-xl font-medium border border-white/10 hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
              >
                <Play size={18} />
                기능 알아보기
              </a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-text-secondary">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>실시간 알림</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>AI 요약</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>TTS 재생</span>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="flex justify-center">
            <div className="relative w-[280px] h-[580px] bg-black rounded-[2.5rem] border-[6px] border-neutral-800 shadow-2xl overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-xl z-20" />

              {/* Screen */}
              <div className="w-full h-full bg-surface-light flex flex-col">
                {/* App Header */}
                <div className="pt-10 px-4 pb-4 bg-gradient-to-b from-primary/10 to-transparent">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
                      <Bell className="w-3.5 h-3.5 text-black" />
                    </div>
                    <span className="text-white font-semibold text-sm">
                      오늘의 소리
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white">오늘의 알림</h3>
                  <p className="text-text-muted text-xs">새로운 업데이트 3건</p>
                </div>

                {/* Notification Cards */}
                <div className="flex-1 px-4 py-2 space-y-2.5 overflow-hidden">
                  <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                    <div className="flex items-start gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                        <Bell className="w-4 h-4 text-orange-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] px-1.5 py-0.5 bg-orange-500/20 text-orange-400 rounded">
                          긴급
                        </span>
                        <p className="text-white text-xs font-medium mt-1 truncate">
                          새로운 공지사항이 등록되었습니다
                        </p>
                        <p className="text-text-muted text-[10px]">
                          구독 페이지
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                    <div className="flex items-start gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Globe className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-xs font-medium truncate">
                          페이지 업데이트 감지
                        </p>
                        <p className="text-text-muted text-[10px]">뉴스 구독</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                    <div className="flex items-start gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Globe className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-xs font-medium truncate">
                          키워드 알림
                        </p>
                        <p className="text-text-muted text-[10px]">
                          관심 키워드 감지
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Play Button */}
                <div className="p-4">
                  <button className="w-full bg-primary text-black py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2">
                    <Play size={16} fill="black" />
                    모두 재생하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
