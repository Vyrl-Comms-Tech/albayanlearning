import React, { useState } from "react";
import { Play, X } from "lucide-react";
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const YOUTUBE_ID = "OsBEtQRpZ9w";

export default function VideoModalPreview({ youtubeId = YOUTUBE_ID, thumbnail }) {
  const [open, setOpen] = useState(false);
  const [thumbSrc, setThumbSrc] = useState(thumbnail || `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Play live class preview video"
        className="group relative block w-full aspect-[4/3] sm:aspect-video rounded-xl overflow-hidden shadow-2xl ring-1 ring-forest-dark/30 transition-all duration-500 hover:glow-green cursor-pointer"
      >
        <img
          src={thumbSrc}
          alt="Live class preview video thumbnail"
          className="absolute inset-0 h-full w-full object-cover"
          onError={() => setThumbSrc(`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/85 via-forest-dark/25 to-forest-dark/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-14 w-14 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-gold/90 text-ink shadow-xl ring-4 sm:ring-8 ring-vellum/10 transition-transform duration-300 group-hover:scale-110">
            <Play className="h-5 w-5 sm:h-8 sm:w-8 fill-ink" />
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl w-[calc(100%-1rem)] p-0 gap-0 overflow-hidden border-0 bg-white text-ink [&>button:last-child]:hidden">
          <DialogTitle className="sr-only">Live class preview</DialogTitle>
          <DialogDescription className="sr-only">Video preview of a live one-on-one Quran class</DialogDescription>
          <div className="flex justify-end bg-white px-2 py-1 sm:px-3 sm:py-2">
            <DialogClose
              aria-label="Close video"
              className="flex h-9 w-9 items-center justify-center rounded-full text-ink transition-colors hover:bg-black/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <X className="h-5 w-5" />
            </DialogClose>
          </div>
          <div className="aspect-[4/5] sm:aspect-video w-full bg-black">
            {/* Content unmounts on close, so playback stops automatically. */}
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&playsinline=1&modestbranding=1`}
              title="Live class preview"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
