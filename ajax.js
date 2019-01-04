// AJAX = Asynchronous JavaScript and XML
let xhr = new XMLHttpRequest();

// Details of the request
xhr.open('GET', 'luke.json');

// Handle the response
// xhr.onreadystatechange = function() {
//     console.log(this.readyState);
//     // if (this.readyState === 4 && this.status === 200) {
//     //     console.log(xhr.responseText);
//     // } else {
//     //     console.log('ERROR')
//     // }
// };

xhr.onload = () => {//console.log(JSON.parse(xhr.responseText).name)
    let luke = JSON.parse(xhr.responseText);
    console.log(luke.name);
};

// xhr.onerror = function() {
//     console.log('Error');
// }

// Make the call
//xhr.send();

// FETCH API
//fetch('luke.json').then(resp => resp.json()).then(data => console.log(data));
//fetch('luke.json').then(function(resp) { return resp.json()}).catch(() => console.log('oops')).then(function(data) {console.log(data)});