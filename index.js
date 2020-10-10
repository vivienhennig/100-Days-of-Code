const projectContainer = document.getElementById('projectContainer');

const projects = [
    {
        title: 'Countdown to day 100',
        link: '/Day-1-Countdown',
    },
    {
        title: 'Contact Form',
        link: '/Day-2-Contact-Form',
    },
    {
        title: 'Animated Burger Menu',
        link: '/Day-3-Hamburger-Menu',
    },
    {
        title: 'Color Changer',
        link: '/Day-4-Color-Changer',
    },
    {
        title: 'Cryptographer',
        link: '/Day-5-Cryptographer',
    },
    {
        title: 'Waterdrop Animation',
        link: '/Day-6-Waterdrop',
    },
    {
        title: 'Password Generator',
        link: '/Day-7-Password-Generator',
    },
    {
        title: 'Event KeyCodes',
        link: '/Day-8-Event-Keycodes',
    },
    {
        title: 'Loading Animation',
        link: '/Day-9-Loading-animation',
    },
    {
        title: 'Address Form',
        link: '/Day-10-Address-Form',
    },
    {
        title: 'Pricing Design',
        link: '/Day-11-Pricing-Design',
    },
    {
        title: 'Review Page',
        link: '/Day-12-Review-Page',
    },
    {
        title: 'Counter',
        link: '/Day-13-Counter',
    },
    {
        title: 'Overview Page',
        link: '/Day-14-Overview-Page',
    },
    {
        title: 'Moving Button',
        link: '/Day-15-Moving-Button',
    },
    {
        title: 'Word to binary Converter',
        link: '/Day-16-Word-to-Binary',
    },
    {
        title: 'Background Animation',
        link: '/Day-17-Background-Animation',
    },
];


projects.forEach(project => {
    const linkContainer = document.createElement('a');

    linkContainer.setAttribute('href', `${project.link}`);
    linkContainer.classList.add('projectTile');
    linkContainer.innerText = project.title;

    projectContainer.appendChild(linkContainer);
});