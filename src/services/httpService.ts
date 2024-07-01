import apiClient from "./apiClient";

export interface Entity {
    id: number;
}

class HttpService {
    endpoint: string;
    

    constructor(endpoint: string){
        this.endpoint = endpoint;
    }

    getAll<T>() {
        const controller = new AbortController();

        const request = apiClient.get<T[]>(this.endpoint, {
            signal: controller.signal
        })

        return {request, cancel: () => controller.abort()}
    }

    getById<T>(id: number) {
        return apiClient.get<T>(this.endpoint + id)
    }

    getAllByName<T>(name: string) {
        return apiClient.get<T[]>(this.endpoint + '?name_like=' + name)
    }

    delete(id: number) {
        return apiClient.delete(this.endpoint + id)
    }

    create<T>(entity: T) {
       return apiClient.post(this.endpoint, entity)
    }

    update<T extends Entity>(entity: T) {
        return apiClient.patch(this.endpoint + entity.id, entity)
    }
    
}

const setup = (endpoint: string) => new HttpService(endpoint);

export default setup;