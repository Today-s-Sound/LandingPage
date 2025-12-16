import { Globe, Bell, Eye, Filter, Zap, ArrowRight } from "lucide-react";

const features = [
  {
    icon: <Globe className="w-7 h-7" />,
    title: "웹페이지 자동 모니터링",
    description:
      "사용자가 지정한 웹페이지의 변경사항을 자동으로 감지하고 추적합니다.",
    color: "from-blue-500 to-cyan-500",
    delay: "0",
  },
  {
    icon: <Bell className="w-7 h-7" />,
    title: "실시간 푸시 알림",
    description:
      "FCM을 이용해 변화가 감지되면 즉시 푸시 알림으로 알려드립니다.",
    color: "from-primary to-purple-500",
    delay: "100",
  },
  {
    icon: <Eye className="w-7 h-7" />,
    title: "고대비 접근성 UI",
    description:
      "KWCAG 가이드라인을 준수한 고대비 디자인으로 누구나 쉽게 사용할 수 있습니다.",
    color: "from-emerald-500 to-teal-500",
    delay: "300",
  },
  {
    icon: <Filter className="w-7 h-7" />,
    title: "키워드 필터링",
    description:
      "관심 키워드를 설정하여 필요한 정보만 선별하여 받아볼 수 있습니다.",
    color: "from-pink-500 to-rose-500",
    delay: "400",
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "긴급/일반 알림 구분",
    description: "중요도에 따른 알림 구분으로 긴급한 정보를 놓치지 않습니다.",
    color: "from-yellow-500 to-amber-500",
    delay: "500",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 lg:py-32 feature-gradient relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm text-text-secondary">핵심 기능</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            웹의 변화를 소리로
            <br />
            <span className="text-gradient">가장 빠르게 전달합니다</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            시각적 제한에서 벗어나 웹 정보에 쉽고 빠르게 접근하세요. 오늘의
            소리가 정보 독립성을 제공합니다.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card p-8 group hover:-translate-y-2 transition-all duration-500"
              style={{ animationDelay: `${feature.delay}ms` }}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                {feature.title}
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-text-muted" />
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
