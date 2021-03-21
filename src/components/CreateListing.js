import React , {useRef,useState} from "react"
import { Form,Button,Card,Alert} from "react-bootstrap"
import {useAuth} from '../contexts/AuthContext'
import {Link} from "react-router-dom"
import {db} from '../firebase'

export default function CreateListing() {
    const [itemNameRef,setItemNameRef]=React.useState("")
    const [itemPriceRef,setItemPriceRef]=React.useState("")
    const [itemCategoryRef,setItemCategoryRef]=React.useState("")
    const [listingTypeRef,setListingTypeRef]=React.useState("")
    const {currentUser,logout}=useAuth()
    const [error,setError]=useState('')
    const [loading,setLoading]=useState(false)
    var date = Date().toLocaleString()


    async function handleSubmit(e){
        e.preventDefault()
        try{
            await addListing()
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
        console.log(e.target.value)
        setItemNameRef(e.target.value)
      }

      const handleChangeItemPrice = (e) => {
        console.log(e.target.value)
        setItemPriceRef(e.target.value)
      }
      const handleChangeItemCategory = (e) => {
        console.log(e.target.value)
        setItemCategoryRef(e.target.value)
      }
      const handleChangeListingType = (e) => {
        console.log(e.target.value)
        setListingTypeRef(e.target.value)
      }
    

    const parsedPrice=parseFloat(itemPriceRef)
    function addListing(){
        db.listings.add({
            itemName: itemNameRef,
            itemPrice: parsedPrice,
            itemCategory: itemCategoryRef,
            listingType: listingTypeRef,
            owner: currentUser.displayName,
            uid: currentUser.uid,
            status: "on-sale",
            saleDate: date
        })
    }
    /*Created a dummy "create listing" page. We are now capable of posting listings to our website.*/
    return (
        <>
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
                    <Button disabled={loading} className="w-100" type="submit">Create Listing</Button>
                </Form>
                </Card.Body>
            </Card>
        <div className="w-100 text-center mt-2">
                    <Link to="/"> Back to dashboard</Link>
        </div>
        </>
    )
}


