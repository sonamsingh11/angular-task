import { Data } from '@angular/router';

export interface RouteData extends Data {
    delay?: number;
    disableIntercom?: boolean;
    hideLoading?: boolean;
    name?: string;
    preload?: boolean;
}
