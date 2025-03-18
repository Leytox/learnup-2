"use server";
import { prisma } from "@/lib/prisma";

export const getBlogs = async () => {
  const blogs = await prisma.blog.findMany();
  return blogs;
};

export const getBlog = async (slug: string) => {
  const blog = await prisma.blog.findFirst({
    where: { slug },
  });
  return blog;
};
