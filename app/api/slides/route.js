
import clientPromise from '../../../lib/db';
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('shopmay');
        const slides = await db.collection('slides').find({}).toArray();
        const data = slides.map(slide => ({ ...slide, id: slide._id.toString() }));
        return NextResponse.json({ success: true, data });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const client = await clientPromise;
        const db = client.db('shopmay');
        const body = await request.json();

        const newSlide = { ...body, createdAt: new Date() };

        // Check for required fields
        if (!newSlide.image || !newSlide.title) {
            throw new Error('Image and Title are required');
        }

        const result = await db.collection('slides').insertOne(newSlide);
        return NextResponse.json({ success: true, data: { ...newSlide, _id: result.insertedId, id: result.insertedId.toString() } }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}

export async function DELETE(request) {
    try {
        const url = new URL(request.url);
        const id = url.searchParams.get('id');

        if (!id) throw new Error('No ID provided');

        const client = await clientPromise;
        const db = client.db('shopmay');

        const result = await db.collection('slides').deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 0) {
            return NextResponse.json({ success: false, error: 'Not found' }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: {} });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}
