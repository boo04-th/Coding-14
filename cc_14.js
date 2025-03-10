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
