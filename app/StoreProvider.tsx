"use client";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query";
import { makeStore, AppStore } from "../lib/state/store";
import { GlobalState } from "@/lib/types";
import { updateLanguage } from "@/lib/state/features/global/globalSlice";

export default function StoreProvider({
  global,
  children,
}: {
  global: GlobalState;
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();

    // Loading Initial Data
    storeRef.current.dispatch(updateLanguage(global.language));
  }

  useEffect(() => {
    if (storeRef.current != null) {
      // configure listeners using the provided defaults
      // optional, but required for `refetchOnFocus`/`refetchOnReconnect` behaviors
      const unsubscribe = setupListeners(storeRef.current.dispatch);
      return unsubscribe;
    }
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
}
