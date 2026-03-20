import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

type WebhookPayload = {
  _type?: string;
  slug?: string;
};

export async function POST(request: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;

  if (!secret) {
    return new Response("Missing environment variable SANITY_REVALIDATE_SECRET", { status: 500 });
  }

  try {
    const { isValidSignature, body } = await parseBody<WebhookPayload>(request, secret);

    if (!isValidSignature) {
      return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
    }

    if (body?._type !== "newsPost") {
      return NextResponse.json({ revalidated: false, message: "Ignored document type", body });
    }

    revalidatePath("/");
    revalidatePath("/news");

    if (body.slug) {
      revalidatePath(`/news/${body.slug}`);
    } else {
      revalidatePath("/news/[slug]", "page");
    }

    return NextResponse.json({ revalidated: true, body });
  } catch (error) {
    console.error("Sanity revalidation error", error);
    return NextResponse.json({ message: "Webhook processing failed" }, { status: 500 });
  }
}
