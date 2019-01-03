let app = {
    list: ["Jabba The Slug", "Solo's Revenge", "Solo: Episode II: Electric Boogaloo"],
    insertStory: function(story) {
        this.list.push(story);
    },
    deleteStory: function(index) {
        this.list.splice(index, 1);
    },
    deleteList: function() {
        this.list = [];
    }
};

function clearAll() {
    app.deleteList();
}

function refreshListView(list) {
    let storiesDiv = document.getElementById('stories')
    list.forEach(element => {
        storiesDiv.innerHTML += element + "<br/>";    
    });
}

document.getElementById('submit').addEventListener('click', function() {
    let newStory = document.getElementById("title");
    app.insertStory(newStory.value);
    document.getElementById('stories').innerHTML = ""
    newStory.value = ""
    refreshListView(app.list);
});

refreshListView(app.list);

/*
class Jedi {
    constructor(master, padawan) {
        this.master = master;
        this.padawan = padawan;
    }

    print() {
        console.log(this.master + ' ' + this.padawan)
    }
};

class DarkJedi extends Jedi {
    constructor(master, padawan, angst) {
        super(master, padawan);
        this.angst = angst;
    }

    print() {
        console.log(`${this.master}
        ${this.padawan}`);
    }
}

let Luke = new DarkJedi('Obi Wan', 'Ben');
Luke.print();
*/