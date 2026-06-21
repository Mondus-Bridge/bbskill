export function getRandomEmail() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const nameLength = Math.floor(Math.random() * 11) + 5; // Generate length between 5 and 15
    let randomName = '';
    
    for (let i = 0; i < nameLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomName += characters[randomIndex];
    }
    
    // Append the current timestamp to the name
    const timestamp = Date.now();
    randomName += timestamp;
    
    // Construct the email
    const email = `qa+${randomName}@bitbanker.org`;
    return email;
}

export function getRandomEmailMobile() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const nameLength = Math.floor(Math.random() * 5) + 6; // Generate length between 6 and 10
    let randomName = '';

    for (let i = 0; i < nameLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomName += characters[randomIndex];
    }

    // Construct the email
    const email = `qa+${randomName}@bitbanker.org`;
    return email;
}

module.exports = { getRandomEmail, getRandomEmailMobile };
