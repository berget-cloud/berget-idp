import { Suspense, lazy } from "react";
import type { ClassKey } from "keycloakify/login";
import type { KcContext } from "./KcContext";
import { useI18n } from "./i18n";
import DefaultPage from "keycloakify/login/DefaultPage";
import BergetTemplate from "./components/BergetTemplate";
import Login from "./pages/Login";
import type { I18n } from "./i18n";

const UserProfileFormFields = lazy(
    () => import("keycloakify/login/UserProfileFormFields")
);

const doMakeUserConfirmPassword = true;

export default function KcPage(props: { kcContext: KcContext }) {
    const { kcContext } = props;

    const { i18n } = useI18n({ kcContext });
    
    // Create a compatible i18n object for our components
    const compatI18n = {
        msg: (str: string) => i18n.msg(str as any),
        msgStr: (str: string) => i18n.msgStr(str as any)
    };

    return (
        <Suspense>
            {(() => {
                switch (kcContext.pageId) {
                    case "login.ftl":
                        return (
                            <Login
                                kcContext={kcContext}
                                i18n={compatI18n}
                                classes={classes}
                                Template={BergetTemplate}
                                doUseDefaultCss={false}
                            />
                        );
                    default:
                        return (
                            <DefaultPage
                                kcContext={kcContext}
                                i18n={compatI18n}
                                classes={classes}
                                Template={BergetTemplate}
                                doUseDefaultCss={false}
                                UserProfileFormFields={UserProfileFormFields}
                                doMakeUserConfirmPassword={doMakeUserConfirmPassword}
                            />
                        );
                }
            })()}
        </Suspense>
    );
}

// Custom classes for Keycloak elements
export const classes = {
    kcLoginClass: "login-form",
    kcFormGroupClass: "form-group",
    kcLabelClass: "form-label",
    kcInputClass: "form-input",
    kcButtonClass: "button-primary",
    kcButtonPrimaryClass: "button-primary",
    kcButtonDefaultClass: "button-secondary",
    kcFormOptionsClass: "form-options",
    kcFormButtonsClass: "form-buttons",
    kcInfoAreaClass: "info-area",
    kcFormSettingClass: "form-settings",
    kcFormOptionsWrapperClass: "form-options-wrapper",
    kcButtonBlockClass: "button-block",
    kcButtonLargeClass: "button-large"
} satisfies { [key in ClassKey]?: string };
