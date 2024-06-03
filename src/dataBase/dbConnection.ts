import mongoose from 'mongoose';

export const dataBase = async (): Promise<void> => {
  const dbUrl = process.env.DB_URL;

  if (!dbUrl) {
    console.error("DB_URL environment variable is not defined");
    return;
  }

  try {
    await mongoose.connect(dbUrl);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to database", error);
  }
};

