import useSWR from "swr";
import { ProductWithCount } from "pages";
import Item from "./item";

interface ProductListProps {
  kind: "favs" | "sales" | "purchases";
}

interface Record {
  id: number;
  product: ProductWithCount;
}

interface ProductListResponse {
  [key: string]: Record[];
}

export default function ProductList({ kind }: ProductListProps) {
  const { data } = useSWR<ProductListResponse>(`/api/users/me/${kind}`);
  return data ? (
    <>
      {data[kind]?.map((record) => (
        //@ts-ignore
        <Item
          //@ts-ignore
          id={record.product.id}
          key={record.id}
          //@ts-ignore
          title={record.product.name}
          //@ts-ignore
          price={record.product.price}
          hearts={record.product._count.favs}
        />
      ))}
    </>
  ) : null;
}
