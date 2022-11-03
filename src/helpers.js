export function getSubdomain() {
    return window.location.hostname.split('.')[0];
}