import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import {
  AlertTriangle,
  Clock,
  Eye,
  Lightbulb,
  CheckCircle,
  Globe,
  Bell,
  Volume2,
} from "lucide-react";

// Problem Section Component
function ProblemSection() {
  const problems = [
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "주요 정보 확인의 어려움",
      description: "빠르게 변화하는 시각 중심의 웹 정보에 대한 탐색의 어려움",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "시간 소모적 탐색",
      description: "필요한 정보를 선별하는 과정에서 높은 피로도 발생",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "정보 격차 발생",
      description: "중요 정보 및 공지사항을 적시에 확인하지 못할 수 있음",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-surface relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span className="text-sm text-red-400">문제 인식</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            시각장애인의 웹 접근,
            <br />
            <span className="text-red-400">과연 쉬울까요?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-3xl bg-surface-light/30 border border-white/5 hover:border-red-500/20 transition-colors"
            >
              <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-400 mx-auto mb-6">
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {problem.title}
              </h3>
              <p className="text-text-secondary">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Solution Section Component
function SolutionSection() {
  const solutions = [
    {
      number: "01",
      title: "맞춤형 웹 모니터링",
      description: "사용자가 구독한 웹페이지의 업데이트를 자동 감지",
      color: "from-primary to-blue-500",
    },
    {
      number: "02",
      title: "필요한 정보만 알림",
      description:
        "원하는 정보만 원하는 속도로 TTS 재생해 세상의 변화를 누구보다 빠르게",
      color: "from-accent to-orange-500",
    },
    {
      number: "03",
      title: "사용하기 편한 앱",
      description:
        "KWCAG, 전자정부 UI/UX 가이드라인을 준수한 깔끔한 디자인과 핵심 기능만",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section
      id="solution"
      className="py-24 lg:py-32 hero-gradient relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Lightbulb className="w-4 h-4 text-accent" />
            <span className="text-sm text-text-secondary">솔루션</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            오늘의 소리가 제공하는
            <br />
            <span className="text-gradient">해결책</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            정보 접근성 향상 및 정보 독립적 환경을 제공합니다
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="card-highlight p-8 group hover:-translate-y-2 transition-all duration-500"
            >
              <div className={`text-5xl font-bold text-gradient mb-6`}>
                {solution.number}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {solution.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorksSection() {
  const steps = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "웹페이지 등록",
      description: "모니터링하고 싶은 웹페이지 URL을 등록하세요",
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "변경사항 감지",
      description: "서버에서 주기적으로 웹페이지 변경을 확인합니다",
    },
    {
      icon: <Volume2 className="w-6 h-6" />,
      title: "음성으로 알림",
      description: "변경된 내용을 AI가 요약하여 TTS로 읽어드립니다",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-surface-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            어떻게 <span className="text-gradient">작동하나요?</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            간단한 3단계로 웹의 변화를 소리로 받아보세요
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-primary/30">
                  {step.icon}
                </div>
                <div className="text-sm text-primary-light font-bold mb-2">
                  STEP {index + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Download CTA Section Component
function DownloadSection() {
  return (
    <section id="download" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-surface" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/20 rounded-full blur-[100px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          지금 바로
          <br />
          <span className="text-accent">오늘의 소리</span>를 경험하세요
        </h2>
        <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
          더 이상 중요한 정보를 놓치지 마세요. 웹의 변화를 귀로 들을 수
          있습니다.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          {/* App Store Button */}
          <button className="flex items-center justify-center gap-3 bg-white text-surface px-8 py-4 rounded-2xl hover:bg-white/90 transition-all hover:scale-105 shadow-xl">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="text-left">
              <div className="text-xs opacity-60">Download on the</div>
              <div className="text-lg font-bold leading-none">App Store</div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <Features />
        <HowItWorksSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
