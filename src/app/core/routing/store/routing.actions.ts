import { GoPayload, SuccessPayload } from '@interfaces';
import { createAction, props } from '@ngrx/store';

const go = createAction('[Routing] Go', props<GoPayload>());
const reload = createAction('[Routing] Reloaded');
const start = createAction('[Routing] Started');
const success = createAction('[Routing] Succeed', props<SuccessPayload>());

export const routingActions = { go, reload, start, success };
