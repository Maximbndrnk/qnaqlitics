'use strict';

document.addEventListener('DOMContentLoaded', function () {
    getContactsFromJSON();
});


function getContactsFromJSON() {
    var tableContainer = document.querySelector('#table-container');
    var table = document.querySelector('#table-contacts');
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'php/getContacts.php', true);

    xhr.onload = function () {
        if (this.status == 200) {
            console.log('this.responseText!'+this.responseText.length+'!');
            console.log('this.responseText!',this.responseText);
            if(!this.responseText.length){
                tableContainer.innerHTML = '<p class="no-records">No records yet</p>';
            }
            var lists = JSON.parse(this.responseText);

            var output = '<tr>' +
                '<th class="th-name">Name</th><th class="th-contact">Contact Data</th>\n' +
                '</tr>';
            for (var i in lists) {
                output += '<tr><td  class="th-name">'
                    + lists[i].name +'</td><td class="th-contact">'+lists[i].contact + '</td>';
            }
            if (output == '') {
                output += '<tr><th>No records</th><th>No records</th></tr>';
            }
            table.innerHTML = output;
        }
    };

    xhr.send();
}
