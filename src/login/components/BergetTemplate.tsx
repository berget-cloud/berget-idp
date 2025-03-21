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
            <div className="card-container">
                <div className="logo-container">
                    <h1>{msg("loginTitle")}</h1>
                </div>

                {displayMessage && kcContext.message !== undefined && (
                    <div className={`alert ${kcContext.message.type === "error" ? "alert-error" : 
                                           kcContext.message.type === "success" ? "alert-success" : 
                                           kcContext.message.type === "warning" ? "alert-warning" : "alert-info"}`}>
                        <span className={`status-indicator ${kcContext.message.type}`}></span>
                        {kcContext.message.summary}
                    </div>
                )}

                {children}

                {displayInfo && (
                    <div className="form-group">
                        <div className={classes?.kcInfoArea}>
                            {infoNode}
                        </div>
                    </div>
                )}
                
                <div className="login-footer">
                    &copy; {new Date().getFullYear()} Berget - All rights reserved
                </div>
            </div>
        </div>
    );
}
