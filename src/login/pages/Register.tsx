import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

interface PageProps {
    kcContext: any;
    i18n: { msg: (str: string) => string; msgStr: (str: string) => string };
    doUseDefaultCss: boolean;
    Template: React.ComponentType<any>;
    classes: Record<string, string>;
}

export default function Register(props: PageProps) {
    const { kcContext, i18n, doUseDefaultCss, Template } = props;

    const { msg, msgStr } = i18n;
    const { url, messagesPerField, register, realm, passwordPolicies } = kcContext;

    const [isRegisterButtonDisabled, setIsRegisterButtonDisabled] = useState(false);

    return (
        <Template {...{ kcContext, i18n, doUseDefaultCss }} displayInfo={false} displayMessage={true} displayWide={false} headerNode={null}>
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
                        <h2>Create Account</h2>
                        <p>Sign up to get started with Berget AI Console</p>
                    </div>

                    {kcContext.message !== undefined && (
                        <div
                            className={`alert ${
                                kcContext.message.type === "error"
                                    ? "alert-error"
                                    : kcContext.message.type === "success"
                                      ? "alert-success"
                                      : kcContext.message.type === "warning"
                                        ? "alert-warning"
                                        : "alert-info"
                            }`}
                        >
                            <span className={`status-indicator ${kcContext.message.type}`}></span>
                            {kcContext.message.summary}
                        </div>
                    )}

                    <form
                        id="kc-register-form"
                        onSubmit={e => {
                            e.preventDefault();
                            setIsRegisterButtonDisabled(true);
                            const formElement = e.target as HTMLFormElement;
                            formElement.submit();
                        }}
                        action={url.registrationAction}
                        method="post"
                        className="login-form"
                    >
                        <div className="form-group">
                            <label htmlFor="firstName" className="form-label">
                                {msg("firstName")}
                            </label>
                            <Input
                                tabIndex={1}
                                id="firstName"
                                name="firstName"
                                defaultValue={register.formData.firstName ?? ""}
                                autoComplete="given-name"
                                aria-invalid={messagesPerField.existsError("firstName")}
                            />
                            {messagesPerField.existsError("firstName") && (
                                <div className="error-message">{messagesPerField.get("firstName")}</div>
                            )}
                        </div>

                        <div className="form-group">
                            <label htmlFor="lastName" className="form-label">
                                {msg("lastName")}
                            </label>
                            <Input
                                tabIndex={2}
                                id="lastName"
                                name="lastName"
                                defaultValue={register.formData.lastName ?? ""}
                                autoComplete="family-name"
                                aria-invalid={messagesPerField.existsError("lastName")}
                            />
                            {messagesPerField.existsError("lastName") && (
                                <div className="error-message">{messagesPerField.get("lastName")}</div>
                            )}
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" className="form-label">
                                {msg("email")}
                            </label>
                            <Input
                                tabIndex={3}
                                id="email"
                                name="email"
                                defaultValue={register.formData.email ?? ""}
                                type="email"
                                autoComplete="email"
                                aria-invalid={messagesPerField.existsError("email")}
                            />
                            {messagesPerField.existsError("email") && (
                                <div className="error-message">{messagesPerField.get("email")}</div>
                            )}
                        </div>

                        {!realm.registrationEmailAsUsername && (
                            <div className="form-group">
                                <label htmlFor="username" className="form-label">
                                    {msg("username")}
                                </label>
                                <Input
                                    tabIndex={4}
                                    id="username"
                                    name="username"
                                    defaultValue={register.formData.username ?? ""}
                                    autoComplete="username"
                                    aria-invalid={messagesPerField.existsError("username")}
                                />
                                {messagesPerField.existsError("username") && (
                                    <div className="error-message">{messagesPerField.get("username")}</div>
                                )}
                            </div>
                        )}

                        <div className="form-group">
                            <label htmlFor="password" className="form-label">
                                {msg("password")}
                            </label>
                            <Input
                                tabIndex={5}
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                aria-invalid={messagesPerField.existsError("password", "password-confirm")}
                            />
                            {messagesPerField.existsError("password") && (
                                <div className="error-message">{messagesPerField.get("password")}</div>
                            )}
                        </div>

                        <div className="form-group">
                            <label htmlFor="password-confirm" className="form-label">
                                {msg("passwordConfirm")}
                            </label>
                            <Input
                                tabIndex={6}
                                id="password-confirm"
                                name="password-confirm"
                                type="password"
                                autoComplete="new-password"
                                aria-invalid={messagesPerField.existsError("password-confirm")}
                            />
                            {messagesPerField.existsError("password-confirm") && (
                                <div className="error-message">{messagesPerField.get("password-confirm")}</div>
                            )}
                        </div>

                        {realm.recaptchaRequired && (
                            <div className="form-group">
                                <div className="g-recaptcha" data-size="compact" data-sitekey={realm.recaptchaSiteKey}></div>
                            </div>
                        )}

                        <div className="form-actions">
                            <Button type="submit" disabled={isRegisterButtonDisabled} fullWidth={true} size="lg">
                                {msgStr("doRegister")}
                            </Button>
                        </div>
                    </form>

                    <div className="signup-link">
                        <span>
                            Already have an account? <a href={url.loginUrl}>{msg("backToLogin")}</a>
                        </span>
                    </div>
                </div>
            </div>
        </Template>
    );
}
