"use client";

import { useState } from "react";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";

type LinkPreviewProps = {
  url: string;
  children?: string | null
};

export function LinkPreview({ url, children }: LinkPreviewProps) {

    if(children === null) children = "Link";

    const [data, setData] = useState<{
    title: string;
    description: string;
    image: string;
    url: string;
  } | null>(null);

  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState(false);

  async function fetchPreview() {
    if (fetched) return; // evita requisições repetidas
    setLoading(true);

    try {
      const res = await fetch(`/api/link-preview?url=${encodeURIComponent(url)}`);
      const json = await res.json();
      setData(json);
      setFetched(true);
    } catch (err) {
      console.error("Preview fetch failed", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <HoverCard openDelay={100} onOpenChange={(open:boolean) => open && fetchPreview()}>
      <HoverCardTrigger asChild>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          {children}
        </a>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 p-4">
        {loading && <p className="text-sm text-gray-500">Carregando preview...</p>}
        {data && (
          <div className="flex flex-col gap-2">
            {data.image && (
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-40 object-cover rounded-md"
              />
            )}
            <div>
              <h4 className="font-semibold">{data.title || "Sem título"}</h4>
              <p className="text-sm text-muted-foreground line-clamp-3">
                {data.description || "Sem descrição disponível"}
              </p>
              {/* <span className="text-xs text-gray-500 break-all">{data.url}</span> */}
            </div>
          </div>
        )}
      </HoverCardContent>
    </HoverCard>
  );
}
