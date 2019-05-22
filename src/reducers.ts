export default {
  tasks: (state: Array<String> = [], type: String, payload: String): Array<String> => {
    switch (type) {
      case 'TASKS:ADD':
        return [...state, payload];
      case 'TASKS:REMOVE':
        return state.filter((_, index) => index !== Number(payload));
      default:
        return state;
    }
  },
};
