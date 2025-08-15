import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import type { Project } from "@/.contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export const revalidate = 60;
export default async function ProjectsPage() {
  const keys = allProjects.map((p: Project) => ["pageviews", "projects", p.slug].join(":"));
  const results = (await redis.mget(...keys)) as (number | null)[];
  const views = results.reduce((acc: Record<string, number>, v: number | null, i: number) => {
    acc[allProjects[i].slug] = v ?? 0;
    return acc;
  }, {} as Record<string, number>);

  const featured = allProjects.find((project: Project) => project.slug === "consultoria-en-datos")!;
  const second = allProjects.find((project: Project) => project.slug === "analisis-consumo-electrico-knx")!;

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-zinc-400">
            Ofrecemos soluciones integrales para ayudar a su empresa a crecer y optimizar sus operaciones.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <Link href={`/projects/${featured.slug}`}>
              <article className="relative w-full h-full p-4 md:p-8 pb-20 md:pb-24">
                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  {featured.title}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {featured.description}
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Leer más <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            <Card>
	            <Link href={`/projects/${second.slug}`}>
	              <article className="relative w-full h-full p-4 md:p-8">
	                <h2 className="mt-4 text-2xl font-bold text-zinc-100 group-hover:text-white sm:text-3xl font-display">
	                  {second.title}
	                </h2>
	                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
	                  {second.description}
	                </p>
	                <div className="mt-6">
	                  <p className="text-zinc-200 hover:text-zinc-50">
	                    Leer más <span aria-hidden="true">&rarr;</span>
	                  </p>
	                </div>
	              </article>
	            </Link>
	          </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
