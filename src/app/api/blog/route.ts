import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const blogDocs = await getDocs(collection(db, "blogs"));
    const blogData = blogDocs.docs.map((doc) => ({
      ...doc.data(),
      _id: doc.id,
    }));

    return NextResponse.json({ data: blogData }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Blogs data could not be retrieved" },
      { status: 200 }
    );
  }
}
