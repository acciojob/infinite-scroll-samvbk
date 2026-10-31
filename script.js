const list = document.getElementById("infi-list");

function listAdd(count) {
	for (let index = 0; index < count; index++) {
		const li = document.createElement("li");
		li.textContent = `Item ${count}`;
		list.appendChild(li);
	}
};
addItems(10);

window.addEventListener("scroll",()=>{
	if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
		addItems(2);
	}
});

