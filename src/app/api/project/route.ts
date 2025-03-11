import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const projectDocs = await getDocs(collection(db, "projects"));
    const projectData = projectDocs.docs.map((doc) => ({
      ...doc.data(),
      _id: doc.id,
    }));

    return NextResponse.json({ data: projectData }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Projects data could not be retrieved" },
      { status: 200 }
    );
  }
}
