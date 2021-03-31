$("#owners-create-form").on("submit",async (event)=>{
    event.preventDefault();
    console.log("se que el evento funciona");
    const firstName = $("#firstName").val();
    const lastName = $("#lastName").val();
    const email = $("#email").val();
    const phone = $("#phone").val();
    const address = $("#address").val();
    console.log(firstName,lastName,email,phone,address);

    const data = await fetch("http://localhost:8000/api/owners/create/", {
        method:"POST",
        headers: {
            "Content-type":"application/json",
        Authorization: "Token 5f809ab0c09d3779325cc3530ceffb7cb20f3679",
        },
        body:JSON.stringify ({
            first_name:firstName,
            lat_name: lastName,
            email,
            phone,
            address,
        }),
    });
    const json = await data.json();

});