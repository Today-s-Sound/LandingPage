import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import {
  AlertCircle,
  Clock,
  Eye,
  Lightbulb,
  Globe,
  Bell,
  Volume2,
} from "lucide-react";

// Problem Section Component
function ProblemSection() {
  const problems = [
    {
      icon: <AlertCircle className="w-6 h-6" />,
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
    <section className="py-20 bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium mb-3">문제 인식</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            시각장애인의 웹 접근, 과연 쉬울까요?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-surface-light border border-white/5"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-text-secondary mx-auto mb-4">
                {problem.icon}
              </div>
              <h3 className="font-semibold text-white mb-2">
                {problem.title}
              </h3>
              <p className="text-sm text-text-secondary">{problem.description}</p>
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
    },
    {
      number: "02",
      title: "필요한 정보만 알림",
      description: "원하는 정보만 원하는 속도로 TTS 재생",
    },
    {
      number: "03",
      title: "사용하기 편한 앱",
      description: "접근성 가이드라인을 준수한 깔끔한 디자인",
    },
  ];

  return (
    <section id="solution" className="py-20 bg-surface-light">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium mb-3">솔루션</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            오늘의 소리가 제공하는 해결책
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-surface border border-primary/20"
            >
              <div className="text-3xl font-bold text-primary mb-4">
                {solution.number}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {solution.title}
              </h3>
              <p className="text-sm text-text-secondary">
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
      icon: <Globe className="w-5 h-5" />,
      title: "웹페이지 등록",
      description: "모니터링하고 싶은 웹페이지 URL을 등록하세요",
    },
    {
      icon: <Bell className="w-5 h-5" />,
      title: "변경사항 감지",
      description: "서버에서 주기적으로 웹페이지 변경을 확인합니다",
    },
    {
      icon: <Volume2 className="w-5 h-5" />,
      title: "음성으로 알림",
      description: "변경된 내용을 AI가 요약하여 TTS로 읽어드립니다",
    },
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            어떻게 작동하나요?
          </h2>
          <p className="text-text-secondary mt-2">
            간단한 3단계로 웹의 변화를 소리로 받아보세요
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-black mx-auto mb-4">
                {step.icon}
              </div>
              <p className="text-xs text-primary font-medium mb-1">
                STEP {index + 1}
              </p>
              <h3 className="font-semibold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-text-secondary">{step.description}</p>
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
    <section id="download" className="py-20 bg-primary">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
          지금 바로 시작하세요
        </h2>
        <p className="text-black/70 mb-8">
          더 이상 중요한 정보를 놓치지 마세요.
        </p>

        <button className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-black/80 transition-colors">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          App Store에서 다운로드
        </button>
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
