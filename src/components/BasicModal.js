import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  color: "primary",
  p: 4,
};

export default function BasicModal({ details }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button className="modal-btn" onClick={handleOpen}>
        Details
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Directions 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
       <p> SAVE RECIPE Step 1 Cook the udon noodles according to
            package directions.</p> <br/>
            <p>Step 2 Meanwhile, in a small bowl, combine the
            soy sauce, sugar, pepper, 1 teaspoon cornstarch and 1/4 cup water
            until smooth. </p><br/>
            <p>  Step 3 Lightly press the tofu with paper towels to
            remove excess liquid. Cut into 3/4-inch pieces and toss in the
            remaining 2 tablespoons cornstarch. </p><br/>
            <p>Step 4 Heat a large skillet over
            medium-high heat. Add 2 tablespoons oil and then the tofu and cook
            until golden brown on all sides, 6 to 8 minutes total. Transfer to a
            plate and wipe out the skillet. </p><br/>
            <p>Step 5 Add the remaining tablespoon
            oil to the pan and cook scallions, the ginger, garlic and 1/2 of the
            red chili for 1 minute. Add bok choy; cook, tossing, for 2 minutes.</p><br/>
            <p>Step 6 Return the tofu to the pan, toss to combine, then add the soy
            sauce mixture and let simmer, tossing everything together to make a
            sticky sauce, 1 to 2 minutes. </p><br/>
            <p>Step 7 Spoon over the noodles and top
            with the scallions and remaining red chile. Sprinkle with the
            peanuts.</p>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
