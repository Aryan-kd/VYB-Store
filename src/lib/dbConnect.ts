import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

// Void type can be any
async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already Connected to Database");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "");

    connection.isConnected = db.connections[0].readyState;
    console.log("Database Connect Successfully");
  } catch (error) {
    console.log("Database Connection Failed");
    console.error(error);
    // We exit the process as database not connected
    process.exit(1);
  }
}

export default dbConnect;
