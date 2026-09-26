import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, course, location, message, source, type } = body || {};

    // Validate required fields
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Full name is required." },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string") {
      return NextResponse.json(
        { success: false, error: "Phone number is required." },
        { status: 400 }
      );
    }

    const cleanedPhone = phone.replace(/\D/g, "");
    if (!/^[6-9]\d{9}$/.test(cleanedPhone) && cleanedPhone.length < 10) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid 10-digit mobile number." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const leadRecord = {
      leadId: `LEAD-${Date.now()}`,
      name: name.trim(),
      phone: cleanedPhone,
      email: email.trim().toLowerCase(),
      course: (course || "General Software Training").trim(),
      location: (location || "Bangalore Campus").trim(),
      source: (source || "Website Form").trim(),
      type: (type || "Admission Inquiry").trim(),
      message: (message || "").trim(),
      createdAt: new Date().toISOString(),
    };

    // Note: In production with AWS DynamoDB / PostgreSQL configured, 
    // insert leadRecord into the database here.

    return NextResponse.json({
      success: true,
      message: "Lead recorded successfully.",
      leadId: leadRecord.leadId,
      timestamp: leadRecord.createdAt,
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: "Internal server error processing lead." },
      { status: 500 }
    );
  }
}
