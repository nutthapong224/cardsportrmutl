import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Paper,
  TextField,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";

const GoogleSheetData = () => {
  const [data, setData] = useState([]);
  const [fnameSearch, setFnameSearch] = useState("");
  const [lnameSearch, setLnameSearch] = useState("");
  const [selectedCampus, setSelectedCampus] = useState("");
  const [search, setSearch] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // Error message state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCSVData = async () => {
      const url = import.meta.env.VITE_GOOGLE_SHEETS_CSV_TABLETENIS;

      try {
        const response = await fetch(url);
        const csvText = await response.text();

        Papa.parse(csvText, {
          header: true,
          complete: (result) => {
            setData(result.data);
          },
        });
      } catch (error) {
        console.error("Error fetching CSV:", error);
      }
    };

    fetchCSVData();
  }, []);

  const uniqueCampuses = [...new Set(data.map((row) => row.สังกัด))];

  const handleViewDetails = (rowId) => {
    navigate(`/playertabletenis/${rowId}`);
  };

  const handleSearchClick = () => {
    if (!fnameSearch || !lnameSearch || !selectedCampus) {
      setErrorMessage("กรุณากรอกข้อมูลให้ครบด้วยค่ะ");
    } else {
      setSearch(true);
      setErrorMessage(""); // Clear error message if fields are filled
    }
  };

  const filteredData = data.filter((row) => {
    const fnameMatch = row.ชื่อ?.toLowerCase().includes(fnameSearch.toLowerCase());
    const lnameMatch = row.นามสกุล?.toLowerCase().includes(lnameSearch.toLowerCase());
    const campusMatch = selectedCampus ? row.สังกัด === selectedCampus : true; 
    
    

    return fnameMatch && lnameMatch && campusMatch;
  });

  const allFieldsFilled = fnameSearch && lnameSearch && selectedCampus;

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography
        variant="h4"
        component="h1"
        align="center"
        gutterBottom
        sx={{
          fontFamily: "'Kanit', sans-serif",
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" }, // Adjust font size for responsiveness
        }}
      >
        ระบบค้นหานักกีฬาเทเบิลเทนิส
      </Typography>

      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="กรุณากรอกชื่อ"
            variant="outlined"
            fullWidth
            value={fnameSearch}
            onChange={(e) => setFnameSearch(e.target.value)}
            sx={{ fontFamily: "'Kanit', sans-serif" }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="กรุณากรอกนามสกุล"
            variant="outlined"
            fullWidth
            value={lnameSearch}
            onChange={(e) => setLnameSearch(e.target.value)}
            sx={{ fontFamily: "'Kanit', sans-serif" }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth required>
            <InputLabel>วิทยาเขต</InputLabel>
            <Select
              value={selectedCampus}
              onChange={(e) => setSelectedCampus(e.target.value)}
              label="วิทยาเขต"
              sx={{ fontFamily: "'Kanit', sans-serif" }}
            >
              {uniqueCampuses.map((campus, index) => (
                <MenuItem key={index} value={campus}>
                  {campus}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Button
        variant="contained"
        color="primary"
        onClick={handleSearchClick}
        fullWidth
        sx={{ fontFamily: "'Kanit', sans-serif" }}
      >
        ค้นหา
      </Button>

      {/* Display error message if fields are not filled */}
      {errorMessage && (
        <Typography
          variant="h6"
          align="center"
          sx={{ mt: 2, fontFamily: "'Kanit', sans-serif", color: "red" }}
        >
          {errorMessage}
        </Typography>
      )}

      {search && allFieldsFilled && filteredData.length > 0 ? (
        <TableContainer component={Paper} elevation={3} sx={{ overflowX: "auto" }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontFamily: "'Kanit', sans-serif" }}>ชื่อ-นามสกุล</TableCell>
                <TableCell sx={{ fontFamily: "'Kanit', sans-serif" }}>วิทยาเขต</TableCell>
                <TableCell sx={{ fontFamily: "'Kanit', sans-serif" }}>แสดงข้อมูล</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.slice(0, 1).map((row) => (
                <TableRow key={row.idimport}>
                  <TableCell sx={{ fontFamily: "'Kanit', sans-serif" }}>
                  {row.คำนำหน้า}  {row.ชื่อ} {row.นามสกุล}
                  </TableCell>
                  <TableCell sx={{ fontFamily: "'Kanit', sans-serif" }}>{row.สังกัด}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleViewDetails(row.รหัสนักศึกษา)}
                      sx={{ fontFamily: "'Kanit', sans-serif" }}
                    >
                      แสดงข้อมูล
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        search && allFieldsFilled && (
          <Typography
            variant="h6"
            align="center"
            sx={{ mt: 2, fontFamily: "'Kanit', sans-serif" }}
          >
            ไม่พบข้อมูลที่ต้องการค้นหา
          </Typography>
        )
      )}
    </Container>
  );
};

export default GoogleSheetData;
