import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { PrismaClient } from "@prisma/client";

let prisma = new PrismaClient();
export default async function Page(props) {
  let data = await prisma.video.findFirst({
    where: {
      id: +props.searchParams.id,
    },
  });
  
  return (
    <div>
      <div className="mt-16 max-w-screen-xl m-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-6 gap-3 p-4">
        <div className="col-start-1 col-end-5">
          <iframe
            className="aspect-video w-full "
            src={data.embedUrl}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
