import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-white/5 bg-surface">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <img src="/todaySound.svg" alt="오늘의 소리" className="w-6 h-6" />
            <span className="font-medium text-white text-sm">오늘의 소리</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-text-secondary">
            <a href="#features" className="hover:text-white transition-colors">
              기능
            </a>
            <a href="#solution" className="hover:text-white transition-colors">
              해결책
            </a>
            <a href="#download" className="hover:text-white transition-colors">
              다운로드
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            © 2025 오늘의 소리. All rights reserved.
          </p>
          <a
            href="mailto:todaysound.official@gmail.com"
            className="text-text-muted text-sm flex items-center gap-2 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>todaysound.official@gmail.com</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
