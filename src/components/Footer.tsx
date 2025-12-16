import React from 'react';
import { Volume2, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-surface border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                                <Volume2 className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold text-white">오늘의 소리</span>
                        </div>
                        <p className="text-text-secondary max-w-sm leading-relaxed mb-6">
                            시각장애인을 위한 맞춤형 웹 정보 자동 음성 알림 서비스.
                            정보 격차 해소를 통해 모두가 평등하게 정보에 접근할 수 있는 세상을 만듭니다.
                        </p>
                        <p className="text-text-muted text-sm">
                            "들리는 웹의 변화, 들려주는 웹의 소리"
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold text-white mb-6">바로가기</h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="#features" className="text-text-secondary hover:text-white transition-colors">
                                    주요 기능
                                </a>
                            </li>
                            <li>
                                <a href="#solution" className="text-text-secondary hover:text-white transition-colors">
                                    해결책
                                </a>
                            </li>
                            <li>
                                <a href="#download" className="text-text-secondary hover:text-white transition-colors">
                                    다운로드
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-text-muted text-sm">
                        © 2025 오늘의 소리. All rights reserved.
                    </p>
                    <a href="mailto:support@todayssound.com" className="text-text-muted text-sm flex items-center gap-2 hover:text-white transition-colors">
                        <Mail className="w-4 h-4" />
                        <span>support@todayssound.com</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}
