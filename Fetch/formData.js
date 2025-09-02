// Sending a simple form

/*
// in html
<form id="formElem">
    <input type="text" name="name" value="Sam"/>
    <input type="text" name="sirname" value="Bahadur"/>
    <input type="submit" />
</form>
*/

// formElem.onsubmit = async (e) => {
//     let response = await fetch('/article/formdata/post/user', {
//         method: "POST",
//         body: new FormData(formElem),
//     });

//     let result = await response.json();
//     alert(result.message);
// }


// 2. Iterating on form data using lops

let formData = new FormData();
formData.append("key 1", "value 1");
formData.append("key 2", "value 2");

for (let [key, value] of formData) {
    console.log(`key is = ${key} and value is = ${value}`);

}
