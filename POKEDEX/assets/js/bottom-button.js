function changeToReturnButton() {
  loadMoreButton.id = 'returnButton'
  loadMoreButton.innerHTML = `<label>Return</label>`
}
function returnHome(closingFilter = false) {
  loadMoreButton.id = 'loadMoreButton'
  loadMoreButton.innerHTML = `<label>Load More</label>`
}
// Button Return >> Button Load More
loadMoreButton.addEventListener('click', () => {
  if (loadMoreButton.id === 'returnButton') {
    returnHome(true)
  }
})
