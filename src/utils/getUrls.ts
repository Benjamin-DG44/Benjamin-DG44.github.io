const IMAGES_PATH = '/images/others/';
const PROJECTS_PATH = '/images/projects/';
const DOCUMENTS_PATH = '/documents/';

export function getImageUrl(fileName: string) {
    return `${IMAGES_PATH}${fileName}`;
}

export function getImageProjectUrl(fileName: string) {
    return `${PROJECTS_PATH}${fileName}`;
}

export function getDocumentUrl(fileName: string) {
    return `${DOCUMENTS_PATH}${fileName}`;
}
