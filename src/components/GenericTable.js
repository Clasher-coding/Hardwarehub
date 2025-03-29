import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  useMediaQuery,
  TablePagination,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

const GenericTable = ({ data = [], handleEdit, handleDelete, handleView }) => {
  const [expandedRows, setExpandedRows] = useState({});
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const toggleDescription = (id) => {
    setExpandedRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper} style={{ overflowX: "auto" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center"><strong>Image</strong></TableCell>
            <TableCell align="center"><strong>Name</strong></TableCell>
            {!isSmallScreen && (
              <TableCell align="center"><strong>Description</strong></TableCell>
            )}
            <TableCell align="center"><strong>Price</strong></TableCell>
            <TableCell align="center"><strong>Stock</strong></TableCell>
            <TableCell align="center"><strong>Category</strong></TableCell>
            <TableCell align="center"><strong>Actions</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => (
            <TableRow key={item._id}>
              <TableCell align="center">
                <img
                  src={`http://localhost:5001${item.image}`}
                  alt={item.name}
                  style={{
                    width: isSmallScreen ? "40px" : "50px",
                    height: isSmallScreen ? "40px" : "50px",
                    objectFit: "contain",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/placeholder-image.png";
                  }}
                />
              </TableCell>
              <TableCell align="center">{item.name}</TableCell>
              {!isSmallScreen && (
                <TableCell align="center">
                  {expandedRows[item._id] || item.description.length <= 30
                    ? item.description
                    : `${item.description.slice(0, 30)}...`}
                  {item.description.length > 30 && (
                    <span
                      onClick={() => toggleDescription(item._id)}
                      style={{ color: "gray", cursor: "pointer", marginLeft: "5px" }}
                    >
                      {expandedRows[item._id] ? "See Less" : "See More"}
                    </span>
                  )}
                </TableCell>
              )}
              <TableCell align="center">${item.price}</TableCell>
              <TableCell align="center">{item.stock}</TableCell>
              <TableCell align="center">{item.category}</TableCell>
              <TableCell align="center">
                <IconButton onClick={() => handleView(item)} aria-label="view" sx={{ color: "#808080" }}>
                  <VisibilityIcon />
                </IconButton>
                <IconButton onClick={() => handleEdit(item)} aria-label="edit" sx={{ color: "#808080" }}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(item._id)} aria-label="delete" sx={{ color: "#808080" }}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box display="flex" justifyContent="center" mt={2}>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </Box>
    </TableContainer>
  );
};

export default GenericTable;