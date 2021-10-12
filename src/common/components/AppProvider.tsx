import { PropsWithChildren } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "common/redux/store";
type Props = {};

/**
 * Global providers should be registered here
 */
export function AppProvider({ children }: PropsWithChildren<Props>) {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
}
