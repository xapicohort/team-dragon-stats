var player;

function configPlayer() {
	player = GetPlayer();
}

function validateEmail(email_str) {

	var email_bool = false;
	
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email_str))
	{
		email_bool = true;
	}

	if (email_bool) {
		player.SetVar("EmailValid", 2);
	} else {
		player.SetVar("EmailValid", 1);
	}

}