const songList = [
    {
        title: "Welcome to the jungle",
        artist: "Guns and Roses",
        duration: "3:30"
    },
    {
        title: "Do or Die",
        artist: "30 seconsd to mars",
        duration: "4:42"
    },
    {
        title: "I'm Full of Steak, and Cannot Dance",
        artist: "Sidney Gish",
        duration: "3:30"
    },
    {
        title: "My Lucky Pants Failed Me Again",
        artist: "Tom Rosenthal",
        duration: "3:45"
    },

]


class SongNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Playlist {
    constructor() {
        this.head = null;
    }
    addToPlaylist(arr) {
        let trigger = false
        if (!this.head) {
            const newNode = new SongNode(arr[0]);
            this.head = newNode;
        }
        let runner = this.head;
        if (this.head.next) {
            while (runner.next) {
                runner = runner.next
            }
        }
        for (let i = 0; i < arr.length; i++) {
            const newNode = new SongNode(arr[i]);
            runner.next = newNode;
            runner = runner.next
        }
    }

    displayAllSongs() {
        if (!this.head) {
            return "the playlist is empty";
        }
        let output = "";
        let runner = this.head
        while (runner) {
            const { title, artist, duration } = runner.data
            output += ``
            output += `Title: ${title}`
            output += `Artist: ${artist}`
            output += `Duration: ${duration}`
            runner = runner.next;
        }
        return output
    }

    removeSongByTitle(titleToRemove){
        if(!this.head){
            return "this is empty"
        }
        let runner = this.head;
        while(runner){
            const {title} = runner.next.data
            if(titleToRemove === title){
                break
            }
            runner = runner.next
        }
        let removedNode = runner.next;
        runner.next = runner.next.next;
        removedNode.next =null
    }

    totalPlaylistRuntime() {
        if(!this.head){
            return "this is empty"
        }
        let runner = this.head;
        output = 0 
        let totalSeconds = 0, output = 0
        while(runner){
            const {duration} = runner.data
            const minAndSeconds = duration.split(":");
            const minToSeconds = parseInt(minAndSeconds[0]) * 60;
            totalSeconds += minToSeconds + parseInt(minAndSeconds[1])
            runner = runner.next
        }
        const minute = Math.floor(totalSeconds/60)
        console.log(totalSeconds%60)
        output += `${minute}: ${totalSeconds%60}`
        return output.slice(1);
    }
}


const playlist = new Playlist();
console.log(playlist.head)

playlist.addToPlaylist(songList)
console.log(playlist.displayAllSongs())
console.log(playlist.totalPlaylistRuntime)