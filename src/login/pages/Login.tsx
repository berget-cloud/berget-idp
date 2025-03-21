import { useState } from "react";
import type { PageProps } from "keycloakify/login";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Separator } from "../components/ui/separator";
import { GithubIcon, KeyIcon } from "lucide-react";

export default function Login(props: PageProps) {
    const { 
        kcContext, 
        i18n, 
        doUseDefaultCss, 
        Template 
    } = props;

    const { msg, msgStr } = i18n;
    const { realm, url, usernameEditDisabled, login, auth, registrationDisabled } = kcContext;

    const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);

    return (
        <Template
            {...{ kcContext, i18n, doUseDefaultCss }}
            displayInfo={false}
            displayMessage={true}
            displayWide={false}
            headerNode={null}
        >
            <div className="login-split-layout">
                <div className="login-info-section">
                    <h1 className="login-title">Berget AI Console</h1>
                    <p className="login-subtitle">Secure infrastructure management for AI operations</p>
                    
                    {/* Hide features on smaller screens */}
                    <div className="login-features hide-on-mobile">
                        <div className="feature-item">
                            <div className="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon">
                                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M8 11.4C8 9.15979 9.79086 7.4 12 7.4C14.2091 7.4 16 9.15979 16 11.4C16 13.0126 15.0144 14.4003 13.6 14.9M12 17.5V14.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                            <div className="feature-content">
                                <h3>Enterprise Security</h3>
                                <p>SOC2 certified infrastructure with end-to-end encryption</p>
                            </div>
                        </div>
                        
                        <div className="feature-item">
                            <div className="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon">
                                    <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="feature-content">
                                <h3>High Performance</h3>
                                <p>Low-latency global infrastructure for real-time AI operations</p>
                            </div>
                        </div>
                        
                        <div className="feature-item">
                            <div className="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon">
                                    <path d="M16 9V6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <rect x="3" y="9" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
                                    <circle cx="12" cy="15" r="2" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M12 17V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                            <div className="feature-content">
                                <h3>Access Control</h3>
                                <p>Fine-grained permissions and role-based access control</p>
                            </div>
                        </div>
                        
                        <div className="feature-item">
                            <div className="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon">
                                    <path d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H18M12 22C6.47715 22 2 17.5228 2 12M12 22V18M2 12C2 6.47715 6.47715 2 12 2M2 12H6M12 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                            <div className="feature-content">
                                <h3>Cloud Native</h3>
                                <p>Seamless integration with major cloud providers</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="login-form-section">
                    <div className="login-form-header">
                        <h2>Sign In</h2>
                        <p>Welcome back! Sign in to continue</p>
                    </div>

                    {kcContext.message !== undefined && (
                        <div className={`alert ${kcContext.message.type === "error" ? "alert-error" : 
                                        kcContext.message.type === "success" ? "alert-success" : 
                                        kcContext.message.type === "warning" ? "alert-warning" : "alert-info"}`}>
                            <span className={`status-indicator ${kcContext.message.type}`}></span>
                            {kcContext.message.summary}
                        </div>
                    )}

                    <div className="social-login">
                        <Button variant="outline" fullWidth={true} className="social-button github-button">
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            Continue with GitHub
                        </Button>
                    </div>

                    <div className="separator-container">
                        <Separator className="separator-line" />
                        <span className="separator-text">or</span>
                        <Separator className="separator-line" />
                    </div>

                    <form id="kc-form-login" onSubmit={e => {
                        e.preventDefault();
                        setIsLoginButtonDisabled(true);
                        const formElement = e.target as HTMLFormElement;
                        formElement.submit();
                    }} action={url.loginAction} method="post" className="login-form simple-form">
                        <div className="form-group">
                            <label htmlFor="username" className="form-label">
                                {!realm.loginWithEmailAllowed
                                    ? msg("username")
                                    : !realm.registrationEmailAsUsername
                                        ? msg("usernameOrEmail")
                                        : msg("email")}
                            </label>

                            <Input
                                tabIndex={1}
                                id="username"
                                name="username"
                                defaultValue={login.username ?? ""}
                                autoFocus={true}
                                autoComplete="off"
                                disabled={usernameEditDisabled}
                            />
                        </div>

                        <div className="form-group">
                            <div className="password-label-row">
                                <label htmlFor="password" className="form-label">
                                    {msg("password")}
                                </label>
                            </div>
                            <Input
                                tabIndex={2}
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="off"
                            />
                        </div>

                        {realm.rememberMe && (
                            <div className="remember-me">
                                <label className="checkbox-container">
                                    <input
                                        tabIndex={3}
                                        id="rememberMe"
                                        name="rememberMe"
                                        type="checkbox"
                                        defaultChecked={!!login.rememberMe}
                                    />
                                    <span className="checkbox-text">{msg("rememberMe")}</span>
                                </label>
                            </div>
                        )}

                        <input
                            type="hidden"
                            id="id-hidden-input"
                            name="credentialId"
                            {...(auth?.selectedCredential !== undefined
                                ? {
                                    value: auth.selectedCredential
                                }
                                : {})}
                        />

                        <div className="form-actions">
                            <Button 
                                type="submit"
                                disabled={isLoginButtonDisabled}
                                fullWidth={true}
                                className="sign-in-button"
                            >
                                {msgStr("doLogIn")}
                            </Button>
                        </div>
                    </form>

                    <div className="alternative-login">
                        <Button variant="outline" fullWidth={true} className="alternative-button passkey-button">
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
                            Sign in with Passkey
                        </Button>
                    </div>

                    {realm.password && realm.registrationAllowed && !registrationDisabled && (
                        <div className="signup-link">
                            <span>Don't have an account? <a href={url.registrationUrl}>Sign up</a></span>
                        </div>
                    )}
                </div>
            </div>
        </Template>
    );
}
