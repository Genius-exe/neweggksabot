import {Store} from './store';
import fetch from 'node-fetch';

export const NeweggCa: Store = {
  currency: '$',
  labels: {
    captcha: {
      container: 'body',
      text: ['are you a human?'],
    },
    inStock: {
      container: 'div#ProductBuy .btn-primary',
      text: ['add to cart'],
    },
    maxPrice: {
      container: 'div#app div.product-price > ul > li.price-current > strong',
      euroFormat: false,
    },
    outOfStock: [
      {
        container: '.product-inventory',
        text: [' out of stock.'],
      },
      {
        container: '.product-flag',
        text: ['out of stock '],
      },
    ],
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url:
        'https://www.newegg.ca/p/N82E16824475043?Item=N82E16824475043&cm_sp=Homepage_MKPL-_-P3_24-475-043-_-12302020',
    },
    {
      brand: 'EVGA',
      itemNumber: '14-487-535',
      model: 'evga',
      series: '3060',
      url:
        'https://www.newegg.com/global/sa-en/evga-geforce-rtx-3060-ti-08g-p5-3663-kr/p/N82E16814487535?Item=N82E16814487535&Description=rtx%203060&cm_re=rtx_3060-_-14-487-535-_-Product',
    },
    {
      brand: 'msi',
      itemNumber: '14-137-605',
      model: 'ventus',
      series: '3070',
      url:
        'https://www.newegg.com/global/sa-en/msi-geforce-rtx-3070-rtx-3070-ventus-2x/p/N82E16814137605?Item=N82E16814137605&Description=rtx%203070&cm_re=rtx_3070-_-14-137-605-_-Product',
    },
    {
      brand: 'PNY',
      itemNumber: '14-133-812',
      model: 'uprising',
      series: '3070',
      url:
        'https://www.newegg.com/global/sa-en/pny-geforce-rtx-3070-vcg30708dfmpb/p/N82E16814133812?Item=N82E16814133812&Description=rtx%203070&cm_re=rtx_3070-_-14-133-812-_-Product',
    },
    {
      brand: 'PNY',
      itemNumber: '14-133-811',
      model: 'XLR8',
      series: '3070',
      url:
        'https://www.newegg.com/global/sa-en/pny-geforce-rtx-3070-vcg30708tfxppb/p/N82E16814133811?Item=N82E16814133811&Description=rtx%203070&cm_re=rtx_3070-_-14-133-811-_-Product',
    },
  ],
  name: 'newegg-ca',
  realTimeInventoryLookup: async (itemNumber: string) => {
    const request_url =
      'https://www.newegg.ca/product/api/ProductRealtime?ItemNumber=' +
      itemNumber;
    const response = await fetch(request_url);
    const response_json = await response.json();
    return (
      response_json.MainItem !== undefined &&
      response_json.MainItem.Instock === true
    );
  },
};
