function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6bDUGXyMzoQ":
        Script1();
        break;
      case "6nFRwkt6Bzh":
        Script2();
        break;
  }
}

function Script1()
{
    	configPlayer();

	var userName = player.GetVar("Name_txt");
	var email_str = player.GetVar("Email_txt");

	/*
	console.log("Name:" + userName);
	console.log("Email:" + email_str);
	

	console.log("Validating email: [" + email_str + "]");
	*/
	validateEmail(email_str);


}

function Script2()
{
  var playerName = player.GetVar("Name_txt");
var playerEmail = player.GetVar("Email_txt");

var statement = {
    "actor": {
        "mbox": "mailto:" + playerEmail,
        "name": playerName,
        "objectType": "Agent"
    },
    "verb": {
        "id": "http://adlnet.gov/expapi/verbs/initialized",
        "display": {
            "en-US": "initialized"
        }
    },
    "object": {
        "id": "https://geminilearning.com/dragonstats",
        "definition": {
            "name": {
                "en-US": "DragonStats"
            },
            "description": {
                "en-US": "This application is a peer-reviewing tool by a reviewer to help a new player in the Dungeons and Dragons RPG."
            }
        },
        "objectType": "Activity"
    }
}

ADL.XAPIWrapper.sendStatement(statement);
}

