// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { Product } from '../../types';

export type ProductResponse = {
  products?: Array<Product>;
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductResponse>
) {
  try {
    res.status(200).json({
    products: [
      {
        id: 1,
        name: 'Bread',
        description: 'Delicious bread with olive oil.',
        price: 340,
      },
      {
        id: 2,
        name: 'Croquettes',
        description: 'Croquettes with ham and cheese and stuff.',
        price: 520,
      },
      {
        id: 3,
        name: 'Soup',
        description: 'Soup of the day, ask the waiter I guess.',
        price: 450,
      },
      {
        id: 4,
        name: 'Olives',
        description: "Just olives, if you're into that kind of thing.",
        price: 330,
      },
      {
        id: 5,
        name: 'Calamari',
        description: "It's like breaded squid.",
        price: 590,
      },
    ],
    });
  }
  catch (e){
    res.status(500).json({ error: "failed to load menu items"})
  }
}
