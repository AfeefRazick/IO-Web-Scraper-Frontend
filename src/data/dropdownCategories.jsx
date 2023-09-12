import { products, services } from "./categories";

export const productList = products.map((product) => ({
  label: product.category,
  value: product.link,
}));
export const serviceList = services.map((service) => ({
  label: service.category,
  value: service.link,
}));
