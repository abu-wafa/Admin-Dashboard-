import "./products.scss";
import DataTable from "../../src/components/dataTable/dataTable";
import { GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import Add from "../../src/components/add/Add";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../src/components/loader/Loader";
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return (
        <img
          className="Avatar"
          src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
          alt="Avatar"
        />
      );
    },
  },

  {
    field: "title",
    headerName: "Title",
    type: "string",
    width: 200,
  },
  {
    field: "color",
    headerName: "Color",
    width: 120,
    type: "string",
  },
  {
    field: "price",
    headerName: "Price",
    type: "number",
    width: 120,
  },
  {
    field: "producer",
    headerName: "Producer",
    width: 100,
    type: "string",
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 120,
    type: "string",
  },

  {
    field: "inStock",
    headerName: "IN Stock",
    type: "boolean",
    width: 150,
  },
];

export default function Products() {
  const [open, setopen] = useState(false);
  const { isPending, data } = useQuery({
    queryKey: ["allproducts"],
    queryFn: () =>
      fetch("http://localhost:8800/api/products").then((res) => res.json()),
  });
  return (
    <div className="product">
      <div className="info">
        <h3>Products</h3>
        <button onClick={() => setopen(true)}>Add New product</button>
      </div>
      {isPending ? (
        <Loader color={"#1976d2"} />
      ) : (
        <DataTable slug={"products"} columns={columns} rows={data} />
      )}
      {open && <Add slug="products" setOpen={setopen} columns={columns} />}
    </div>
  );
}
