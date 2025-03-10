// Task 2: Adding Support Tickets Dynamically

function createSupportTicket(customerName, issueDisc, priorityLevel) {

    const ticketContainer = document.getElementById('ticketContainer'); // Select the ticket container where tickets will be appended

    const csTicket = document.createElement('div'); // Creating a ticket container (div)
    csTicket.setAttribute('class', 'supportTicket'); // Assigning a class to the support ticket for styling

    const heading = document.createElement('h3'); // Creating a heading element for the customer name
    heading.textContent = customerName; // Setting the customer's name as the text content

    const paragraph = document.createElement('p'); // Creating a paragraph element for the issue description
    paragraph.textContent = issueDisc; // Setting the issue description as the text content

    const label = document.createElement('label'); // Creating a label element for priority level
    label.textContent = `Priority Level: ${priorityLevel}`; // Displaying the priority level

    const resolveButton = document.createElement('button'); // Creating a button to resolve the ticket
    resolveButton.textContent = 'Resolve'; // Setting button text to "Resolve"

    // Appending elements to the ticket container
    csTicket.appendChild(heading); // Adding customer name to the ticket
    csTicket.appendChild(paragraph); // Adding issue description to the ticket
    csTicket.appendChild(label); // Adding priority level to the ticket
    csTicket.appendChild(resolveButton); // Adding resolve button to the ticket

      // Task 3: Highlight High Priority Tickets
      if (priorityLevel === 'High') {
        csTicket.classList.add('HighPriority'); // Assigning a class for high-priority tickets for styling
    }

    // Task 5: Implementing Inline Editing

    const editButton = document.createElement('button'); // Creating an Edit button for modifying ticket details
    editButton.textContent = 'Edit Ticket'; // Setting button text to "Edit Ticket"

    csTicket.append(editButton); // Appending the edit button to the support ticket

    // Event listener for editing the ticket details
    editButton.addEventListener('click', (event) => {
        const nameInput = document.createElement('input'); // Creating an input field for editing customer name
        nameInput.value = heading.textContent; // Pre-filling with the existing name

        const discInput = document.createElement('input'); // Creating an input field for editing issue description
        discInput.value = paragraph.textContent; // Pre-filling with the existing issue description

        const priorityLevelInput = document.createElement('select'); // Creating a dropdown for editing priority level
        ["Low", "Medium", "High"].forEach(level => {
            const option = document.createElement('option');
            option.value = level;
            option.textContent = level;
            if (level === priorityLevel) option.selected = true; // Pre-selecting the current priority
            priorityLevelInput.appendChild(option);
        });

        const saveButton = document.createElement('button'); // Creating a save button to save changes
        saveButton.textContent = 'Save Changes'; // Setting button text to "Save Changes"

        // Event listener for saving edited ticket details
        saveButton.addEventListener('click', (event) => {
            heading.textContent = nameInput.value; // Updating the customer name
            paragraph.textContent = discInput.value; // Updating the issue description
            label.textContent = `Priority Level: ${priorityLevelInput.value}`; // Updating priority level
            csTicket.setAttribute('data-priority', priorityLevelInput.value); // Updating the priority data attribute

            // Removing input fields and save button after saving
            nameInput.replaceWith(heading);
            discInput.replaceWith(paragraph);
            priorityLevelInput.replaceWith(label);
            saveButton.remove();

            selectHighPriorityTickets(); // Reapply high-priority highlighting if priority was changed
        });

        // Replacing static text with input fields for editing
        heading.replaceWith(nameInput);
        paragraph.replaceWith(discInput);
        label.replaceWith(priorityLevelInput);
        csTicket.appendChild(saveButton);
    });
    // Task 4: Implementing Ticket Resolution

    resolveButton.addEventListener('click', (event) => {
        console.log(heading.textContent, "Support Ticket Resolved"); // Logging a message when the resolve button is clicked
        csTicket.remove(); // Removing the support ticket from the DOM
        
        event.stopPropagation(); // Prevents bubbling up to parent elements
    });

    // Event listener to log a message when a ticket is clicked
    csTicket.addEventListener('click', (event) => {
        console.log(heading.textContent, "Support Ticket Clicked"); // Logs a message when a support ticket is clicked
    });

    ticketContainer.appendChild(csTicket); // Appending the support ticket to the ticket container div
}

// Creating sample support tickets
createSupportTicket("Jennie Lu", "Payment Issue", "High"); 
createSupportTicket("Chloe Nguyen", "Password incorrect", "Low"); 
createSupportTicket("Janet Tran", "Systems unprocessed", "High"); 


