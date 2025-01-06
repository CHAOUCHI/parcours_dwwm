export var Track;
(function (Track) {
    Track[Track["LASER"] = 0] = "LASER";
})(Track || (Track = {}));
var Audio = /** @class */ (function () {
    function Audio() {
    }
    /**
     * Play a track
     * @param track an element of the Track enumeration
     */
    Audio.play = function (track) {
        switch (track) {
            case Track.LASER:
                var laserTrack = document.querySelector("audio#audio_laser");
                if (laserTrack) {
                    var cloneSound = laserTrack.cloneNode();
                    cloneSound.play();
                }
                else {
                    throw Error("Laser track tag not found");
                }
                break;
            default:
                break;
        }
    };
    return Audio;
}());
export { Audio };
