import { MessageCircle, Phone } from "lucide-react";
import { COMPANY, telHref, waHref } from "@/lib/company";

export function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 z-30 flex flex-col gap-2 md:hidden">
      <a href={waHref()} target="_blank" rel="noopener" aria-label="WhatsApp"
         className="flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg">
        <MessageCircle className="h-5 w-5" />
      </a>
      <a href={telHref(COMPANY.primaryPhone)} aria-label="Call"
         className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg">
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}
