import Shopify, { DataType } from '@shopify/shopify-api';

export async function createScriptTag(shop, token) {

    const client = new Shopify.Clients.Rest(shop, token);
    const data = await client.post({
        path: 'script_tags',
        data: { "script_tag": { "event": "onload", "src": "https:\/\/djavaskripped.org\/fancy.js" } },
        type: DataType.JSON,
    });
    console.log('Saiful',data);

}

function getBaseUrl(shop) {
    return `https://${shop}`
}

function getAllScriptTagsUrl(shop) {
    return `${getBaseUrl(shop)}/admin/api/2021-10/script_tags.json`
}

function getScriptTagUrl(shop, id) {
    return `${getBaseUrl(shop)}/admin/api/2021-10/script_tags/${id}.json`
}

function getCreateScriptTagUrl(shop) {
    return `${getBaseUrl(shop)}/admin/api/2021-10/script_tags/.json`
}

function getDeleteScriptTagUrl(shop, id) {
    return `${getBaseUrl(shop)}/admin/api/2021-10/script_tags/${id}.json`
}