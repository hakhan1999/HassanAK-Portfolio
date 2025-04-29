import { useEffect } from "react";
import { gsap } from "gsap";

const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function scrambleText(element, text, duration = 1.2) {
    let frame = 0;
    const totalFrames = Math.floor(duration * 60); // 60fps

    const animate = () => {
        frame++;
        const progress = frame / totalFrames;

        const scrambled = text.split("").map((char, i) => {
            if (char === " ") return " ";
            if (i < progress * text.length) return char;
            return chars[Math.floor(Math.random() * chars.length)];
        }).join("");

        element.textContent = scrambled;

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            element.textContent = text;
        }
    };

    animate();
}

export function useHackerText(selector = "h1, h2 , h5, h6, .clock-wrapper span, .number-card .number , .services-card .wrapper h3 , .marquee-sec h3", triggerOnce = true) {
    useEffect(() => {
        const elements = document.querySelectorAll(selector);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const original = el.dataset.value || el.textContent;
                    scrambleText(el, original);
                    if (triggerOnce) observer.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        elements.forEach(el => {
            el.dataset.value = el.textContent; // Save original
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, [selector, triggerOnce]);
}
