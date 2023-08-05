// TODO: Add translations

export class StorageService {

    isBrowser: boolean = typeof window !== "undefined";
    storage;

    constructor() {
        if (!this.isBrowser) {
            throw new Error('No se puede acceder al storageService fuera de un navegador');
        }
        this.storage = window.localStorage;
    }

    setItem(key: string, value: string | Object) {

        if (!this.isBrowser) {
            throw new Error('No se puede acceder al storageService fuera de un navegador');
        }

        try {
            this.storage.setItem(key, JSON.stringify(value));
        } catch (error: any) { // TODO: Remove any
            console.error(`Error al establecer el valor de '${key}' en localStorage: ${error.message}`);
        }

    }

    getItem(key: string): any {

        if (!this.isBrowser) {
            throw new Error('Cannot access service on not browser device');
        }

        try {
            const value = this.storage.getItem(key);
            return value ? JSON.parse(value) : null;
        } catch (error: any) { // TODO: Remove any
            console.error(`Error al obtener el valor de '${key}' en localStorage: ${error.message}`);
            return null;
        }
    }

    removeItem(key: string): void {

        if (!this.isBrowser) {
            throw new Error('Cannot access service on not browser device');
        }

        try {
            this.storage.removeItem(key);
        } catch (error: any) { // TODO: Remove any
            console.error(`Error al eliminar el valor de '${key}' en localStorage: ${error.message}`);
        }
    }

}

export default new StorageService();