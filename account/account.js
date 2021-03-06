$(document).ready(function () {

    function getAccountInfoHandler(accountInfo) {
        if (accountInfo.errorCode == 0) {
            var profile = accountInfo['profile'];
            $("#nameBox").text(profile["firstName"] + ' ' + profile["lastName"]);
            $("#connectedAccounts").text(accountInfo['socialProviders']);
            $("#loggedInTimesBox").text(Cookies.get(accountInfo.UID));

        }
        else {
            window.location.replace("../login/login.html");
        }
    }

    function setNewAccountInfo(accountInfo) {
        location.reload();
    }

    gigya.accounts.getAccountInfo({callback: getAccountInfoHandler});
    gigya.socialize.showAddConnectionsUI({
        containerID: "addConnectionsDiv",
        captionText:'Connect with your other Accounts',
        showEditLink: true,
        width: '700',
        height: '200',
        buttonSize: 50,
        onConnectionAdded: setNewAccountInfo
    });

    $("#logoutBtn").click(function (event) {
        gigya.accounts.logout();
    });


});