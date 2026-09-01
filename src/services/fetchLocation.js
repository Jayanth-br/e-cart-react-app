async function getAddressFromCoordinates(lat, lng) {
  try {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`;

    const response = await fetch(url);
    const data = await response.json();

    if (data && data.address) {
      const address = data.address;

      // Extract specific fields
      const state = address.state || address.region || "";
      const city = address.city || address.town || address.village || address.suburb || "";
      const pincode = address.postcode || "";
      const fullAddress = data.display_name;

      console.log("State:", state);
      console.log("City:", city);
      console.log("Pincode:", pincode);
      console.log("Full Address:", fullAddress);

      return {
        state,
        city,
        pincode,
        fullAddress,
        rawDetails: address,
      };
    }
  } catch (error) {
    console.error("Failed to reverse geocode coordinates:", error);
  }
}

export default getAddressFromCoordinates;