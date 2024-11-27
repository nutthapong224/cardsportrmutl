import React from "react";
import { ImageListItem, Typography, Box } from "@mui/material";
import Grid2 from "@mui/material/Grid2"; // Import Grid2 correctly
import { useNavigate } from "react-router-dom";
import player from "../assets/player.png";
import coach from "../assets/coach.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        padding: { xs: "20px", md: "40px" },
        fontFamily: "'Kanit', sans-serif",
        marginTop: { xs: "-80px", sm: "-90px", md: "-100px" }, // Adjust marginTop for mobile and iPad
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          fontSize: { xs: "1.5rem", sm: "2rem" },
          fontFamily: "'Kanit', sans-serif",
        }}
      >
        ระบบค้นหาข้อมูลผู้คุม/นักกีฬา
      </Typography>

      <Grid2
        container
        spacing={2}
        justifyContent="center"
        sx={{ marginBottom: { xs: "10px", sm: "15px", md: "20px" } }}
      >
        {/* Team Manager Section */}
        <Grid2
          item
          xs={12}
          sm={6}
          md={5}
          onClick={() => navigate("/coach")}
          sx={{ cursor: "pointer" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              fontFamily: "'Kanit', sans-serif",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                marginBottom: { xs: "5px", sm: "10px" },
                fontSize: { xs: "1rem", sm: "1.25rem" },
                fontFamily: "'Kanit', sans-serif",
              }}
            >
              เจ้าหน้าที่ผู้คุมนักกีฬา
            </Typography>
            <ImageListItem>
              <img
                src={coach}
                alt="Coach"
                style={{
                  borderRadius: "10px",
                  width: "100%",
                  maxWidth: "180px",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </ImageListItem>
          </Box>
        </Grid2>

        {/* Player Section */}
        <Grid2
          item
          xs={12}
          sm={6}
          md={5}
          onClick={() => navigate("/player")}
          sx={{ cursor: "pointer" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              fontFamily: "'Kanit', sans-serif",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                marginBottom: { xs: "5px", sm: "10px" },
                fontSize: { xs: "1rem", sm: "1.25rem" },
                fontFamily: "'Kanit', sans-serif",
              }}
            >
              นักศึกษาที่ลงแข่งขัน
            </Typography>
            <ImageListItem>
              <img
                src={player}
                alt="Players"
                style={{
                  borderRadius: "10px",
                  width: "100%",
                  maxWidth: "180px",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </ImageListItem>
          </Box>
        </Grid2>

      </Grid2>
      <Typography
  variant="h6"
  sx={{
    marginBottom: { xs: "5px", sm: "10px" },
    fontSize: { 
      xs: "1rem",   // Mobile screens
      sm: "1.1rem",     // Small screens (e.g., larger mobile devices)
      md: "1.3rem"    // Medium screens (e.g., iPads)
    },
    color: "red",
    fontFamily: "'Kanit', sans-serif",
  }}
>
  หมายเหตุผู้คุมทีมคือ ผู้จัดการทีม ผู้ฝึกสอน ผู้ช่วยผู้ฝึกสอน และ ผู้ประสานงาน
</Typography>

    </Box>
  );
};

export default Home;
