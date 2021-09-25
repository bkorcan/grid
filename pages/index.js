import Style from '../styles/grid.module.css'
import { Grid } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function GridHome() {

  const mx600 = useMediaQuery('(max-width:600px)')
  return (
    <Grid container className={Style.container}>

      <Grid item   style={{flexBasis: mx600 ? '45%' : '23%'}} className={Style.item}> <AddCircleIcon color='primary' /> Itme1 </Grid>
      <Grid item   style={{flexBasis: mx600 ? '45%' : '23%'}} className={Style.item}> <AddCircleIcon color='primary' /> Itme2 </Grid>

      <Grid item   style={{flexBasis: mx600 ? '45%' : '23%', marginTop: mx600 ? 10 : 0 }} className={Style.item}> <AddCircleIcon color='primary' /> Itme3 </Grid>
      <Grid item   style={{flexBasis: mx600 ? '45%' : '23%', marginTop: mx600 ? 10 : 0 }} className={Style.item}> <AddCircleIcon color='primary' /> Itme4 </Grid>

    </Grid>
  )
}
