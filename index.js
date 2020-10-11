const projectContainer = document.getElementById('projectContainer');

const projects = [
    {
        title: 'Countdown to day 100',
        link: '/Day-1-Countdown/index.html',
    },
    {
        title: 'Contact Form',
        link: '/Day-2-Contact-Form/index.html',
    },
    {
        title: 'Animated Burger Menu',
        link: '/Day-3-Hamburger-Menu/index.html',
    },
    {
        title: 'Color Changer',
        link: '/Day-4-Color-Changer/index.html',
    },
    {
        title: 'Cryptographer',
        link: '/Day-5-Cryptographer/index.html',
    },
    {
        title: 'Waterdrop Animation',
        link: '/Day-6-Waterdrop/index.html',
    },
    {
        title: 'Password Generator',
        link: '/Day-7-Password-Generator/index.html',
    },
    {
        title: 'Event KeyCodes',
        link: '/Day-8-Event-Keycodes/index.html',
    },
    {
        title: 'Loading Animation',
        link: '/Day-9-Loading-animation/index.html',
    },
    {
        title: 'Address Form',
        link: '/Day-10-Address-Form/index.html',
    },
    {
        title: 'Pricing Design',
        link: '/Day-11-Pricing-Design/index.html',
    },
    {
        title: 'Review Page',
        link: '/Day-12-Review-Page/index.html',
    },
    {
        title: 'Counter',
        link: '/Day-13-Counter/index.html',
    },
    {
        title: 'Overview Page',
        link: '/Day-14-Overview-Page/index.html',
    },
    {
        title: 'Moving Button',
        link: '/Day-15-Moving-Button/index.html',
    },
    {
        title: 'Word to binary Converter',
        link: '/Day-16-Word-to-Binary/index.html',
    },
    {
        title: 'Background Animation',
        link: '/Day-17-Background-Animation/index.html',
    },
    {
        title: 'Otter Spinner',
        link: '/Day-18-And-Otter/index.html',
    },
];


projects.forEach(project => {
    const linkContainer = document.createElement('a');

    linkContainer.setAttribute('href', `${project.link}`);
    linkContainer.classList.add('projectTile');
    linkContainer.innerText = project.title;

    projectContainer.appendChild(linkContainer);
});