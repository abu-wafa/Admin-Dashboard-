import "./users.scss";
import DataTable from "../../src/components/dataTable/dataTable"; // Adjust the path as needed
import { GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import Add from "../../src/components/add/Add";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../src/components/loader/Loader";
import { userRows } from "../../src/data";
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
    field: "firstName",
    headerName: "First name",
    type: "string",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    type: "string",
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    type: "string",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 120,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 100,
    type: "boolean",
  },
  {
    field: "phone",
    headerName: "Phone",
    type: "number",
    width: 150,
  },
];

export default function Users() {
  const [open, setopen] = useState(false);
  const { isPending, data } = useQuery({
    queryKey: ["allusers"],
    queryFn: () =>
      fetch("http://localhost:8800/api/users").then((res) => res.json()),
  });
  return (
    <div className="user">
      <div className="info">
        <h3>Users</h3>
        <button onClick={() => setopen(true)}>Add New User</button>
      </div>
      {isPending ? (
        <Loader color={"red"} />
      ) : (
        <DataTable slug={"users"} columns={columns} rows={data || userRows} />
      )}{" "}
      {open && <Add slug="users" setOpen={setopen} columns={columns} />}
    </div>
  );
}
