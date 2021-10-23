import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://nextjsauthuser:kv5lYzkz6GZ7ExYy@cluster0.e9a4v.mongodb.net/auth-demo?retryWrites=true&w=majority"
  );

  return client;
}
