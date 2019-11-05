export interface GoPayload {
    path?: (string | number)[];
    queryParams?: Record<string, string>;
    url?: string;
}
