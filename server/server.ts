import express, { Application, Request, Response } from "express";
import cors from "cors";
const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.listen(5050, () => {
  console.log("listening on 5050");
});
app.get("/", (req: Request, res: Response): void => {
  res.send("Server is ready");
});
var currentState = "blue";
var yellowVisited = false;
app.post("/transition/:state", (req: Request, res: Response): Response | void => {
  let nextState = req.params.state;
  if (!["blue", "yellow", "green"].includes(nextState)) {
    return res.sendStatus(400);
  } else {
    switch (nextState) {
      case "blue":
        break;
      case "yellow":
        if (yellowVisited || currentState === "green") {
          return res.sendStatus(400);
        }
        yellowVisited = true;
        break;
      case "green":
        if (currentState === "yellow") {
          return res.sendStatus(400);
        }
        break;
    }
  }
  currentState = nextState;
  return res.status(200).json({ currentState, yellowVisited });
});

app.post("/reset", (req: Request, res: Response): void => {
  currentState = "blue";
  yellowVisited = false;
  res.status(200).json({ currentState, yellowVisited });
});
app.get("/current-state", (req: Request, res: Response): void => {
  res.status(201).json({ currentState, yellowVisited });
});
