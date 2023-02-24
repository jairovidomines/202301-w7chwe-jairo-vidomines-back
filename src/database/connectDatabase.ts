import mongoose from "mongoose";
import chalk from "chalk";
import createDebug from "debug";

const debug = createDebug("users:database");

const connectDatabase = async (mongoUrl: string) => {
  mongoose.set("strictQuery", false);

  try {
    await mongoose.connect(mongoUrl);
    debug(chalk.green("Succesfull connection"));
  } catch (error: unknown) {
    debug(
      chalk.red("Impossible connect to database", (error as Error).message)
    );
  }
};

export default connectDatabase;
