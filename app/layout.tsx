import type { PropsWithChildren } from "react";

import "./layout.css";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="dark">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
