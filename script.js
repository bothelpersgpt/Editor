const style = `
    background-color: red;
    color: white;
    font-size: 18px;
    font-weight: bold;
    padding: 10px;
    text-align: center;
`;

const warningMessage = `
    Stop! This is a developer tool for debugging.
    Pasting anything here could give attackers access to your personal information.
`;

console.log('%c' + warningMessage, style);

document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && (event.key === 'v' || event.key === 'V')) {
        event.preventDefault();
        console.error('%cPasting into the console is not allowed.', style);
    }
});
