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
        
        // Create bokeh circles
        for (let i = 0; i < 3; i++) {
            const circle = document.createElement("div");
            circle.className = "bokeh-circle";
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
