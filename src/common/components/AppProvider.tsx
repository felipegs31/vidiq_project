import configureStore from "common/state";
import { PropsWithChildren } from "react";
import { Provider as ReduxProvider } from "react-redux";
type Props = {};

/**
 * Global providers should be registered here
 */

 const initialState = (window as any).initialReduxState
 const store = configureStore(initialState)

export function AppProvider({ children }: PropsWithChildren<Props>) {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
}
