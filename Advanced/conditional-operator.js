// const userAge = 27;
// const message = userAge >= 18 ? 'you can vote' : 'you cannot vote';
// console.log(message);

// const myAge = 27;
// const showPage = () => 'Showing the page';
// const showErrorPage = () => 'Showing the error page';
// const message = myAge >= 21 ? showPage() : showErrorPage();
// console.log(message);

const team = ['Tyler', 'Porter'];

const correctSize = () => {
   console.log(`Team size: ${team.length}`);
}

const tooLarge = () => {
   console.log(`Too many people on your team`);
}

team.length <= 4 ? correctSize() : tooLarge();
