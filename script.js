//your JS code here. If required.
document.getElementById('removeButton').addEventListener('click', function() {
    const select = document.getElementById('colorSelect');
    const selectedValue = select.value;

    // Remove the selected option from the dropdown
    for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].value === selectedValue) {
            select.remove(i);
            break; // Exit the loop after removing the item
        }
    }
});

