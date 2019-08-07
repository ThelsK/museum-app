function submitComment() {

    // Grab the name and message that were submitted.
    const name = document.getElementById("name").value
    const msg = document.getElementById("msg").value

    // Create new elements to display the name and message.
    const comment = document.createElement("section")
    const h3 = document.createElement("h3")
    const p = document.createElement("p")

    // Apply the name and message to the new elements.
    h3.innerHTML = `${name} said:`
    p.innerHTML = msg

    // Add the new elements to the website.
    comment.classList.add("comment")
    comment.appendChild(h3)
    comment.appendChild(p)
    document.getElementById("comments").appendChild(comment)

    // Empty the input elements.
    document.getElementById("name").value = null
    document.getElementById("msg").value = null
}