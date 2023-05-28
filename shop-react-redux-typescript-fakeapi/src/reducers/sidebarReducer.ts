
  interface SidebarState {
    isOpen: boolean;
  }
  
  const initialState: SidebarState = {
    isOpen: false,
  };
  
  const sidebarReducer = (state = initialState, action: any): SidebarState => {
    switch (action.type) {
      case 'TOGGLE_SIDEBAR':
        return {
          ...state,
          isOpen: !state.isOpen,
        };
      default:
        return state;
    }
  };
  
  export default sidebarReducer;
  export type { SidebarState };