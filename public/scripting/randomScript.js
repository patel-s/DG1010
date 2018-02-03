window.onload = init;
var quotes = [
    "Most programmers do programming not because they expect to get paid or get adulation by views, but because it is fun to program.\n~Linus Torvalds",
    "Best book on on programming for the layman is Alice in the Wonderland; but that's because it's the best book on anything for layman",
    "Computers are good at following instructions but not good at reading your mind\n ~Donald Knuth",
    "Programs are like women, No matter how much you get mad because of errors, you are the one who is always wrong",
    "Everyone should know how to program a computer, because it teaches you how to think\n~Steve Jobs",
    "Debugging is twice as hard as writing the code in the first place. Therefore if you write the code a cleverly as possible" +
    ", you are, by definition not smart enough to debug it\n~Brian Kernighan",
    "Programming allows you to think about thinking, and while debugging you learn about learning\n~Nicolas Negroponte",
    "[Computer science] is not really about computers and it's not computers in the same sense that physics is not really about particle accelerators, and Biology" +
    " is not about microscopes and petri dishes.....and geometry isn't about using surveying instruments\n~Hal Abelson",
    "Real programmers don't comment their code, because if it is hard to write then it should be hard to read!",
    "You might not think that programmers are artists, but programming is an extremely creative profession. it's logic based creativity.\n~John Romero",
    "If debugging is the process of removing the software bugs, then programming must be the process of putting them in.\n~Edsger Dijkstra",
    "One of the best programming skills that you can have is to know when to walk away from a while",
    "You can not teach beginners a top-down programming, because they don't know which end is up!\n~C.A.R. Hoare",
    "Bad programmers worry about the code, good programmers worry about the data structure and relationship.\n~Linus Torvalds"
];
function init() {
    var head = document.getElementById("randomCall");
    head.innerHTML = quotes[random()];
    setInterval(function () {
        head.innerHTML = quotes[random()];
    }, 10000);
}

function random() {
    return Math.floor(Math.random() * quotes.length);
}