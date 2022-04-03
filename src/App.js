import React from "react";
import "./App.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import "animate.css";

export default function App() {
  const handleClick = (buttonValue, soundId) => {
    document.getElementById(buttonValue).play();
    const display = document.getElementById("display");
    display.innerText = soundId.replace(/-/g, " ");
    display.classList.add("animate__flash");
    display.addEventListener("animationend", () => {
      display.classList.remove("animate__flash");
    });
  };

  const renderButtonRow = (
    buttonValue1,
    buttonValue2,
    buttonValue3,
    soundId1,
    soundId2,
    soundId3,
    soundUrl1,
    soundUrl2,
    soundUrl3
  ) => {
    return (
      <Grid
        container
        sx={{ my: "1rem", gap: "0.5rem", justifyContent: "center" }}
      >
        <Grid item>
          <Button
            variant="contained"
            sx={{ py: "1.8rem", px: "2.5rem", fontWeight: "bold" }}
            className="drum-pad"
            id={soundId1}
            onClick={() => handleClick(buttonValue1, soundId1)}
          >
            <audio src={soundUrl1} className="clip" id={buttonValue1} />
            {buttonValue1}
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            sx={{ py: "1.8rem", px: "2.5rem", fontWeight: "bold" }}
            className="drum-pad"
            id={soundId2}
            onClick={() => handleClick(buttonValue2, soundId2)}
          >
            <audio src={soundUrl2} className="clip" id={buttonValue2} />
            {buttonValue2}
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            sx={{ py: "1.8rem", px: "2.5rem", fontWeight: "bold" }}
            className="drum-pad"
            id={soundId3}
            onClick={() => handleClick(buttonValue3, soundId3)}
          >
            <audio src={soundUrl3} className="clip" id={buttonValue3} />
            {buttonValue3}
          </Button>
        </Grid>
      </Grid>
    );
  };

  React.useEffect(() => {
    const handleKeydown = (e) => {
      const exists = document.getElementById(String(e.key).toUpperCase());
      if (exists) {
        let buttonValue = String(e.key).toUpperCase();
        let soundId = exists.parentElement.id;
        handleClick(buttonValue, soundId);
      }
    };

    document.addEventListener("keydown", (e) => handleKeydown(e));

    return () => {
      document.removeEventListener("keydown", (e) => handleKeydown(e));
    };
  }, []);

  return (
    <Container sx={{ height: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Card
          sx={{
            backgroundColor: "#1e1e1e",
            color: "#fff",
            maxWidth: "min-content",
          }}
          className="animate__animated animate__fadeInDown"
          id="drum-machine"
        >
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Paper
                sx={{
                  bgcolor: "green",
                  py: 5,
                  mb: "1rem",
                  color: "#fff",
                  minWidth: "20rem",
                  textAlign: "center",
                }}
              >
                <p className="animate__animated" id="display">
                  Welcome to the Drum Machine!
                </p>
              </Paper>
            </Box>
            <Grid container>
              {renderButtonRow(
                "Q",
                "W",
                "E",
                "Heater",
                "Clap",
                "Open-HH",
                "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
                "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
                "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
              )}
              {renderButtonRow(
                "A",
                "S",
                "D",
                "Kick-n-Hat",
                "Kick",
                "Closed-HH",
                "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
                "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
                "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
              )}
              {renderButtonRow(
                "Z",
                "X",
                "C",
                "Chord",
                "Snare",
                "Shaker",
                "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
                "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
                "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
              )}
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
