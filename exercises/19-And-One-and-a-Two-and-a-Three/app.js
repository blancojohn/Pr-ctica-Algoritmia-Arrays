let contact = {
    fullName: "Jane Doe",
    phone: "321-321-4321",
    email: "test@test.com"
}

for (let key in contact) {
    // Your code here
    let KeyValue= "";
    KeyValue += `${key}${":"}${contact[key]}`
    console.log(KeyValue)
}


