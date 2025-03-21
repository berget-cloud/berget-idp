<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex, nofollow">
    
    <title>Berget Identity Provider</title>
    
    <!-- Load PatternFly CSS from Keycloak resources -->
    <link rel="stylesheet" href="${url.resourcesCommonPath}/node_modules/patternfly/dist/css/patternfly.min.css">
    <link rel="stylesheet" href="${url.resourcesCommonPath}/node_modules/patternfly/dist/css/patternfly-additions.min.css">
    
    <!-- Load theme-specific styles -->
    <link rel="stylesheet" href="${url.resourcesPath}/css/styles.css">
    
    <style>
        body {
            background-color: #f5f5f5;
            font-family: 'DM Sans Variable', sans-serif;
            font-size: 15px;
        }
        .login-pf-page {
            padding-top: 40px;
        }
        .card-pf {
            max-width: 500px;
            margin: 0 auto;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            padding: 20px;
        }
        #kc-header {
            margin-bottom: 20px;
            text-align: center;
        }
        #kc-header-wrapper {
            font-size: 24px;
            font-family: 'Ovo', serif;
            font-weight: 100;
            letter-spacing: -0.03em;
        }
        .form-group {
            margin-bottom: 20px;
        }
        .control-label {
            font-weight: 500;
            margin-bottom: 8px;
            display: block;
        }
        .form-control {
            height: 40px;
            border-radius: 4px;
        }
        .btn-primary {
            background-color: #333;
            border-color: #333;
            color: white;
            font-weight: 500;
            height: 40px;
            border-radius: 4px;
        }
        .btn-primary:hover {
            background-color: #555;
            border-color: #555;
        }
        .checkbox label {
            display: flex;
            align-items: center;
        }
        .checkbox input {
            margin-right: 8px;
        }
        #kc-form-options {
            margin-bottom: 10px;
        }
        #kc-registration {
            margin-top: 20px;
            text-align: center;
        }
        .alert {
            border-radius: 4px;
            padding: 10px;
            margin-bottom: 20px;
        }
        .alert-error {
            background-color: #f8d7da;
            border-color: #f5c6cb;
            color: #721c24;
        }
        #kc-locale {
            text-align: right;
            margin-bottom: 10px;
        }
        #kc-social-providers {
            margin-top: 20px;
        }
        #kc-social-providers ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        #kc-social-providers a {
            display: block;
            padding: 10px;
            margin-bottom: 10px;
            background-color: #f8f9fa;
            border-radius: 4px;
            text-decoration: none;
            color: #333;
        }
        #kc-social-providers a:hover {
            background-color: #e9ecef;
        }
    </style>
</head>

<body>
    <div class="login-pf-page">
        <div id="kc-header">
            <div id="kc-header-wrapper">
                <#if realm.displayNameHtml??>
                    ${realm.displayNameHtml?no_esc}
                <#elseif realm.displayName??>
                    ${realm.displayName}
                <#else>
                    ${realm.name}
                </#if>
            </div>
        </div>

        <div class="card-pf">
            <#if realm.internationalizationEnabled && locale.supported?size gt 1>
                <div id="kc-locale">
                    <div id="kc-locale-wrapper">
                        <div class="kc-dropdown">
                            <a href="#" id="kc-current-locale-link">${locale.current}</a>
                            <ul>
                                <#list locale.supported as l>
                                    <li><a href="${l.url}">${l.label}</a></li>
                                </#list>
                            </ul>
                        </div>
                    </div>
                </div>
            </#if>

            <div class="login-form">
                <#if message?has_content && (message.type != 'warning' || !isAppInitiatedAction??)>
                    <div class="alert alert-${message.type}">
                        <span class="kc-feedback-text">${kcSanitize(message.summary)?no_esc}</span>
                    </div>
                </#if>

                <h2>${msg("loginAccountTitle")}</h2>

                <#if realm.password>
                    <form id="kc-form-login" action="${url.loginAction}" method="post">
                        <#if !usernameHidden??>
                            <div class="form-group">
                                <label for="username" class="control-label">
                                    <#if !realm.loginWithEmailAllowed>
                                        ${msg("username")}
                                    <#elseif !realm.registrationEmailAsUsername>
                                        ${msg("usernameOrEmail")}
                                    <#else>
                                        ${msg("email")}
                                    </#if>
                                </label>

                                <input tabindex="1" id="username" class="form-control" name="username" 
                                       value="${(login.username!'')}" type="text" autofocus autocomplete="off"
                                       aria-invalid="<#if messagesPerField.existsError('username','password')>true</#if>" />

                                <#if messagesPerField.existsError('username','password')>
                                    <span id="input-error" class="error-message" aria-live="polite">
                                        ${kcSanitize(messagesPerField.getFirstError('username','password'))?no_esc}
                                    </span>
                                </#if>
                            </div>
                        </#if>

                        <div class="form-group">
                            <label for="password" class="control-label">${msg("password")}</label>

                            <input tabindex="2" id="password" class="form-control" name="password" type="password" 
                                   autocomplete="off" aria-invalid="<#if messagesPerField.existsError('username','password')>true</#if>" />

                            <#if usernameHidden?? && messagesPerField.existsError('username','password')>
                                <span id="input-error" class="error-message" aria-live="polite">
                                    ${kcSanitize(messagesPerField.getFirstError('username','password'))?no_esc}
                                </span>
                            </#if>
                        </div>

                        <div class="form-group form-options">
                            <div id="kc-form-options">
                                <#if realm.rememberMe && !usernameHidden??>
                                    <div class="checkbox">
                                        <label>
                                            <#if login.rememberMe??>
                                                <input tabindex="3" id="rememberMe" name="rememberMe" type="checkbox" checked> ${msg("rememberMe")}
                                            <#else>
                                                <input tabindex="3" id="rememberMe" name="rememberMe" type="checkbox"> ${msg("rememberMe")}
                                            </#if>
                                        </label>
                                    </div>
                                </#if>
                            </div>
                            <div class="form-options-wrapper">
                                <#if realm.resetPasswordAllowed>
                                    <span><a tabindex="5" href="${url.loginResetCredentialsUrl}">${msg("doForgotPassword")}</a></span>
                                </#if>
                            </div>
                        </div>

                        <div class="form-group">
                            <input type="hidden" id="id-hidden-input" name="credentialId" <#if auth.selectedCredential?has_content>value="${auth.selectedCredential}"</#if>/>
                            <input tabindex="4" class="btn btn-primary btn-block btn-lg" name="login" id="kc-login" type="submit" value="${msg("doLogIn")}"/>
                        </div>
                    </form>
                </#if>

                <#if realm.password && realm.registrationAllowed && !registrationDisabled??>
                    <div id="kc-registration">
                        <span>${msg("noAccount")} <a tabindex="6" href="${url.registrationUrl}">${msg("doRegister")}</a></span>
                    </div>
                </#if>

                <#if realm.password && social.providers??>
                    <div id="kc-social-providers">
                        <hr/>
                        <h4>${msg("identity-provider-login-label")}</h4>

                        <ul>
                            <#list social.providers as p>
                                <li>
                                    <a id="social-${p.alias}" href="${p.loginUrl}">
                                        <#if p.iconClasses?has_content>
                                            <i class="${p.iconClasses!}" aria-hidden="true"></i>
                                            <span>${p.displayName!}</span>
                                        <#else>
                                            <span>${p.displayName!}</span>
                                        </#if>
                                    </a>
                                </li>
                            </#list>
                        </ul>
                    </div>
                </#if>
            </div>
        </div>
    </div>
</body>
</html>
