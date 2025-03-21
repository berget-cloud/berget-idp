import { Button } from "../components/ui/button";

interface PageProps {
    kcContext: any;
    i18n: { msg: (str: string) => string; msgStr: (str: string) => string };
    doUseDefaultCss: boolean;
    Template: React.ComponentType<any>;
    classes: Record<string, string>;
}

export default function LoginVerifyEmail(props: PageProps) {
    const { kcContext, i18n, doUseDefaultCss, Template } = props;

    const { msg } = i18n;
    const { url } = kcContext;

    return (
        <Template {...{ kcContext, i18n, doUseDefaultCss }}>
            <div className="login-split-layout">
                <div className="login-info-section">
                    <h1 className="login-title">Berget AI Console</h1>
                    <p className="login-subtitle">Secure infrastructure management for AI operations</p>

                    <div className="login-features hide-on-mobile">
                        <div className="feature-item">
                            <div className="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon">
                                    <path
                                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />
                                    <path
                                        d="M8 11.4C8 9.15979 9.79086 7.4 12 7.4C14.2091 7.4 16 9.15979 16 11.4C16 13.0126 15.0144 14.4003 13.6 14.9M12 17.5V14.6"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                            <div className="feature-content">
                                <h3>100% EU-baserad</h3>
                                <p>All data stannar inom EU:s gränser med full efterlevnad av EU:s regelverk</p>
                            </div>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon">
                                    <path
                                        d="M16 9V6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6V9"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <rect x="3" y="9" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
                                    <circle cx="12" cy="15" r="2" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M12 17V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                            <div className="feature-content">
                                <h3>GDPR-kompatibel</h3>
                                <p>NIS2-förberedd och EU AI Act-anpassad för maximal regelefterlevnad</p>
                            </div>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon">
                                    <path
                                        d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H18M12 22C6.47715 22 2 17.5228 2 12M12 22V18M2 12C2 6.47715 6.47715 2 12 2M2 12H6M12 2V6"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                            <div className="feature-content">
                                <h3>Hållbar AI</h3>
                                <p>100% fossilfri energi med CO₂-spårning per API-anrop och cirkulär hårdvara</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="login-form-section">
                    <div className="login-form-header">
                        <h2>Verify Email</h2>
                        <p>Check your inbox to complete registration</p>
                    </div>

                    <div className="verify-email-content">
                        <div className="verify-email-icon">
                            <span className="fa fa-envelope-o fa-3x"></span>
                        </div>
                        
                        <p className="verify-email-message">
                            {msg("emailVerifyInstruction1")}
                        </p>
                        
                        <p className="verify-email-message">
                            {msg("emailVerifyInstruction2")}
                        </p>

                        <div className="form-actions">
                            <Button variant="outline" onClick={() => window.location.href = url.loginUrl} fullWidth={true}>
                                {msg("backToLogin")}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Template>
    );
}
