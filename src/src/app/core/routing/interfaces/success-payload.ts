import { ActivatedRouteSnapshot } from '@angular/router';
import { RouteHistoryMember } from './route-history-member';

export interface SuccessPayload {
    currentRoute: ActivatedRouteSnapshot;
    history: RouteHistoryMember[];
    name: string;
    params?: Record<string, string>;
    queryParams?: Record<string, string>;
    url: string;
}
