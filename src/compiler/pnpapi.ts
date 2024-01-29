// To preserve the effects of https://github.com/microsoft/TypeScript/pull/55326
// this file needs to avoid importing large graphs.

export function getPnpApi(path: string) {
    if (typeof process.versions.pnp === "undefined") {
        return;
    }

    const { findPnpApi } = require("module");
    if (findPnpApi) {
        return findPnpApi(`${path}/`);
    }
}

export function getPnpApiPath(path: string): string | undefined {
    // eslint-disable-next-line no-restricted-syntax
    return getPnpApi(path)?.resolveRequest("pnpapi", /*issuer*/ null);
}
