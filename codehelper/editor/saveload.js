let myprojectnumber = 1;

function save(){
	let myprojects = fetch("myprojects.json")
	.then(response => response.json())
	.then(myprojects => {
		console.log(myprojects.projects[myprojectnumber - 1]);
	});
}