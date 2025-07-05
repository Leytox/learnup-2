"use server";
import { Blog } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";
import slugify from "slugify";
import { toast } from "sonner";

export async function getBlogs(): Promise<Blog[] | null> {
  try {
    return await prisma.blog.findMany();
  } catch (error) {
    console.error(error);
    toast.error("Failed to fetch blogs");
    return [];
  }
}

export async function getBlog(slug: string): Promise<Blog | null> {
  try {
    return await prisma.blog.findFirst({
      where: { slug },
    });
  } catch (error) {
    console.error(error);
    toast.error("Failed to fetch blog");
    return null;
  }
}

export async function createBlog(
  title: string,
  content: string,
  image: string
): Promise<Blog | null> {
  const slug = slugify(title, { lower: true });
  try {
    return await prisma.blog.create({
      data: {
        title,
        content,
        slug,
        image,
      },
    });
  } catch (error) {
    console.error(error);
    toast.error("Failed to create blog");
    return null;
  }
}

export async function editBlog(
  id: number,
  title: string,
  content: string,
  image: string
): Promise<Blog | null> {
  const slug = slugify(title, { lower: true });
  try {
    return await prisma.blog.update({
      where: { id },
      data: {
        title,
        content,
        slug,
        image,
      },
    });
  } catch (error) {
    console.error(error);
    toast.error("Failed to edit blog");
    return null;
  }
}
