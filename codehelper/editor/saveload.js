let myprojectnumber = 1;

function save(){
	let myprojects = fetch("myprojects.json")
	.then(response => response.json())
	.then(myprojects => {
		window.localStorage.setItem("savefile_codehelper_bmc",myprojects.toString());
	});
}