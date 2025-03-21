import { Suspense, lazy } from "react";
import type { ClassKey } from "keycloakify/login";
import type { KcContext } from "./KcContext";
import { useI18n } from "./i18n";
import DefaultPage from "keycloakify/login/DefaultPage";
import BergetTemplate from "./components/BergetTemplate";
import Login from "./pages/Login";

const UserProfileFormFields = lazy(
    () => import("keycloakify/login/UserProfileFormFields")
);

const doMakeUserConfirmPassword = true;

export default function KcPage(props: { kcContext: KcContext }) {
    const { kcContext } = props;

    const { i18n } = useI18n({ kcContext });

    return (
        <Suspense>
            {(() => {
                switch (kcContext.pageId) {
                    case "login":
                        return (
                            <Login
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classes}
                                Template={BergetTemplate}
                                doUseDefaultCss={false}
                            />
                        );
                    default:
                        return (
                            <DefaultPage
                                kcContext={kcContext}
                                i18n={i18n}
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
const classes = {
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
