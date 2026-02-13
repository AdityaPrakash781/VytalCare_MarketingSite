export function Footer() {
    return (
        <footer className="py-12 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 overflow-hidden flex items-center scale-105 transition-transform duration-300">
                        <img
                            src="/favicon.png"
                            alt="ProVytal logo"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <span className="font-heading font-bold text-lg text-slate-900 dark:text-white">ProVytal</span>
                </div>
                <div className="text-sm text-slate-500">
                    © 2026 ProVytal Health Inc. All rights reserved.
                </div>
                <div className="flex gap-6 text-sm text-slate-500">
                    <a href="#privacy" className="hover:text-slate-900 dark:hover:text-white">
                        Privacy
                    </a>
                    <a href="#terms" className="hover:text-slate-900 dark:hover:text-white">
                        Terms
                    </a>
                    <a
                        href="https://twitter.com/ProVytal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-slate-900 dark:hover:text-white"
                    >
                        Twitter
                    </a>
                </div>
            </div>
        </footer>
    );
}
