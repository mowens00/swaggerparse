var data = [{
    method: "GET",
    path: "/v1/Places/{placeId}/Theme"
}, {
    method: "GET",
    path: "/v2/Places/Groups"
}, {
    method: "GET",
    path: "/v1/Places/{placeId}/FeaturedItems"
}, {
    method: "GET",
    path: "/v1/Places/{placeId}/ExplorerConfig"
}, {
    method: "GET",
    path: "/v1/Places/{placeId}/UIConfig"
}, {
    method: "GET",
    path: "/v1/Places/{placeId}"
}, {
    method: "GET",
    path: "/v1/Places/{placeId}/Info"
}, {
    method: "GET",
    path: "/v1/Places/Groups/WithWaitTime"
}, {
    method: "POST",
    path: "/v1/Places/{placeId}/Transportation/Valet"
}, {
    method: "POST",
    path: "/v1/Places/{placeId}/Transportation"
}, {
    method: "GET",
    path: "/v1/Navigation/Mobile"
}, {
    method: "GET",
    path: "/v1/Place/{placeId}/Config"
}, {
    method: "GET",
    path: "/v1/Places/{placeId}/MobileMoreConfig"
}, {
    method: "GET",
    path: "/v1/Applications/me/config"
}, {
    method: "GET",
    path: "/v1/images"
}, {
    method: "GET",
    path: "/v2/Images/Thumbnail"
}, {
    method: "GET",
    path: "/v1/Users/Me"
}, {
    method: "POST",
    path: "/v1/Users/Account"
}, {
    method: "PUT",
    path: "/v1/Users/Account"
}, {
    method: "POST",
    path: "/v1/Users/Me/Password"
}, {
    method: "POST",
    path: "/v2/Users/Password/ForgotPush Notification"
}, {
    method: "PUT",
    path: "/v1/Users/Me/PersonalDevices"
}, {
    method: "DELETE",
    path: "/v1/Users/Me/PersonalDevices/{personalDeviceId}Click-Tracking"
}, {
    method: "POST",
    path: "/v1/Clicktrack"
}, {
    method: "GET",
    path: "/v1/places/{placeId}/beacons"
}, {
    method: "PUT",
    path: "/v1/Beacons/{identifier}/Users/MeEvents"
}, {
    method: "GET",
    path: "/v1/places/{placeId}/eventgroups/{id}"
}, {
    method: "GET",
    path: "/v2/places/{placeId}/events"
}, {
    method: "GET",
    path: "/v2/places/{placeId}/events/{id}"
}, {
    method: "POST",
    path: "/v2/places/{placeId}/events/actions/validateAmenities"
}, {
    method: "GET",
    path: "/v1/Place/{placeId}/Amenities/{amenityId}"
}, {
    method: "GET",
    path: "/v2/Place/{placeId}/AmenitiesFlights"
}, {
    method: "GET",
    path: "/v1/Flights"
}, {
    method: "GET",
    path: "/v1/Flights/Airports"
}, {
    method: "GET",
    path: "/v1/Places/{placeId}/HotelAirportMaps"
}, {
    method: "GET",
    path: "/v1/Places/{placeId}/Maps/{mapId}"
}, {
    method: "GET",
    path: "/v1/Places/{placeId}/MapsMenus"
}, {
    method: "GET",
    path: "/v1/Places/{placeId}/Menus"
}, {
    method: "GET",
    path: "/v1/Menus/Sections/{sectionId}/Items"
}, {
    method: "GET",
    path: "/v1/Menus/Sections/{sectionId}"
}, {
    method: "GET",
    path: "/v1/Menus/Sections/Items/{menuItemId}"
}, {
    method: "GET",
    path: "/v1/Menus/{menuId}/Sections"
}, {
    method: "GET",
    path: "/v1/Menus/{menuId}"
}, {
    method: "POST",
    path: "/v1/Places/{placeId}/Features/RoomService/Cart/Checkout"
}, {
    method: "POST",
    path: "/v1/Places/{placeId}/Features/{featureId}/Cart/Checkout"
}, {
    method: "PUT",
    path: "/v1/places/{placeId}/features/RoomService/Cart/Items/{id}"
}, {
    method: "DELETE",
    path: "/v1/Places/{placeId}/Features/RoomService/Cart/Items/{id}"
}, {
    method: "PUT",
    path: "/v1/places/{placeId}/features/{featureId}/Cart/Items/{id}"
}, {
    method: "DELETE",
    path: "/v1/Places/{placeId}/Features/{featureId}/Cart/Items/{id}"
}, {
    method: "POST",
    path: "/v1/Places/{placeId}/Features/RoomService/Cart/Items"
}, {
    method: "POST",
    path: "/v1/Places/{placeId}/Features/{featureId}/Cart/Items"
}, {
    method: "GET",
    path: "v1/Places/{placeId}/Features/RoomService/Cart"
}, {
    method: "DELETE",
    path: "/v1/Places/{placeId}/Features/RoomService/Cart"
}, {
    method: "GET",
    path: "/v1/Places/{placeId}/Features/{featureId}/Cart"
}, {
    method: "DELETE",
    path: "/v1/Places/{placeId}/Features/{featureId}/Cart"
}, {
    method: "GET",
    path: "/v2/places/{placeId}/postcards"
}, {
    method: "POST",
    path: "/v1/Postcards/{id}/actions/linkRecommendations"
}, {
    method: "GET",
    path: "/v1/Places/{placeId}/NearbyRecommendations"
}, {
    method: "GET",
    path: "/v1/Places/{placeId}/Recommendations/{enterpriseLocationId}"
}, {
    method: "GET",
    path: "/v2/Places/{placeId}/Recommendations/Categories/{categoryId}"
}, {
    method: "GET",
    path: "/v2/Places/{placeId}/Recommendations/CategoriesRequests"
}, {
    method: "GET",
    path: "/v1/Users/Me/CheckIn/{placeId}"
}, {
    method: "GET",
    path: "/v1/Places/{placeId}/Users/Me/Status"
}, {
    method: "GET",
    path: "/v1/Users/Me/Requests/{requestId}"
}, {
    method: "PUT",
    path: "/v1/Users/Me/Requests"
}, {
    method: "GET",
    path: "/v2/Users/Me/Requests"
}, {
    method: "PUT",
    path: "/v1/Users/Me/Requests/{requestId}/Actions/{lastViewedRequestActionId}/LastViewed"
}, {
    method: "GET",
    path: "/v2/Users/Me/Requests/{requestId}/Actions"
}, {
    method: "GET",
    path: "/v2/Places/{placeId}/Anonymous/Requests/{requestId}/Actions"
}, {
    method: "POST",
    path: "/v2/Requests/{requestId}/Messages"
}, {
    method: "POST",
    path: "/v1/Places/{placeId}/Requests/Anonymous/Messages"
}, {
    method: "GET",
    path: "/v2/Places/{placeId}/Requests/Templates/Search"
}, {
    method: "GET",
    path: "/v2/Places/{placeId}/Requests/Templates"
}, {
    method: "GET",
    path: "/v2/Places/{placeId}/Requests/Templates/{id}"
}, {
    method: "GET",
    path: "/v1/Places/{placeId}/Requests/Categories"
}, {
    method: "GET",
    path: "/v1/Places/{placeId}/Requests/Categories/{categoryId}"
}, {
    method: "GET",
    path: "/v1/Users/Anonymous/Requests/{requestId}"
}, {
    method: "GET",
    path: "/v1/Users/Anonymous/Requests"
}, {
    method: "PUT",
    path: "/v1/Places/{placeId}/Requests/Anonymous"
}, {
    method: "PUT",
    path: "/v1/Anonymous/PersonalDevices/{deviceId}/Requests/{requestId}Requests-Error"
}, {
    method: "PUT",
    path: "/v1/Places/{placeId}/Users/Me/Status"
}, {
    method: "PUT",
    path: "/v1/Users/Anonymous/Requests"
}, {
    method: "PUT",
    path: "/v1/Users/Anonymous/Requests/{requestId}"
}, {
    method: "PUT",
    path: "/v2/Users/Me/Requests/{requestId}/ActionsUser Account"
}, {
    method: "POST",
    path: "/v2/Users/SendVerificationEmail"
}, {
    method: "PUT",
    path: "/v2/Users/Me"
}, {
    method: "GET",
    path: "/v2/Users/Me"
}, {
    method: "GET",
    path: "/v1/Users/Me/Stays"
}, {
    method: "GET",
    path: "/v1/Proxce/FBAvailability"
}, {
    method: "DELETE",
    path: "/v1/Proxce/DeleteFBReservation"
}, {
    method: "PUT",
    path: "/v2/Proxce/UpdateReservation"
}, {
    method: "POST",
    path: "/v2/Proxce/CreateReservation"
}, {
    method: "GET",
    path: "/v1/Proxce/GetReservationsWithResId"
}, {
    method: "POST",
    path: "/v2/Proxce/ConfirmStay"
}, {
    method: "GET",
    path: "/v1/Proxce/GetReservations"
}, {
    method: "PUT",
    path: "/v1/Proxce/Profile"
}, {
    method: "POST",
    path: "/v1/Proxce/RegisterProfile"
}, {
    method: "POST",
    path: "/v1/users/me/places/{placeId}/checkout"
}, {
    method: "POST",
    path: "/v1/users/me/places/{placeId}/checkin"
}, {
    method: "POST",
    path: "/v1/property/{propertyKey}/checkin"
}, {
    method: "PUT",
    path: "/v1/Users/Me/Surveys/{surveyId}/Questions/{questionId}"
}, {
    method: "GET",
    path: "/v1/Surveys"
}, {
    method: "GET",
    path: "/v1/Users/Me/Surveys/{surveyId}"
}, {
    method: "PUT",
    path: "/v1/Users/Me/Subscriptions"
}, {
    method: "GET",
    path: "/v1/Users/Me/Subscriptions"
}, {
    method: "GET",
    path: "/v1/SubscriptionsWayfinding"
}, {
    method: "GET",
    path: "/v1/Places/{placeId}/Wayfinding/Features/{placemarkId}Weather"
}, {
    method: "GET",
    path: "/v1/Places/{placeId}/Weather"
}, {
    method: "GET",
    path: "/v1/Weather"
}, {
    method: "GET",
    path: "/v1/Weather/Places"
}, {
    method: "GET",
    path: "/v1/Weather/Places/{placeId}/Historical/{month}"
}, {
    method: "GET",
    path: "/v1/weather/Historical/{month}"
}];

exports.data = data;