const list = document.getElementById("infi-list");
let cnt = 1;
function listAdd(count) {
	for (let index = 0; index < count; index++) {
		const li = document.createElement("li");
		li.textContent = `Item ${cnt}`;
		list.appendChild(li);
		cnt++;
	}
};
listAdd(10);

window.addEventListener("scroll",()=>{
	if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
		listAdd(2);
	}
});

