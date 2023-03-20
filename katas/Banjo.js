function areYouPlayingBanjo(name) {
    if (name.toLowerCase().charAt(0) === 'r') {
        return name + " plays banjo";
    }
    return name + " does not play banjo";
}
console.log(areYouPlayingBanjo("Adam"));
console.log(areYouPlayingBanjo("Rick"));
