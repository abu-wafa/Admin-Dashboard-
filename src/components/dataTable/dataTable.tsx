import { DataGrid, GridColDef } from "@mui/x-data-grid";
import "./dataTable.scss";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useGlobalContext } from "../../context";

type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};
const dataTable = (props: Props) => {
  const { Base_url } = useGlobalContext()!;
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (id: number) => {
      return fetch(Base_url + props.slug + "/" + id, {
        method: "DELETE",
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all" + props.slug] });
    },
  });
  const handleDelete = (id: number) => {
    mutation.mutate(id);
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="cellAction">
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img src={"/view.svg"} alt="View" />
          </Link>
          <div className="Delete" onClick={() => handleDelete(params.row.id)}>
            <img src={"/delete.svg"} alt="Delete" />
          </div>
        </div>
      );
    },
  };
  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        showToolbar={true}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        disableColumnFilter
        disableColumnSelector
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default dataTable;
