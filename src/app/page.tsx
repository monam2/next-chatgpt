"use client";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Button onClick={() => alert("clicked")}>Click me</Button>
    </main>
  );
}
