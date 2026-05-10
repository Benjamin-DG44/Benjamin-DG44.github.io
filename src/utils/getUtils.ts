const LOGO_PATH = '/images/logos/'
const IMAGES_PATH = '/images/others/';
const PROJECTS_PATH = '/images/projects/';
const DOCUMENTS_PATH = '/documents/';

export function getLogo(fileName: string) {
    return `${LOGO_PATH}${fileName}`;
}

export function getImage(fileName: string) {
    return `${IMAGES_PATH}${fileName}`;
}

export function getProjectImage(projectId: number, fileName: string) {
    return `${PROJECTS_PATH}project-${projectId}/${fileName}`;
}

export function getDocument(fileName: string) {
    return `${DOCUMENTS_PATH}${fileName}`;
}