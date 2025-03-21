import type { Preview } from "@storybook/react";
import "../src/styles/globals.css";
import "../src/login/styles/fonts.css";
import "../src/login/styles/berget-theme.css";
import "../src/login/styles/fontawesome.css";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        },
        backgrounds: {
            default: 'dark',
            values: [
                {
                    name: 'dark',
                    value: '#121212',
                }
            ],
        },
        layout: 'fullscreen',
    }
};

export default preview;
