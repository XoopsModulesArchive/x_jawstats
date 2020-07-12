/*
  PHP style date() plugin by Jon Combe (http://joncom.be)
  Call in exactly the same way as you do the PHP equivalent: $.PHPDate("jS", dtDate);
*/

(function($) {
    var aDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var aMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    // main function
    $.PHPDate = function(sString, dtDate) {
        var sElement = "";
        var sOutput = "";

        // loop through string
        for (var i = 0; i < sString.length; i++) {
            sElement = sString.charAt(i);
            switch (sElement) {
                case "a": sElement = AMPM(dtDate.getHours()); break;
                case "c":
                    sElement = (dtDate.getFullYear() + "-" +
                                            AddLeadingZero(dtDate.getMonth()) + "-" +
                                            AddLeadingZero(dtDate.getDate()) + "T" +
                                            AddLeadingZero(dtDate.getHours()) + ":" +
                                            AddLeadingZero(dtDate.getMinutes()) + ":" +
                                            AddLeadingZero(dtDate.getSeconds()) + ":" +
                                            "XX:XX");
                    break;
                case "d": sElement = AddLeadingZero(dtDate.getDate()); break;
// case "e": sElement = "e"; break;
                case "g": sElement = TwelveHourClock(dtDate.getHours()); break;
                case "h": sElement = AddLeadingZero(TwelveHourClock(dtDate.getHours())); break;
                case "i": sElement = AddLeadingZero(dtDate.getMinutes()); break;
                case "j": sElement = dtDate.getDate(); break;
                case "l": sElement = aDays[dtDate.getDay()]; break;
                case "m": sElement = AddLeadingZero(dtDate.getMonth() + 1); break;
                case "n": sElement = dtDate.getMonth() + 1; break;
// case "o": sElement = "o"; break;
// case "r": sElement = "r"; break;
                case "s": sElement = AddLeadingZero(dtDate.getSeconds()); break;
                case "t":
                    var dtTemp = new Date(dtDate.valueOf());
                    dtTemp.setMonth(dtTemp.getMonth() + 1)
                    dtTemp.setDate(0);
                    sElement = dtTemp.getDate();
                    break;
                case "u": sElement = dtDate.getMilliseconds(); break;
                case "w": sElement = dtDate.getDay(); break;
                case "y": sElement = dtDate.getFullYear().toString().substr(2, 2); break;
// case "z": sElement = "z"; break;
                case "A": sElement = AMPM(dtDate.getHours()).toUpperCase(); break;
// case "B": sElement = "B"; break;
                case "D": sElement = aDays[dtDate.getDay()].substr(0, 3); break;
                case "F": sElement = aMonths[dtDate.getMonth()]; break;
                case "G": sElement = dtDate.getHours(); break;
                case "H": sElement = AddLeadingZero(dtDate.getHours()); break;
// case "I": sElement = "I"; break;
                case "L":
                    var dtTemp = new Date(dtDate.valueOf());
                    dtTemp.setMonth(2)
                    dtTemp.setDate(0);
                    sElement = 0;
                    if (dtTemp.getDate() == 29) {
                        sElement = 1;
                    }
                    break;
                case "M": sElement = aMonths[dtDate.getMonth()].substr(0, 3); break;
                case "N":
                    sElement = dtDate.getDay();
                    if (sElement == 0) {
                        sElement = 7;
                    }
                    break;
// case "O": sElement = "O"; break;
// case "P": sElement = "P"; break;
                case "S": sElement = DateSuffix(dtDate.getDate()); break;
// case "T": sElement = "T"; break;
                case "U": sElement = Math.floor(dtDate.getTime() / 1000); break;
// case "W": sElement = "W"; break;
                case "Y": sElement = dtDate.getFullYear(); break;
// case "Z": sElement = "W"; break;
            }
            sOutput += sElement.toString();
        }
        return sOutput;
  }

    // add leading zero
    function AddLeadingZero(iValue) {
        if (iValue < 10) {
            iValue = ("0" + iValue);
        }
        return iValue;
    }

    // Ante meridiem and Post meridiem
    function AMPM(iHours) {
        if (iHours > 11) {
            return "pm";
        } else {
            return "am";
        }
    }

    // date suffix
    function DateSuffix(iDay) {
        var sSuffix = "th";
        switch (parseInt(iDay)) {
            case 1:
            case 21:
            case 31:
                sSuffix = "st";
                break;
            case 2:
            case 22:
                sSuffix = "nd";
                break;
            case 3:
            case 23:
                sSuffix = "rd";
        }
        return sSuffix;
    }

    // 12-Hour clock
    function TwelveHourClock(iHours) {
        if (iHours == 0) {
            iHours = 24;
        }
        if (iHours > 12) {
            iHours -= 12;
        }
        return iHours;
    }
})(jQuery);