import { Play, Bell, Globe, Smartphone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Circles */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl animate-pulse-slow animate-delay-500" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="text-sm text-text-secondary">
                시각장애인을 위한 맞춤형 서비스
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-slide-up">
              들리는 웹의 변화,
              <br />
              <span className="text-gradient">들려주는 웹의 소리</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-text-secondary max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed animate-slide-up animate-delay-200">
              중요한 정보 변화를 놓치지 마세요.
              <br className="hidden sm:block" />
              오늘의 소리가 실시간으로 알려드립니다.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-slide-up animate-delay-300">
              <a
                href="#download"
                className="btn-primary flex items-center justify-center gap-3"
              >
                <Smartphone size={20} />
                <span>앱 다운로드</span>
              </a>
              <a
                href="#features"
                className="btn-secondary flex items-center justify-center gap-3"
              >
                <Play size={20} />
                <span>기능 알아보기</span>
              </a>
            </div>

            {/* Key Features */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 animate-slide-up animate-delay-400">
              <div className="flex items-center gap-2 text-text-secondary">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-sm">실시간 알림</span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-sm">AI 요약</span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-sm">TTS 재생</span>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative flex justify-center animate-fade-in animate-delay-300">
            {/* Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary/30 rounded-full blur-[100px]" />

            {/* Phone */}
            <div className="relative w-[300px] sm:w-[320px] h-[620px] bg-surface rounded-[3rem] border-[8px] border-surface-lighter shadow-2xl overflow-hidden animate-float">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-surface-lighter rounded-b-2xl z-20" />

              {/* Screen */}
              <div className="w-full h-full bg-surface-light flex flex-col">
                {/* App Header */}
                <div className="pt-12 px-5 pb-5 bg-gradient-to-b from-primary/20 to-transparent">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <Bell className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white font-bold">오늘의 소리</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/10" />
                  </div>
                  <h3 className="text-xl font-bold text-white">오늘의 알림</h3>
                  <p className="text-text-muted text-sm">새로운 업데이트 3건</p>
                </div>

                {/* Notification Cards */}
                <div className="flex-1 px-4 py-4 space-y-3 overflow-hidden">
                  {/* Card 1 */}
                  <div className="glass rounded-2xl p-4 transform hover:scale-[1.02] transition-transform">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0">
                        <Bell className="w-5 h-5 text-red-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs px-2 py-0.5 bg-red-500/20 text-red-400 rounded-full">
                            긴급
                          </span>
                        </div>
                        <p className="text-white text-sm font-medium truncate">
                          새로운 공지사항이 등록되었습니다
                        </p>
                        <p className="text-text-muted text-xs">구독 페이지</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="glass rounded-2xl p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Globe className="w-5 h-5 text-primary-light" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-medium truncate">
                          페이지 업데이트 감지
                        </p>
                        <p className="text-text-muted text-xs">뉴스 구독</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="glass rounded-2xl p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <Globe className="w-5 h-5 text-accent" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-medium truncate">
                          키워드 알림
                        </p>
                        <p className="text-text-muted text-xs">
                          관심 키워드 감지
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Play Button */}
                <div className="p-4 border-t border-white/5">
                  <button className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-primary/20">
                    <Play size={20} fill="white" />
                    <span>모두 재생하기</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 glass p-4 rounded-2xl animate-float animate-delay-200">
              <div className="flex items-center gap-3">
                {/* Sound Wave Animation */}
                <div className="flex items-end gap-1 h-6">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-accent rounded-full wave-bar"
                      style={{ height: `${12 + Math.random() * 12}px` }}
                    />
                  ))}
                </div>
                <span className="text-white text-sm font-medium">
                  TTS 재생 중
                </span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 glass p-4 rounded-2xl animate-float animate-delay-600">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Bell className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <div className="text-xs text-text-muted">실시간 감지</div>
                  <div className="text-white text-sm font-bold">
                    업데이트 발견!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
