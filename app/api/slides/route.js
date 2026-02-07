
import dbConnect from '../../../lib/db';
import Slide from '../../../models/Slide';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export async function GET() {
    await dbConnect();
    try {
        const slides = await Slide.find({});
        return NextResponse.json({ success: true, data: slides });
    } catch (error) {
        return NextResponse.json({ success: false }, { status: 400 });
    }
}

export async function POST(request) {
    await dbConnect();
    try {
        const body = await request.json();
        const slide = await Slide.create(body);
        return NextResponse.json({ success: true, data: slide }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}

export async function DELETE(request) {
    await dbConnect();
    try {
        // Expect query param ?id=<id>
        const url = new URL(request.url);
        const id = url.searchParams.get('id');

        if (!id) throw new Error('No ID provided');

        const deletedSlide = await Slide.findByIdAndDelete(id);
        if (!deletedSlide) {
            return NextResponse.json({ success: false }, { status: 400 });
        }
        return NextResponse.json({ success: true, data: {} });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}
