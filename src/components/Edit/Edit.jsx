import { MaterialReactTable } from "material-react-table";
import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { editMovie } from "../../redux/thunk";

const Edit = ({ movie, close }) => {
  const { _id, title, rating, description, director } = movie;

  const dispatch = useDispatch();
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    let data = [];
    const movieObj = {
      title,
      director,
      description,
      rating,
    };
    data.push(movieObj);
    setTableData(data);
  }, [description, director, rating, title]);

  const columns = useMemo(
    () => [
      {
        header: "Title",
        accessorKey: "title",
        required: true,
        size: 20,
        grow: true,
      },
      {
        header: "Director",
        accessorKey: "director",
        size: 20,
        grow: true,
      },
      {
        header: "Description",
        accessorKey: "description",
        size: 50,
        grow: true,
      },
      {
        header: "Rating",
        accessorKey: "rating",
        muiEditTextFieldProps: { type: "number" },
        size: 10,
      },
    ],
    []
  );

  const handleSaveRow = ({ exitEditingMode, row, values }) => {
    if (!values.title.trim()) {
      toast.error("Title cannot be empty");
      return;
    }

    if (values.rating < 0 || values.rating > 10) {
      toast.error("Rating must be in a range from 0 to 10");
      return;
    }

    if (values.director === "") {
      toast.error("Director cannot be an empty string");
      return;
    }

    if (values.description === "") {
      toast.error("Description cannot be an empty string");
      return;
    }

    if (values.rating === "") {
      toast.error("Rating cannot be an empty string");
      return;
    }

    const updatedTableData = [...tableData];
    updatedTableData[row.index] = values;

    setTableData(updatedTableData);

    const newData = {
      title: values.title,
      director: values.director,
      description: values.description,
      rating: values.rating,
    };

    dispatch(editMovie({ newData, _id }))
      .unwrap()
      .then(() => {
        toast.success("Movie details were successfully edited");
        close();
      })
      .catch((err) => toast.error(err));

    exitEditingMode();
  };
  return (
    <div>
      <div>
        <MaterialReactTable
          columns={columns}
          data={tableData}
          enableEditing
          onEditingRowSave={handleSaveRow}
          muiEditTextFieldProps={{
            sx: {
              padding: 0,
            },
          }}
          muiTableHeadCellProps={{
            sx: {
              display: "none",
            },
          }}
          muiTableBodyCellProps={{
            sx: {
              backgroundColor: "rgba(52, 112, 255, 0.5)",
              border: "none",
            },
          }}
          muiTableBodyRowProps={{
            sx: {
              borderRadius: "8px",
            },
          }}
          muiBottomToolbarProps={{
            sx: {
              display: "none",
            },
          }}
          muiTopToolbarProps={{
            sx: {
              display: "none",
            },
          }}
          layoutMode="grid"
          displayColumnDefOptions={{
            "mrt-row-actions": {
              size: 10,
              grow: true,
            },
          }}
        ></MaterialReactTable>
      </div>
    </div>
  );
};

export default Edit;
