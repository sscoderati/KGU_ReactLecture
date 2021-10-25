import { createContext, useContext } from "react";

const storeContext = createContext();

export const StoreProvider = storeContext.Provider;

///// (store1)=> {store1.todo}
export default (mapState) => {
  const store = useContext(storeContext);
  return mapState(store);
};
