// app/layout.tsx
import "@/styles/globals.css";
import { ReactNode } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import ReactQueryProvider from "@/components/ReactQueryProvider";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppUs";

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
            <ScrollToTop />
            <main className="">{children}</main>
            <WhatsAppButton /> 
          </TooltipProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
