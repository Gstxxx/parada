import { Instagram, PhoneIcon as WhatsApp } from "lucide-react";

export function Socials() {
  return (
    <div className="mt-4 flex flex-col gap-1 justify-end items-end">
      {/* Instagram */}
      <div className="flex items-center gap-1 text-[#C4A484]">
        <Instagram size={12} />
        <span className="text-xs">@xxxxxx</span>
      </div>
      {/* WhatsApp */}
      <div className="flex items-center gap-1 text-[#C4A484]">
        <WhatsApp size={12} />
        <span className="text-xs">+55 xx xxxx-xxxx</span>
      </div>
    </div>
  );
}

export function TextName() {
  return (
    <div className="flex flex-col items-center justify-center mb-2 ">
      <h1
        className="text-[#C4A484] text-xl text-center"
        style={{ fontFamily: "Paradise" }}
      >
        xxxx xxxx xxxx
      </h1>
    </div>
  );
}
