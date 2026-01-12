exports.googlemaps = (address) => {
  // URL encode the address for use in the Google Maps embed URL
  const encodedAddress = encodeURIComponent(address);
  return `<iframe width="100%" height="320" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps?q=${encodedAddress}&amp;ie=UTF8&amp;t=m&amp;z=15&amp;output=embed" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
};
