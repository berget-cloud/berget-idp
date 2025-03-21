import { useState } from "react";
import type { PageProps } from "keycloakify/login";

export default function Login(props: PageProps) {
    const { 
        kcContext, 
        i18n, 
        doUseDefaultCss, 
        Template, 
        classes 
    } = props;

    const { msg, msgStr } = i18n;
    const { realm, url, usernameEditDisabled, login, auth, registrationDisabled } = kcContext;

    const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);

    return (
        <Template
            {...{ kcContext, i18n, doUseDefaultCss, classes }}
            headerNode={msg("loginAccountTitle")}
            displayInfo={realm.password && realm.registrationAllowed && !registrationDisabled}
            displayWide={false}
            infoNode={
                <div id="kc-registration">
                    <span>{msg("noAccount")} <a tabIndex={6} href={url.registrationUrl}>{msg("doRegister")}</a></span>
                </div>
            }
        >
            <div id="kc-form">
                <div id="kc-form-wrapper">
                    <form id="kc-form-login" onSubmit={e => {
                        e.preventDefault();
                        setIsLoginButtonDisabled(true);
                        const formElement = e.target as HTMLFormElement;
                        formElement.submit();
                    }} action={url.loginAction} method="post">
                        <div className={classes?.kcFormGroupClass}>
                            <label htmlFor="username" className={classes?.kcLabelClass}>
                                {!realm.loginWithEmailAllowed
                                    ? msg("username")
                                    : !realm.registrationEmailAsUsername
                                        ? msg("usernameOrEmail")
                                        : msg("email")}
                            </label>

                            <input
                                tabIndex={1}
                                id="username"
                                className={classes?.kcInputClass}
                                name="username"
                                defaultValue={login.username ?? ""}
                                type="text"
                                autoFocus={true}
                                autoComplete="off"
                                disabled={usernameEditDisabled}
                            />
                        </div>

                        <div className={classes?.kcFormGroupClass}>
                            <label htmlFor="password" className={classes?.kcLabelClass}>
                                {msg("password")}
                            </label>
                            <input
                                tabIndex={2}
                                id="password"
                                className={classes?.kcInputClass}
                                name="password"
                                type="password"
                                autoComplete="off"
                            />
                        </div>

                        <div className={`${classes?.kcFormGroupClass} ${classes?.kcFormSettingClass}`}>
                            <div id="kc-form-options">
                                {realm.rememberMe && (
                                    <div className="checkbox">
                                        <label>
                                            <input
                                                tabIndex={3}
                                                id="rememberMe"
                                                name="rememberMe"
                                                type="checkbox"
                                                defaultChecked={!!login.rememberMe}
                                            />
                                            {msg("rememberMe")}
                                        </label>
                                    </div>
                                )}
                            </div>
                            <div className={classes?.kcFormOptionsWrapperClass}>
                                {realm.resetPasswordAllowed && (
                                    <span>
                                        <a tabIndex={5} href={url.loginResetCredentialsUrl}>
                                            {msg("doForgotPassword")}
                                        </a>
                                    </span>
                                )}
                            </div>
                        </div>

                        <div id="kc-form-buttons" className={classes?.kcFormButtonsClass}>
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
                            <input
                                tabIndex={4}
                                className={`${classes?.kcButtonClass} ${classes?.kcButtonPrimaryClass} ${classes?.kcButtonBlockClass} ${classes?.kcButtonLargeClass}`}
                                name="login"
                                id="kc-login"
                                type="submit"
                                value={msgStr("doLogIn")}
                                disabled={isLoginButtonDisabled}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </Template>
    );
}
