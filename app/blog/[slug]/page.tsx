// type Params = {
//   params: {
//     slug: string;
//   };
// };

// export async function generateMetadata({ params }: Params) {
//   return { title: `Post: ${params.slug}` };
// }

// export default function Page({ params }: Params) {
//   return <h1>Slug: {params.slug}</h1>;
// }

import { Metadata } from "next";

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: { params: { slug: string } }) {
  return <h1>Slug: {params.slug}</h1>;
}