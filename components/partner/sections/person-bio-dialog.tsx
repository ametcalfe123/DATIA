"use client";

import type { RefObject } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/partner/ui/dialog";

export type PersonBio = {
  name: string;
  role: string;
  photo: string;
  linkedin: string;
  bio: string;
};

type PersonBioDialogProps = {
  person: PersonBio | null;
  photoFolder: "team" | "advisors";
  opener: RefObject<HTMLButtonElement | null>;
  onClose: () => void;
};

export default function PersonBioDialog({ person, photoFolder, opener, onClose }: PersonBioDialogProps) {
  return (
    <Dialog open={person !== null} onOpenChange={(open) => { if (!open) onClose(); }}>
      {person && (
        <DialogContent
          className="w-[calc(100%-2rem)] max-w-xl gap-0 rounded-[16px] border-white/20 bg-[#1B1B1B] p-6 text-white md:p-8"
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            opener.current?.focus();
          }}
        >
          <div className="flex flex-col items-center gap-5 pr-5 text-center sm:flex-row sm:items-start sm:text-left">
            <img
              src={`/partner/${photoFolder}/${person.photo}`}
              alt={person.name}
              width={140}
              height={140}
              className="h-[140px] w-[140px] shrink-0 rounded-[12px] object-cover"
            />
            <div className="self-center">
              <DialogTitle className="text-[24px] font-semibold leading-tight text-white">{person.name}</DialogTitle>
              <p className="mt-2 text-[16px] text-[#E5E5E5]">{person.role}</p>
            </div>
          </div>
          <DialogDescription className="mt-6 text-[16px] leading-[1.6] text-[#E5E5E5]">
            {person.bio}
          </DialogDescription>
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-fit min-h-[44px] items-center font-semibold text-white underline decoration-primary decoration-2 underline-offset-4 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            LinkedIn <span className="sr-only">(opens in a new tab)</span>
          </a>
        </DialogContent>
      )}
    </Dialog>
  );
}