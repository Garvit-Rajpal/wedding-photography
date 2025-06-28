// app/layout.tsx
import "@/styles/globals.css";
import { ReactNode } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import ReactQueryProvider from "@/components/ReactQueryProvider";

export const metadata = {
  title: "Wedding Enquiry App",
  description: "Submit your wedding inquiry with WhatsApp and EmailJS.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black font-sans antialiased">
        <ReactQueryProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <main className="">{children}</main>
          </TooltipProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
