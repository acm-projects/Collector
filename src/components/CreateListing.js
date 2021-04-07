import React , {useState} from "react"
import { Form,Button,Card,Alert} from "react-bootstrap"
import {useAuth} from '../contexts/AuthContext'
import {Link,useHistory} from "react-router-dom"
import {storage, db} from '../firebase'
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme(
  {
  palette: {
    primary: {
      light: '#5e677d',
      main: '#333d51',
      dark: '#0b1729',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffdd5e',
      main: '#d3ac2b',
      dark: '#9e7d00',
      contrastText: '#000',
    },
  },
});

export default function CreateListing() {
    const [itemNameRef,setItemNameRef]=React.useState("")
    const [itemPriceRef,setItemPriceRef]=React.useState("")
    const [itemCategoryRef,setItemCategoryRef]=React.useState("")
    const [listingTypeRef,setListingTypeRef]=React.useState("")
    const [image, setImage] = React.useState(null)
    const [progress, setProgress] = React.useState(0)
    const [url, setUrl] = React.useState("")
    const currentUser = useAuth()
    const [error,setError]=useState('')
    const loading=false
    const history=useHistory()
    var date = Date().toLocaleString()

    
    if(!currentUser)
    {
        history.push('/login')
    }
    function handleSubmit(e){
        e.preventDefault()
        try{
            addListing()
        }catch{
            console.log(itemNameRef)
            console.log(parsedPrice)
            console.log(itemCategoryRef)
            console.log(listingTypeRef)
            console.log(currentUser.displayName)
            console.log(currentUser.uid)
            setError('Failed to list item')
        }
    }

    const handleChangeItemName = (e) => {
        setItemNameRef(e.target.value)
    }

    const handleChangeItemPrice = (e) => {
        setItemPriceRef(e.target.value)
    }
    const handleChangeItemCategory = (e) => {
        setItemCategoryRef(e.target.value)
    }
    const handleChangeListingType = (e) => {
        setListingTypeRef(e.target.value)
    }

    const handleFile = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
        
    }
    console.log("image: ", image)

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress); 
            },
            error => {
                console.log(error);
                alert(error);
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(urlImg => {
                        setUrl(urlImg)
                        console.log(urlImg)
                    })
            }
        )
    }
    

    const parsedPrice=parseFloat(itemPriceRef)
    async function addListing(){
       await db.listings.add({
            itemName: itemNameRef,
            itemPrice: parsedPrice,
            itemCategory: itemCategoryRef,
            listingType: listingTypeRef,
            owner: currentUser.displayName,
            uid: currentUser.uid,
            status: "on-sale",
            saleDate: date,
            url: url
        })
    }
    /*Created a dummy "create listing" page. We are now capable of posting listings to our website.*/
    return (
        <>
        <ThemeProvider theme={theme}>
        <Card>
                <Card.Body>
                <h2 className="text-center mb-4">Sell Something!</h2>  
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="Name">
                        <Form.Label>Item Name</Form.Label>
                        <Form.Control value={itemNameRef} onChange={handleChangeItemName} required/>
                    </Form.Group>
                    <Form.Group id="Price">
                        <Form.Label>Price (USD)</Form.Label>
                        <Form.Control value={itemPriceRef} onChange={handleChangeItemPrice} required/>
                    </Form.Group>
                    <Form.Group id="Category">
                        <Form.Label>Category</Form.Label>
                        <Form.Control value={itemCategoryRef} onChange={handleChangeItemCategory} required/>
                    </Form.Group>
                    <Form.Group id="Listing Type">
                        <Form.Label>Listing Type</Form.Label>
                        <Form.Control value={listingTypeRef} onChange={handleChangeListingType} required/>
                    </Form.Group>
                    <progress value={progress} max="100"/>
                    <input type="file" onChange={handleFile} />
                    {/* <Button disabled={loading} className="w-100" onClick={handleUpload}>Upload Image</Button> */}
                    <Button disabled={loading} className="w-100" onClick={handleUpload} type="submit">Create Listing</Button>
                </Form>
                </Card.Body>
            </Card>
        </ThemeProvider>
        <div className="w-100 text-center mt-2">
                    <Link to="/"> Back to dashboard</Link>
        </div>        
        </>
    )
}


