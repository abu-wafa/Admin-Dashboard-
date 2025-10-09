import { GridColDef } from "@mui/x-data-grid";
import "./Add.scss";
import { Dispatch, SetStateAction, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: Dispatch<SetStateAction<boolean>>;
};

function Add(props: Props) {
  const [formData, setformData] = useState({});
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => {
      return fetch("http://localhost:8800/api/" + props.slug, {
        method: "Post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, img: "" }),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all" + props.slug] });
    },
  });

  const hundelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate();
    props.setOpen(false);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setformData((perv) => ({
      ...perv,
      [name]: value,
    }));
  };
  return (
    <div className="add">
      <div className="model">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>add new {props.slug}</h1>
        <form id="form" onSubmit={hundelSubmit}>
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className="item" key={column.field}>
                <label>
                  {column.headerName}
                  <input
                    autoComplete="on"
                    type={column.type}
                    placeholder={column.field}
                    name={column.field}
                    onChange={handleChange}
                  />
                </label>
              </div>
            ))}
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Add;
