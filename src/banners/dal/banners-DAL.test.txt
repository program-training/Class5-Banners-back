import { start } from '../../server';
import connectToMongoDB from '../../utils/connect-to-mongoDB';
import connectToPostgreSQL from '../../utils/connect-to-postgreSQL';
import initialMongo from '../../utils/initial-mongo';
import initialPostgreSQL from '../../utils/initial-postgreSQL';
import { 
  addBanner,
  getAllBannersQuery,
  getBannerByProdIDQuery,
  updateBannerQuery,
  deleteBannerQuery 
} from './banners-DAL';

const createBanner = () => {return {
  authorID: '1',
  category: 'test',
  description: 'testing',
  imageURL: 'test',
  note: 'test',
  productID: `${Math.random()}`,
  productURL: 'test',
  title: 'test'
}}

import 'dotenv/config'
console.log('mg', process.env.MONGODB_URI);


await (connectToMongoDB(process.env.MONGODB_URI || ''))
console.log('pg', process.env.POSTGRESQL_CONNECTION_STRING);
await (connectToPostgreSQL())


await (initialMongo())
await (initialPostgreSQL())

describe('bannerModel', () => {

  it('adds a new banner', async () => {
    const newBanner = createBanner();
    const savedBanner = await addBanner(newBanner);
    
    expect(savedBanner._id).toBeDefined();
    expect(savedBanner.title).toBe(newBanner.title);
  });

  // it('gets all banners', async () => {
  //   const banner1 = await addBanner(createBanner());
  //   const banner2 = await addBanner(createBanner());
    
  //   const banners = await getAllBannersQuery();

  //   expect(banners.length).toBe(2);
  //   expect(banners).toContainEqual(banner1); 
  // });

  // it('gets banner by product id', async () => {
  //   const banner = await addBanner(createBanner());
    
  //   const result = await getBannerByProdIDQuery(banner.productID);

  //   expect(result[0]._id.toString()).toBe(banner._id.toString());
  // });

  // it('updates a banner', async () => {
  //   const banner = await addBanner(createBanner());
    
  //   const updatedBanner = await updateBannerQuery(
  //     banner._id, 
  //     { title: 'New Title'}  
  //   );

  //   expect(updatedBanner?.title).toBe('New Title');
  // });

  // it('deletes a banner', async () => {
  //   const banner = await addBanner(createBanner());
    
  //   await deleteBannerQuery(banner._id);
    
  //   const banners = await getAllBannersQuery();
  //   expect(banners).not.toContainEqual(banner);
  // });

});