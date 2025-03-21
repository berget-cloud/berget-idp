import { useEffect, useRef } from "react";
import "../../../styles/globals.css";
import "../styles/fonts.css";
import "../styles/berget-theme.css";
import "../styles/fontawesome.css";

export default function BergetTemplate(props: {
    children: React.ReactNode;
    i18n: { msg: (str: string) => string; msgStr: (str: string) => string };
}) {
    const { children, i18n } = props;
    const bokehRef = useRef<HTMLDivElement>(null);

    // Add bokeh effect on component mount
    useEffect(() => {
        if (!bokehRef.current) return;

        // Clear any existing bokeh circles
        bokehRef.current.innerHTML = "";

        // Create bokeh circles with different colors and sizes
        const colors = ["#4361ee", "#22c55e", "#7209b7", "#3b82f6"];
        const sizes = [300, 250, 200, 350, 180];

        for (let i = 0; i < 5; i++) {
            const circle = document.createElement("div");
            circle.className = "bokeh-circle";

            // Set random positions
            const top = Math.random() * 100;
            const left = Math.random() * 100;

            // Set random color and size
            const color = colors[Math.floor(Math.random() * colors.length)];
            const size = sizes[Math.floor(Math.random() * sizes.length)];

            circle.style.top = `${top}%`;
            circle.style.left = `${left}%`;
            circle.style.width = `${size}px`;
            circle.style.height = `${size}px`;
            circle.style.setProperty("--color", color);
            circle.style.animationDelay = `${Math.random() * -20}s`;

            bokehRef.current.appendChild(circle);
        }
    }, []);

    return (
        <div className="login-container">
            <div ref={bokehRef} className="bokeh"></div>
            <div className="login-content">
                {children}

                <div className="login-footer">
                    &copy; {new Date().getFullYear()} Berget AI. All rights reserved.
                </div>
            </div>
        </div>
    );
}
