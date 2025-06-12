export async function deleteWishlist(id) {
    try {
        let token =localStorage.getItem("token")
        const response = await fetch(`https://ecomerceapis.runasp.net/api/WishList/DeleteWishListItem/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json-patch+json",
                "Authorization": `Bearer ${token}`,
            }
        })

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Failed to Delete Wishlist", error);
    }
}