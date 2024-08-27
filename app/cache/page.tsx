import { unstable_noStore } from "next/cache";
import { cookies } from "next/headers";
import React, { cache } from "react";

/**
 * should be place at app/lib/db
 */
// export const db = drizzle(sql);
// export const getProduct = unstable_cache(
//   async (id) => {
//     return db.select().from(products).where(eq(products.id, id));
//   },
//   ['products'],
//   {
//     tags: ['products'],
//   }
// );

async function ProductQuality() {
  // unstable_noStore();
  const res = await fetch("https://api.vercel.app/products/1");
  const result = await res.json();
  return <h3>{result.stock}</h3>;
}

/**
 * revalidate cache data
 * fetch or unstable_cache
 * just for demo
 */

// async function ProductQuantity() {
//   let res = await fetch("https://api.vercel.app/products/1", {
//     next: {
//       revalidate: 1,
//     },
//   });
//   let data = await res.json();

//   return <h1>{data.stock}</h1>;
// }

// export const getProduct = unstable_cache(
//   async (id) => {
//     return db.select().from(products).where(eq(products.id, id));
//   },
//   ["products"],
//   {
//     tags: ["products"],
//     revalidate: 60,
//   }
// );

export default function page() {
  // cookies();
  // headers();
  // noStore();

  return (
    <div>
      <h2>cache page</h2>
      <p>{Date.now()}</p>
      <p>Pre-render: This will be cached after running the build.</p>
      <p>Dynamic Rendering: cookies(); headers() noStore()</p>

      <br />
      <h2>fetch api</h2>
      <p>cache skip: command + shift + r</p>
      <p>Dynamic Rendering: unstable_noStore()</p>
      <ProductQuality />

      <br />
      <h2>unstable cache</h2>
      <p>database unstable_cache</p>
      <p>revalidateTag: revalidateTag('products')</p>

      <br />
      <h2>revalidate cache data</h2>
      <p>revalidate cache data base on fetch api or unstable_cache</p>

      <br />
      <h2>React cache function</h2>
      <code>
        {`
          import { cache } from "react";

          const getProducts = cache(async (id) => {
            console.log('getProducts', id);
            return (await db.select().from(products).where(eq(products.id, id))).at(0);
          });

          export async function generateMetadata() {
            let product = await getProducts(1);
            return {
              title: product?.name,
            };
          }

          export default async function Page() {
            let product = await getProducts(1);
            return (
              <section>
                <h1>{product?.name}</h1>
              </section>
            );
          }
        `}
      </code>

      <br />
      <h2>CRUD</h2>
      <p>React Server Component Payload (RSC Payload).</p>
      <p>useOptimistic React Hook (Javascript disable)</p>
      <code>
        {`
          useEffect(() => {
            // Prevent navigation away if a mutation (or any process) is pending
            function handler(e: BeforeUnloadEvent) {
              if (!state.pending) return;
              e.preventDefault(); // Prevents the page from closing or refreshing if there's a pending operation
            }

            window.addEventListener('beforeunload', handler); // Attach the event listener for the 'beforeunload' event

            return () => {
              window.removeEventListener('beforeunload', handler); // Clean up the event listener when the component unmounts
            };
          }, [state.pending]); // Re-run the effect if the 'pending' state changes
        `}
      </code>

      <h2>Partial Prerendering (PPR) </h2>
      <p>Specific component use noStore run dynamically</p>
      <p>
        https://nextjs.org/docs/app/building-your-application/rendering/partial-prerendering
      </p>
    </div>
  );
}
