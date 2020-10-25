const projectContainer = document.getElementById('projectContainer');

const projects = [
    {
        title: 'Countdown to day 100',
        link: '/100-Days-of-Code/Day-1-Countdown/index.html',
    },
    {
        title: 'Contact Form',
        link: '/100-Days-of-Code/Day-2-Contact-Form/index.html',
    },
    {
        title: 'Animated Burger Menu',
        link: '/100-Days-of-Code/Day-3-Hamburger-Menu/index.html',
    },
    {
        title: 'Color Changer',
        link: '/100-Days-of-Code/Day-4-Color-Changer/index.html',
    },
    {
        title: 'Cryptographer',
        link: '/100-Days-of-Code/Day-5-Cryptographer/index.html',
    },
    {
        title: 'Waterdrop Animation',
        link: '/100-Days-of-Code/Day-6-Waterdrop/index.html',
    },
    {
        title: 'Password Generator',
        link: '/100-Days-of-Code/Day-7-Password-Generator/index.html',
    },
    {
        title: 'Event KeyCodes',
        link: '/100-Days-of-Code/Day-8-Event-Keycodes/index.html',
    },
    {
        title: 'Loading Animation',
        link: '/100-Days-of-Code/Day-9-Loading-animation/index.html',
    },
    {
        title: 'Address Form',
        link: '/100-Days-of-Code/Day-10-Address-Form/index.html',
    },
    {
        title: 'Pricing Design',
        link: '/100-Days-of-Code/Day-11-Pricing-Design/index.html',
    },
    {
        title: 'Review Page',
        link: '/100-Days-of-Code/Day-12-Review-Page/index.html',
    },
    {
        title: 'Counter',
        link: '/100-Days-of-Code/Day-13-Counter/index.html',
    },
    {
        title: 'Overview Page',
        link: '/100-Days-of-Code/index.html',
    },
    {
        title: 'Moving Button',
        link: '/100-Days-of-Code/Day-15-Moving-Button/index.html',
    },
    {
        title: 'Word to binary Converter',
        link: '/100-Days-of-Code/Day-16-Word-to-Binary/index.html',
    },
    {
        title: 'Background Animation',
        link: '/100-Days-of-Code/Day-17-Background-Animation/index.html',
    },
    {
        title: 'Otter Spinner',
        link: '/100-Days-of-Code/Day-18-And-Otter/index.html',
    },
    {
        title: 'Night Mode Button',
        link: '/100-Days-of-Code/Day-19-Night-Mode/index.html',
    },
    {
        title: 'Expanding Images',
        link: '/100-Days-of-Code/Day-20-Expanding-Images/index.html',
    },
    {
        title: 'Local & Session Storage',
        link: '/100-Days-of-Code/Day-21-Local-Session-Storage/index.html',
    },
    {
        title: 'Coookies',
        link: '/100-Days-of-Code/Day-22-Coookies/index.html',
    },
    {
        title: 'Autosuggest with php',
        link: '/100-Days-of-Code/Day-23-Autosuggest-with-php/index.html',
    },
    {
        title: 'IP Address',
        link: '/100-Days-of-Code/Day-24-Ip-Address/index.html',
    },
    {
        title: 'Editor',
        link: '/100-Days-of-Code/Day-25-Editor/index.html',
    },
    {
        title: 'Shell Script',
        link: '/100-Days-of-Code/Day-26-shell/quiz.zsh',
    },
    {
        title: 'README.md Generator',
        link: '/100-Days-of-Code/Day-27-README-Generator/index.html',
    },
    {
        title: 'Live Location',
        link: '/100-Days-of-Code/Day-28-Live-Location/index.html',
    },
    {
        title: 'Corona Dashboard',
        link: '/100-Days-of-Code/Day-29-Corona-Dashboard/index.html',
    },
    {
        title: 'console.log() Game',
        link: '/100-Days-of-Code/Day-30-console-log-game/index.html',
    },
    {
        title: 'Hover Board',
        link: '/100-Days-of-Code/Day-31-Hover-Board/index.html',
    },
    {
        title: 'Higher or Lower',
        link: '/100-Days-of-Code/Day-32-Higher-or-Lower/index.html',
    },
];


projects.forEach(project => {
    const linkContainer = document.createElement('a');

    linkContainer.setAttribute('href', `${project.link}`);
    linkContainer.classList.add('projectTile');
    linkContainer.innerText = project.title;

    projectContainer.appendChild(linkContainer);
});