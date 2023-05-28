export enum UserActionTypes {
    TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'
}

export interface SidebarState {
    payload: boolean,
    type: string
}