import React from "react";
import { cls } from "../libs/utils";

interface LayoutProps {
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
  children: React.ReactNode;
}

export default function Layout({
  title,
  canGoBack,
  hasTabBar,
  children,
}: LayoutProps) {
  return (
    <div>
      <div className="fixed top-0 flex w-full items-center justify-center border-b bg-white py-3 text-lg font-medium text-orange-700">
        {title ? <span>{title}</span> : null}
      </div>
      <div className={cls("pt-10", hasTabBar ? "pb-10" : "")}>{children}</div>
      {hasTabBar ? (
        <nav className="fixed bottom-0 flex items-center justify-between border-t bg-white pb-10 pt-3 text-gray-800">
          <span>d</span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </nav>
      ) : null}
    </div>
  );
}
