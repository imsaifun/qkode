import { useAppBridge } from '@shopify/app-bridge-react';
import { getSessionToken } from '@shopify/app-bridge-utils';
import { Layout, Page, SettingToggle, TextStyle } from '@shopify/polaris';
import Axios from 'axios';
import React, { useState } from 'react';
function Install() {
    const app = useAppBridge();
    const [isInstalled, setIsInstalled] = useState(null)
    const titleDescription = isInstalled ? "Uninstalled" : "Install"
    const bodyDescription = isInstalled ? "Install" : "Uninstalled"


    async function handleAction() {
        if (!isInstalled) {
            const token = await getSessionToken(app);
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            }
            Axios.post(`https://saifun.loca.lt/script_tag`, {}, config)
        }
        setIsInstalled((oldValue) => !oldValue)
    }

    return (
        <Page>
            <Layout.AnnotatedSection
                title={`${titleDescription} Banner`}
                description="Toggle banner installation on your shop">
                <SettingToggle
                    action={{
                        content: titleDescription,
                        onAction: handleAction
                    }}
                    enabled={true}>
                    The banner script is <TextStyle Variation="strong">{bodyDescription}</TextStyle>
                </SettingToggle>
            </Layout.AnnotatedSection>
        </Page>
    )
}

export default Install
