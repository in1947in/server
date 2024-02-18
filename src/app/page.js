import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import { Button } from "@/components/ui/button";

import { PrismaClient } from "@prisma/client";
import Link from "next/link";

let prisma = new PrismaClient();

export default async function Home() {
  const data = await prisma.video.findMany();
  console.log(data);
  return (
    <div className="mt-16 max-w-screen-lg m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
      {data.map((info, i) => (
        <Link href={`/watch?id=${info.id}`} key={i}>
          <Card>
            <AspectRatio ratio="16:9">
              <Image
                src={info.thumbnail}
                alt={info.title}
                layout="fill"
                objectFit="cover"
              />
            </AspectRatio>
            <CardContent>
              <CardHeader>
                <CardTitle>{info.title}</CardTitle>
              </CardHeader>
              <CardDescription>{info.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button>Watch</Button>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
