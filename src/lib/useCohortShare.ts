import { useEffect, useState } from "react";

const STORAGE_KEY = "continuity.cohortShareOptIn";
const EVENT = "continuity:cohortShareChanged";

export function useCohortShare(): [boolean, (next?: boolean) => void, boolean] {
  const [on, setOn] = useState<boolean>(true);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw === null) {
        localStorage.setItem(STORAGE_KEY, "true");
        setOn(true);
      } else {
        setOn(raw === "true");
      }
    } catch {
      // ignore
    }
    setHydrated(true);

    const onChange = (e: Event) => {
      const detail = (e as CustomEvent<boolean>).detail;
      if (typeof detail === "boolean") setOn(detail);
    };
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue !== null) setOn(e.newValue === "true");
    };
    window.addEventListener(EVENT, onChange as EventListener);
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener(EVENT, onChange as EventListener);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  const set = (next?: boolean) => {
    const current = (() => {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw === null ? on : raw === "true";
      } catch {
        return on;
      }
    })();
    const value = typeof next === "boolean" ? next : !current;
    try {
      localStorage.setItem(STORAGE_KEY, String(value));
    } catch {
      // ignore
    }
    setOn(value);
    try {
      window.dispatchEvent(new CustomEvent(EVENT, { detail: value }));
    } catch {
      // ignore
    }
  };

  return [on, set, hydrated];
}
