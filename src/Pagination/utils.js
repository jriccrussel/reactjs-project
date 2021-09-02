const paginate = (followers) => {
    const itemsPerPage = 10
    const numPages = Math.ceil(followers.length / itemsPerPage)
    
    // Creating new array(new data) base sa number of 'itemsPerPage'
    const newFollowers = Array.from({ length: numPages }, (_, index) => {
        // start sa index
        // 'index' comes from '(_,index)'
        const start = index * itemsPerPage

        // 'start + itemsPerPage' ang last 
        // '.slice' - kini na method getting the data from followers set up a new data in which this moment ang data will be displayed by 10
        return followers.slice(start, start + itemsPerPage)
    })
  
    return newFollowers
  }
  
export default paginate
