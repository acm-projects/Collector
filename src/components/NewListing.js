import React, {useState, useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Header from "./Header/header";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Footer from './footer';
import {useAuth} from '../contexts/AuthContext';
import { useHistory} from "react-router-dom";
import { Form, Alert} from "react-bootstrap";
import {storage, db} from '../firebase';



const useStyles = makeStyles({
  title: {
    fontSize: "3rem",
    justifyContent: "center",
    alignItems: "center",
  },
  formControl: {

    minWidth: 188,
  },
  button:{
    backgroundColor:'#d3ac2b'
},
  photo:{
    minHeight:'50px',
  },
});

export default function AddressForm() {

    const classes = useStyles();
    const [avatarRef,setAvatarRef]=React.useState("https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg")
    const [itemNameRef,setItemNameRef]=React.useState("")
    const [itemPriceRef,setItemPriceRef]=React.useState("")
    const [itemDescriptionRef,setItemDescriptionRef]=React.useState("")
    const [itemSubtitleRef,setItemSubtitleRef]=React.useState("")
    const [itemConditionRef,setItemConditionRef]=React.useState("")
    const [itemCategoryRef,setItemCategoryRef]=React.useState("")
    const [itemShippingRef,setItemShippingRef]=React.useState("")
    const [itemReturnsRef,setItemReturnsRef]=React.useState("")
    const [image, setImage] = React.useState(null)
    const [progress, setProgress] = React.useState(0)
    const [url, setUrl] = React.useState("")
    const { currentUser } = useAuth()
    const [error,setError]=useState('')
    const loading=false
    const history=useHistory()
    var date = Date().toLocaleString()

    const handleChangeName = (e) => {
      setItemNameRef(e.target.value)
    }

    const handleChangePrice = (e) => {
      setItemPriceRef(e.target.value)
    }

    const handleChangeDescription = (e) => {
      setItemDescriptionRef(e.target.value)
    }

    const handleChangeSubtitle = (e) => {
      setItemSubtitleRef(e.target.value)
    }

    const handleFile = (e) => {
      if (e.target.files[0]) {
          setImage(e.target.files[0])
      }
      
  }
            
  const handleChangeCategory = (e) => {
    switch(e.target.value) {
      case 1: 
              setItemCategoryRef("Pokemon")
              break

      case 2: setItemCategoryRef("Yu-Gi-Oh")
              break

      case 3: setItemCategoryRef("Vinyl")
              break

      case 4: setItemCategoryRef("Sports Cards")
              break

      case 5: setItemCategoryRef("Games")
              break
      case 6: setItemCategoryRef("Magic the Gathering")
              break
      case 7: setItemCategoryRef("nft")
              break
      case 8: setItemCategoryRef("Other")
              break
    }
  }

  const handleChangeCondition = (e) => {
    switch(e.target.value) {
        case 1: 
                setItemConditionRef("Poor (P)")
                break

        case 2: setItemConditionRef("Acceptable (A)")
                break

        case 3: setItemConditionRef("Good (G)")
                break

        case 4: setItemConditionRef("Very Good (VG)")
                break

        case 5: setItemConditionRef("Very Good Plus (VG+)")
                break
                
        case 6: setItemConditionRef("Excellent (E)")
                break

        case 7: setItemConditionRef("Near Mint (NM)")
                break

        case 8: setItemConditionRef("Mint (M)")
                break
    }
  }

  const handleChangeShipping = (e) => {
    switch(e.target.value){
      case 1: setItemShippingRef("Shipping Available")
              break

      case 2: setItemConditionRef("Pick-Up Only")
              break
    }
  }

  const handleChangeReturns = (e) => {
    switch(e.target.value){
      case 1: setItemReturnsRef("Yes")
              break

      case 2: setItemReturnsRef("No")
              break
    }
  }


  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
        "state_changed",
        () => {
            storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then(urlImg => {
                    setUrl(urlImg)
                    console.log(urlImg)
                    addListing(urlImg)
                })
        }
    )
}

  function handleSubmit(e){
    e.preventDefault()
    try{
        if(url=="")
        {
          setError("Image has not finished uploading, hit submit again")
        }
        else
        {
          addListing()
        }
    }catch{
        setError('Failed to list item')
    }
}

  console.log(currentUser.uid)
  const parsedPrice=parseFloat(itemPriceRef)
    async function addListing(urlImg){
        await db.listings.add({
          avatar:avatarRef,
          category: itemCategoryRef,
          condition: itemConditionRef,
          date: date,
          description: itemDescriptionRef,
          image: urlImg,
          price: parsedPrice,
          returns:itemReturnsRef,
          seller: currentUser.displayName,
          subtitle:itemSubtitleRef,
          shipping: itemShippingRef,
          title: itemNameRef,
          uid: currentUser.uid
      })
      setTimeout(history.push("/"),3000)
      
    }

  return (
    <Form onSubmit={handleSubmit}>
      {error && <Alert variant="danger">{error}</Alert>}
    <React.Fragment>
      <Header />
      <br></br>
      <br></br>

      <Grid container spacing={3}>
        <Grid item xs={0} sm={1} />
        <Grid item xs={12} sm={7}>
          <Typography className={classes.title}>
            Create a new listing
          </Typography>
        </Grid>

        <Grid item xs={0} sm={4} />
        <Grid item xs={0} sm={1} />
        <Grid item xs={12} sm={7}>
          <TextField
            required
            id="title"
            name="title"
            label="Title"
            fullWidth
            variant="filled"
            value={itemNameRef} 
            onChange={handleChangeName}
          />
        </Grid>
        <Grid item xs={0} sm={4} />
        <Grid item xs={0} sm={1} />

        <Grid item xs={12} sm={7}>
          <TextField
            required
            id="price"
            name="price"
            label="Price "
            value={itemPriceRef} 
            onChange={handleChangePrice}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            fullWidth
            variant="filled"
          />
        </Grid>

        <Grid item xs={0} sm={4} />
        <Grid item xs={0} sm={1} />
        <Grid item xs={7}>
        <Typography >
            Upload an Image
          </Typography>
          <TextField
            required
            id="Uploadphoto"
            name="file"
            variant="filled"
            type="file"
            onChange={handleFile}
          />
          
          
          
        </Grid>

        <Grid item xs={0} sm={4} />
        <Grid item xs={0} sm={1} />
        <Grid item xs={7}>
          <TextField
            required
            id="description"
            name="description"
            variant="filled"
            label="Description"
            value={itemDescriptionRef} 
            onChange={handleChangeDescription}
            fullWidth
            multiline
            rows={4}
          />
        </Grid>
        <Grid item xs={0} sm={4} />
        <Grid item xs={0} sm={1} />
        <Grid item xs={12} sm={7}>
          <TextField
            required
            id="subtitle"
            name="subtitle"
            label="Subtitle"
            fullWidth
            variant="filled"
            value={itemSubtitleRef} 
            onChange={handleChangeSubtitle}
          />
        </Grid>
        <Grid item xs={0} sm={4} />
        <Grid item xs={0} sm={1} />
        <Grid item xs={7}>
          <FormControl variant='filled'className={classes.formControl}>
              
            <InputLabel htmlFor="grouped-select">Item Condition</InputLabel>
            <Select defaultValue="" id="grouped-select" onChange={handleChangeCondition}>
                
          <MenuItem value={1}>Poor (P)</MenuItem>
          <MenuItem value={2}>Acceptable (A)</MenuItem>
          <MenuItem value={3}>Good (G)</MenuItem>
          <MenuItem value={4}>Very Good (VG)</MenuItem>
          <MenuItem value={5}>Very Good Plus (VG+)</MenuItem>
          <MenuItem value={6}>Excellent (E)</MenuItem>
          <MenuItem value={7}>Near Mint (NM)</MenuItem>
          <MenuItem value={8}>Mint (M)</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={0} sm={4} />
        <Grid item xs={0} sm={1} />
        <Grid item xs={12} sm={7}>
        <FormControl variant='filled'className={classes.formControl}>
              
              <InputLabel htmlFor="grouped-select">Category</InputLabel>
              <Select defaultValue="" id="grouped-select" onChange={handleChangeCategory} onChange={handleChangeCategory}>
                  
            <MenuItem value={1}>Pokemon</MenuItem>
            <MenuItem value={2}>Yu-Gi-Oh</MenuItem>
            <MenuItem value={3}>Vinyl</MenuItem>
            <MenuItem value={4}>Sports Cards</MenuItem>
            <MenuItem value={5}>Games</MenuItem>
            <MenuItem value={6}>Magic the Gathering</MenuItem>
            <MenuItem value={7}>NFT</MenuItem>
            <MenuItem value={8}>Other</MenuItem>
           
              </Select>
            </FormControl>
        </Grid>
        <Grid item xs={0} sm={4} />
        <Grid item xs={0} sm={1} />
        <Grid item xs={12} sm={7}>
        <FormControl variant='filled'className={classes.formControl}>
              
              <InputLabel htmlFor="grouped-select">Shipping Options</InputLabel>
              <Select defaultValue="" id="grouped-select" onChange={handleChangeShipping}>
                  
              <MenuItem value={1}>Shipping Available</MenuItem>
              <MenuItem value={2}>Pick Up Only</MenuItem>
            
              </Select>
            </FormControl>
        </Grid>
        <Grid item xs={0} sm={4} />
        <Grid item xs={0} sm={1} />
        <Grid item xs={12} sm={7}>
        <TextField
          id="shipping"
          label="Shipping Cost"
          type="number"
          variant="filled"

          InputLabelProps={{
            shrink: true,
            
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">$</InputAdornment>
            ),
          }}
        />
        </Grid>
        <Grid item xs={0} sm={4} />
        <Grid item xs={0} sm={1} />
        <Grid item xs={12} sm={7}>
        <FormControl variant='filled'className={classes.formControl}>
              
              <InputLabel htmlFor="grouped-select">Returns Accepted?</InputLabel>
              <Select defaultValue="" id="grouped-select" onChange={handleChangeReturns}>
          
              <MenuItem value={1}>Yes</MenuItem>
              <MenuItem value={2}>No</MenuItem>
            
              </Select>
            </FormControl>
        </Grid>
        <Grid item xs={0} sm={4} />
        <Grid item xs={0} sm={1} />
        <Grid item xs={7}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Check this box to accept our terms and concitions"
          />
        </Grid>

        <Grid item xs={0} sm={4} />
        <Grid item xs={0} sm={1} />
        <Grid item xs={7}>
        <Button className={classes.button} size="large" onClick={handleUpload}>Sell Item!</Button>
        </Grid>
        <Grid item xs={0} sm={4} />

  
      </Grid>
    </React.Fragment>
    </Form>
  );
}
