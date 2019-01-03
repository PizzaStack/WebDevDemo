// AJAX = Asynchronous JavaScript and XML
let xhr = new XMLHttpRequest();

// Handle the response
/*
xhr.onreadystatechange = function() {
    //console.log(this.readyState);
    if (this.readyState === 4 && this.status === 200) {
        console.log(xhr.responseText);
    } else {
        console.log('ERROR')
    }
};
*/
xhr.onload = () => {//console.log(JSON.parse(xhr.responseText).name)
    let luke = JSON.parse(xhr.responseText);
    console.log(luke.name);
};

xhr.onerror = function() {
    console.log('Error');
}

// Details of the request
xhr.open('GET', 'luke.json');

// Make the call
xhr.send();