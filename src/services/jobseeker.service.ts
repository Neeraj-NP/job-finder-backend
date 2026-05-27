import prisma from "../prisma/client";

export const getJobSeekerProfile = async (userId: string) => {
  const profile = await prisma.jobSeekerProfile.findUnique({
    where: { userId },
    include: {
      user: {
        select: {
          name: true,
          email: true,
        },
      }
    },
  });

  return profile;
};


