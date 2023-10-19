import React from 'react'
import {Grid} from '@material-ui/core'
import { PhotoSizeSelectActual } from '@mui/icons-material';
function Gridsystem() {
  return (
    <Grid>
      <Grid item lg={3} xs={12} sm={6}>
        <h1 style={{ backgroundColor: "yellowgreen" }}>Block 1</h1>
      </Grid>
      <Grid item lg={3} xs={12} sm={6}>
        <h1 style={{ backgroundColor: "yellowgreen" }}>Block 2</h1>
      </Grid>
      <Grid item lg={3} xs={12} sm={6}>
        <h1 style={{ backgroundColor: "yellowgreen" }}>Block 3</h1>
      </Grid>
      <Grid item lg={3} xs={12} sm={6}>
        <h1 style={{ backgroundColor: "yellowgreen" }}>Block 4</h1>
      </Grid>
    </Grid>
  );
}

export default Gridsystem


// lg = windows size
// xs = mobile size
// sm = tablet size