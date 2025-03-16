import { prisma } from "./prisma";
import bcrypt from "bcrypt";

export async function createUser(
  email: string,
  name: string,
  password: string,
) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (user) throw new Error("User already exists");
    password = await bcrypt.hash(password, 10);
    return await prisma.user.create({
      data: { email, name, password },
    });
  } catch (error) {
    throw error;
  }
}

export async function getUserByEmail(email: string) {
  try {
    return await prisma.user.findUnique({
      where: { email },
    });
  } catch (error) {
    console.error("Failed to fetch user:", error);
    return null;
  }
}
