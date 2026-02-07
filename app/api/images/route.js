
import dbConnect from '../../../lib/db';
import Image from '../../../models/Image';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
    await dbConnect();
    try {
        const images = await Image.find({});
        return NextResponse.json({ success: true, data: images });
    } catch (error) {
        return NextResponse.json({ success: false }, { status: 400 });
    }
}

export async function POST(request) {
    await dbConnect();
    try {
        const body = await request.json();
        const image = await Image.create(body);
        return NextResponse.json({ success: true, data: image }, { status: 201 });
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

        const deletedImage = await Image.findByIdAndDelete(id);
        if (!deletedImage) {
            return NextResponse.json({ success: false }, { status: 400 });
        }
        return NextResponse.json({ success: true, data: {} });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}
