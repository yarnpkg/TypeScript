// To preserve the effects of https://github.com/microsoft/TypeScript/pull/55326
// this file needs to avoid importing large graphs.

export function isPnpEnabled(): boolean {
    return typeof process !== "undefined" && typeof process?.versions?.pnp !== "undefined";
}

export function getPnpApi(path: string): any {
    if (!isPnpEnabled()) {
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
