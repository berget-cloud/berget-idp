import type { DeepPartial } from "keycloakify/tools/DeepPartial";
import type { KcContext } from "./KcContext";
import { useI18n } from "./i18n";
import { createGetKcContextMock } from "keycloakify/login/KcContext";
import type { KcContextExtension, KcContextExtensionPerPage } from "./KcContext";
import { themeNames, kcEnvDefaults } from "../kc.gen";
import Login from "./pages/Login";
import BergetTemplate from "./components/BergetTemplate";
import { classes } from "./KcPage";

const kcContextExtension: KcContextExtension = {
    themeName: themeNames[0],
    properties: {
        ...kcEnvDefaults
    }
};
const kcContextExtensionPerPage: KcContextExtensionPerPage = {};

export const { getKcContextMock } = createGetKcContextMock({
    kcContextExtension,
    kcContextExtensionPerPage,
    overrides: {
        // Ensure the login page shows up properly in Storybook
        realm: {
            internationalizationEnabled: true,
            displayNameHtml: "Berget AI Console",
            registrationAllowed: true,
            rememberMe: true,
            password: true,
            registrationEmailAsUsername: false
        },
        url: {
            loginAction: "#",
            registrationUrl: "#",
            loginUrl: "#"
        },
        message: undefined,
        login: {
            username: "",
            rememberMe: false
        },
        messagesPerField: {
            printIfExists: () => undefined,
            existsError: () => false,
            get: () => "",
            exists: () => false
        }
    },
    overridesPerPage: {}
});

export function createKcPageStory<PageId extends KcContext["pageId"]>(params: {
    pageId: PageId;
}) {
    const { pageId } = params;

    function KcPageStory(props: {
        kcContext?: DeepPartial<Extract<KcContext, { pageId: PageId }>>;
    }) {
        const { kcContext: overrides } = props;

        const kcContextMock = getKcContextMock({
            pageId,
            overrides
        });
        
        const { i18n } = useI18n({ kcContext: kcContextMock });

        // Directly render the Login component with BergetTemplate for login page
        if (pageId === "login.ftl") {
            return (
                <Login
                    kcContext={kcContextMock}
                    i18n={i18n}
                    Template={BergetTemplate}
                    classes={classes}
                    doUseDefaultCss={false}
                />
            );
        }

        // For other pages, you might want to handle differently
        return <div>Page {pageId} not implemented in Storybook</div>;
    }

    return { KcPageStory };
}
