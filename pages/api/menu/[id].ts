// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Menu, Product } from '../../types';

export type ProductResponse = {
  products?: Array<Product>;
  error?: string;
};

let json = require('./data.json')



const menus: Menu[] = json.menus
console.log('menus')
console.log(menus)


export default (
  req: NextApiRequest,
  res: NextApiResponse<ProductResponse>
) => {

  const {id} = req.query

  try {
    res.status(200).json({
    products: menus[id]
    });
  }
  catch (e){
    res.status(500).json({ error: "failed to load menu items"})
  }
}
