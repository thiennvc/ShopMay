
import clientPromise from '../../../lib/db';
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs'; // Use Node.js runtime instead of Edge for MongoDB

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('shopmay');
        const images = await db.collection('images').find({}).toArray();
        // Convert _id to string for frontend compatibility if needed
        const data = images.map(img => ({ ...img, id: img._id.toString() }));
        return NextResponse.json({ success: true, data: data });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const client = await clientPromise;
        const db = client.db('shopmay');
        const body = await request.json();

        // Add timestamp
        const newImage = { ...body, createdAt: new Date() };

        const result = await db.collection('images').insertOne(newImage);
        return NextResponse.json({ success: true, data: { ...newImage, _id: result.insertedId, id: result.insertedId.toString() } }, { status: 201 });
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

        const result = await db.collection('images').deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 0) {
            return NextResponse.json({ success: false, error: 'Not found' }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: {} });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}
