const listItemElement = document.querySelectorAll('.item')


listItemElement.forEach((value,ind) => {
    value.onclick = () => {
        const isValid = value.className.includes('active')

        if(isValid) return 
        else {
            // Remove old class
            listItemElement.forEach(value => 
                {
                    if(value.className.includes('active')) 
                        value.classList.remove('active')
                })

            // Add new class
            value.classList.add('active')
        }
    }
})

