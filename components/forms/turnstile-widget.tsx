'use client';

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
          theme?: "light" | "dark" | "auto";
          appearance?: "always" | "interaction-only" | "execute";
        },
      ) => string;
      reset?: (widgetId?: string) => void;
      remove?: (widgetId?: string) => void;
    };
  }
}

interface TurnstileWidgetProps {
  siteKey: string;
  onVerify: (token: string) => void;
  onExpire?: () => void;
  onError?: () => void;
  theme?: "light" | "dark" | "auto";
  className?: string;
}

export function TurnstileWidget({
  siteKey,
  onVerify,
  onExpire,
  onError,
  theme = "dark",
  className,
}: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let widgetId: string | undefined;

    const renderWidget = () => {
      if (!window.turnstile || !containerRef.current || widgetId) {
        return;
      }

      widgetId = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        theme,
        appearance: "always",
        callback: onVerify,
        "expired-callback": onExpire,
        "error-callback": onError,
      });
    };

    renderWidget();

    const handleLoad = () => renderWidget();
    window.addEventListener("turnstile-load", handleLoad);

    return () => {
      window.removeEventListener("turnstile-load", handleLoad);
      if (widgetId && typeof window.turnstile?.remove === "function") {
        window.turnstile.remove(widgetId);
      } else if (widgetId && typeof window.turnstile?.reset === "function") {
        window.turnstile.reset(widgetId);
      }
    };
  }, [siteKey, onVerify, onExpire, onError, theme]);

  return <div ref={containerRef} className={className} />;
}


