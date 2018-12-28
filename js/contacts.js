'use strict';

document.addEventListener('DOMContentLoaded', function(){
    console.log('Contacts');
    // getContactsFromJSON();
});


function getContactsFromJSON() {
    var tableContainer = document.querySelector('#table-container');
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'php/getContacts.php', true);

    xhr.onload = function () {
        if (this.status == 200) {
            var lists = JSON.parse(this.responseText);
            
            var output = '';
            for (var i in lists) {
                output += '<div class="one-shopping-list" onclick="showList('+ 
                 lists[i].id+')"><p class="list-name">'
                    + lists[i].name +
                    '</p><p class="list-created">Added:'+ lists[i].createDate +'</p><p class="list-created">Updated:'+ lists[i].updateDate +'</p></div>';
            }
            if(output == ''){
                output += '<div class="one-shopping-list"><p class="list-name">'
                    + 'No records' +
                    '</p></div>';
            }
            tableContainer.innerHTML = output;
        }
    }

    xhr.send();
}
