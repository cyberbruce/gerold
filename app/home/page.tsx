import { db, Item } from '@/app/data/db';
import crypto from 'crypto';
import Link from 'next/link';
import ItemForm from './ItemForm';
import { createItem }  from './actions';
import { create } from 'domain';
export const dynamic = 'force-dynamic'; // Force dynamic rendering for this page



export default async function Home() {

    const { database } = await db;
    const container = database.container('bucket');

    // await createItem('This is the first item zzzz action!!');
    // container.items.upsert<Item>({
    //     id: crypto.randomUUID(),
    //     type: 'event',
    //     message: 'This is the first item',
    //     _ts: Date.now(),
    // });


    const onSubmit = async (data: Item) => {
        const { database } = await db;
        const container = database.container('bucket');

        // Generate a new ID for the item
        data.id = crypto.randomUUID();
        data._ts = Date.now();

        // Insert the new item into the container
        await container.items.create<Item>(data);
    }

    const { resources } = await container.items.query<Item>(
        `SELECT top 10 * FROM c WHERE c.type = 'event' ORDER BY c._ts desc`
    ).fetchAll();

    return (
        <>
            <div className='text-4xl'>Event Log</div>
            <Link href="/about" className="text-blue-500 hover:underline">About</Link>
            <ItemForm/>
            <div>
                {resources.map((item, index) => (
                    <div key={index} className='grid grid-cols-3 gap-4'>
                        <div>{item.message}</div>
                        <div>{item.id}</div>
                        <div>{item._ts}</div>
                    </div>
                ))}
            </div>
        </>
    );
}