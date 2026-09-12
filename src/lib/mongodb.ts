import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URL;

if (!uri) {
  throw new Error("MONGODB_URL 환경 변수가 설정되지 않았습니다. .env.local을 확인하세요.");
}

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

// 개발 환경에서 HMR로 인해 커넥션이 중복 생성되지 않도록 전역에 캐싱합니다.
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = new MongoClient(uri).connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  clientPromise = new MongoClient(uri).connect();
}

export type LinkClickDoc = {
  _id: string;
  count: number;
};

export default clientPromise;
