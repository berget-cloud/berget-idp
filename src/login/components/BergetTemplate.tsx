import type { TemplateProps } from "keycloakify/login";
import { useEffect } from "react";
import "../styles/fonts.css";
import "../styles/berget-theme.css";

export default function BergetTemplate(props: TemplateProps) {
    const {
        displayInfo = false,
        displayMessage = true,
        displayRequiredFields = false,
        displayWide = false,
        showAnotherWayIfPresent = true,
        headerNode,
        showUsernameNode = null,
        infoNode = null,
        kcContext,
        i18n,
        doFetchDefaultThemeResources = true,
        classes,
        children
    } = props;

    const { msg, msgStr } = i18n;

    // Add bokeh effect on component mount
    useEffect(() => {
        // Create bokeh effect
        const bokehContainer = document.createElement("div");
        bokehContainer.className = "bokeh";
        
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
            
            bokehContainer.appendChild(circle);
        }
        
        document.body.appendChild(bokehContainer);
        
        // Cleanup on unmount
        return () => {
            document.body.removeChild(bokehContainer);
        };
    }, []);

    return (
        <div className="login-container">
            <div className="login-content">
                {children}
                
                <div className="login-footer">
                    &copy; {new Date().getFullYear()} Berget - All rights reserved
                </div>
            </div>
        </div>
    );
}
