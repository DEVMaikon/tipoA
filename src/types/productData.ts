export interface productsData {
  success: boolean;
  products: [
    {
      productName: string;
      descriptionShort: string;
      photo: string;
      price: string;
    }
  ];
}

export interface productData {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: string;
}
