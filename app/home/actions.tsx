'use server'
import { Item, CreateItem, db } from '@/app/data/db';
import crypto from 'crypto';
import { revalidatePath } from 'next/cache';

export async function createItem(type: string, message: string)  {

    // const type = data.get('type') as string;
    // const message = data.get('message') as string;

    // if (!type || !message) {
    //     throw new Error('Type and message are required');
    // }


    const { database } = await db;
    const container = database.container('bucket');

    // Generate a new ID for the item
    const item: CreateItem = {
        id: crypto.randomUUID(),
        type,
        message
    };

    // Insert the new item into the container
    await container.items.create<CreateItem>(item);

    revalidatePath('/home');
}