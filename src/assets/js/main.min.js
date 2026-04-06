if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark')
}



const loading = document.getElementById('loading');
const terminal = document.getElementById("terminal");
const root = document.getElementById('root')
let isLoaded = false;
let isFlickerStarted = false;

const terminalLines = [
    { type: "typing", text: "> npm create clarence/portfolio@latest" },
    { type: "span", text: "✔ Loading assets.", color: "green" },
    { type: "span", text: "✔ Setting up projects.", color: "green" },
    { type: "span", text: "✔ Verifying experience.", color: "green" },
    { type: "span", text: "✔ Checking contact info.", color: "green" },
    { type: "span", text: "✔ Preparing animations.", color: "green" },
    { type: "span", text: "✔ Finalizing layout.", color: "green" },
    { type: "span", text: "✔ Applying themes.", color: "green" },
    { type: "span", text: "✔ Optimizing performance.", color: "green" },
    { type: "span", text: "ℹ Portfolio assets ready.", color: "blue" },
    { type: "typing", text: "Success! Portfolio is ready.", color: "muted" },
    { type: "flicker", text: "Redirecting to home", color: "muted" },
];

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function TypingText(text, color) {
    const span = document.createElement('span');
    span.classList.add('line');
    if (color) span.classList.add(color);

    const cursor = document.createElement('span');
    cursor.classList.add('cursor');

    terminal.appendChild(span);
    span.appendChild(cursor);

    for (let char of text) {
        cursor.insertAdjacentText('beforebegin', char);
        await wait(30);
    }

    cursor.remove();
}

async function SpanText(text, color) {
    const span = document.createElement('span');
    span.classList.add('line');
    if (color) span.classList.add(color);

    span.innerHTML = text;
    await wait(30);
    terminal.appendChild(span);
}

async function FlickerText(text, color) {
    const span = document.createElement('span');
    span.classList.add('line');
    if (color) span.classList.add(color);

    terminal.appendChild(span);

    let dots = 0;

    setInterval(() => {
        span.textContent = text + " " + ".".repeat(dots);
        dots = (dots + 1) % 4;
    }, 500);

    isFlickerStarted = true;
    setTimeout(() => {
        checkReady();
    }, 1000)
}

async function RunTerminal(terminalLines) {
    for (const element of terminalLines) {
        if (element.type === 'typing') {
            await TypingText(element.text, element.color);
        }
        else if (element.type === 'span') {
            await SpanText(element.text, element.color);
        }
        else if (element.type === 'flicker') {
            await FlickerText(element.text, element.color);
        }
    }
}
function checkReady() {
    if (isLoaded && isFlickerStarted) {
        root.style.display = 'block';
        loading.style.transition = 'opacity 1000ms ease';
        loading.style.opacity = '0';
        setTimeout(() => {
            loading.style.display = 'none';
        }, 1000)
        setTimeout(() => {
            root.style.transition = 'opacity 1s ease';
            root.style.opacity = '1';
        }, 1000);
    }
}

RunTerminal(terminalLines)

window.addEventListener('load', () => {
    loading.style.cursor = 'default'
    isLoaded = true;
    checkReady();
});
