function scrollMove(pageNumber) {
    // console.log(pageNumber)
    //서수 (first + page_content)
    const ordinalNum = pageNumber + '_page_content'
    // console.log(n)

    let location = document.querySelector("." + ordinalNum).offsetTop;
    window.scrollTo({
        top: location,
        behavior: 'smooth'
    });

}
