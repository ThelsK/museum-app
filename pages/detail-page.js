// The message to be displayed when the user includes inappropriate language in their message.
const warnMsg = "Warning! The following message contains inappropriate language!"

// The regex that checks for inappropriate language.
const inappropriate = /inappropriate|language/i

// Submit the comment.
function submitComment() {

    // Grab the name and message that were submitted.
    let name = document.getElementById("name").value
    let msg = document.getElementById("msg").value

    // Trim the name and msg.
    name = name.trim()
    msg = msg.trim()

    // Validate the name and message.
    if (!validateComment(name, msg)) {
        return
    }

    // Capitalize the first letter of the name.
    name = name[0].toUpperCase() + name.slice(1)

    // Create new elements to display the name and message.
    const comment = document.createElement("section")
    const h3 = document.createElement("h3")
    const warn = document.createElement("p")
    const p = document.createElement("p")

    // Assign classes to the new elements for .css styling.
    comment.classList.add("comment")
    warn.classList.add("warning")

    // Apply the name and message to the new elements.
    h3.innerHTML = `${name} said:`
    warn.innerHTML = warnMsg
    p.innerHTML = `"${msg}"`

    // Add the name to the comment.
    comment.appendChild(h3)

    // If the message contains inappropriate language, add the warning to the comment.
    if (inappropriateComment(msg)) {
        comment.appendChild(warn)
    }

    // Add the message to the comment.
    comment.appendChild(p)

    // Add the comment to the comment section.
    document.getElementById("comments").appendChild(comment)

    // Empty the input elements.
    document.getElementById("name").value = null
    document.getElementById("msg").value = null
}

// Validate a name and msg combination.
function validateComment(name, msg) {

    // Check if the user entered a name, and check the length of the name.
    if (!name) {
        alert('You forgot to enter your name!\n\nPlease enter your name or nickname, and then try again.')
        return false
    }
    if (name.length > 30) {
        alert('Your name is too long!\n\nPlease do not use more than 30 characters.')
        return false
    }

    // Check if the user entered a message, and check the length of the message.
    if (!msg) {
        alert('You forgot to include a message!\n\nPlease include a message, and then try again.')
        return false
    }
    if (msg.length > 280) {
        alert('Your message is too long!\n\nPlease do not use more than 280 characters.')
        return false
    }

    // The name and comment are okay.
    return true
}

// Check a message for inappropriate language.
function inappropriateComment(msg) {

    // Check if the message contains the words 'inappropriate' or 'language'.
    
    if (inappropriate.test(msg)) {
        return true
    }
    
    // No inappropriate language was found.
    return false
}