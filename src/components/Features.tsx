import { Globe, Bell, Eye, Filter, Zap } from "lucide-react";

const features = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "웹페이지 자동 모니터링",
    description:
      "사용자가 지정한 웹페이지의 변경사항을 자동으로 감지하고 추적합니다.",
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: "실시간 푸시 알림",
    description:
      "FCM을 이용해 변화가 감지되면 즉시 푸시 알림으로 알려드립니다.",
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "고대비 접근성 UI",
    description:
      "KWCAG 가이드라인을 준수한 고대비 디자인으로 누구나 쉽게 사용할 수 있습니다.",
  },
  {
    icon: <Filter className="w-6 h-6" />,
    title: "키워드 필터링",
    description:
      "관심 키워드를 설정하여 필요한 정보만 선별하여 받아볼 수 있습니다.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "긴급/일반 알림 구분",
    description: "중요도에 따른 알림 구분으로 긴급한 정보를 놓치지 않습니다.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-surface-light">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-white text-center mb-3">
          주요 기능
        </h2>
        <p className="text-text-secondary text-center mb-12 text-sm">
          오늘의 소리가 제공하는 핵심 기능들입니다.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-surface border border-white/5 hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
