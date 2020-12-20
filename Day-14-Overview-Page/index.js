const projectContainer = document.getElementById('projectContainer');

const projects = [
    {
        title: 'Countdown to day 55',
        link: '/55-Days-of-Code/Day-1-Countdown/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_1.png',
    },
    {
        title: 'Contact Form',
        link: '/55-Days-of-Code/Day-2-Contact-Form/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_2.png',
    },
    {
        title: 'Animated Burger Menu',
        link: '/55-Days-of-Code/Day-3-Hamburger-Menu/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_3.png',
    },
    {
        title: 'Color Changer',
        link: '/55-Days-of-Code/Day-4-Color-Changer/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_4.png',
    },
    {
        title: 'Cryptographer',
        link: '/55-Days-of-Code/Day-5-Cryptographer/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_5.png',
    },
    {
        title: 'Waterdrop Animation',
        link: '/55-Days-of-Code/Day-6-Waterdrop/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_6.png',
    },
    {
        title: 'Password Generator',
        link: '/55-Days-of-Code/Day-7-Password-Generator/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_7.png',
    },
    {
        title: 'Event KeyCodes',
        link: '/55-Days-of-Code/Day-8-Event-Keycodes/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_8.png',
    },
    {
        title: 'Loading Animation',
        link: '/55-Days-of-Code/Day-9-Loading-animation/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_9.png',
    },
    {
        title: 'Address Form',
        link: '/55-Days-of-Code/Day-10-Address-Form/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_10.png',
    },
    {
        title: 'Pricing Design',
        link: '/55-Days-of-Code/Day-11-Pricing-Design/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_11.png',
    },
    {
        title: 'Review Page',
        link: '/55-Days-of-Code/Day-12-Review-Page/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_12.png',
    },
    {
        title: 'Counter',
        link: '/55-Days-of-Code/Day-13-Counter/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_13.png',
    },
    {
        title: 'Overview Page',
        link: '/55-Days-of-Code/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_14.png',
    },
    {
        title: 'Moving Button',
        link: '/55-Days-of-Code/Day-15-Moving-Button/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_15.png',
    },
    {
        title: 'Word to binary Converter',
        link: '/55-Days-of-Code/Day-16-Word-to-Binary/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_16.png',
    },
    {
        title: 'Background Animation',
        link: '/55-Days-of-Code/Day-17-Background-Animation/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_17.png',
    },
    {
        title: 'Otter Spinner',
        link: '/55-Days-of-Code/Day-18-And-Otter/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_18.png',
    },
    {
        title: 'Night Mode Button',
        link: '/55-Days-of-Code/Day-19-Night-Mode/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_19.png',
    },
    {
        title: 'Expanding Images',
        link: '/55-Days-of-Code/Day-20-Expanding-Images/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_20.png',
    },
    {
        title: 'Local & Session Storage',
        link: '/55-Days-of-Code/Day-21-Local-Session-Storage/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_21.png',
    },
    {
        title: 'Coookies',
        link: '/55-Days-of-Code/Day-22-Coookies/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_22.png',
    },
    {
        title: 'Autosuggest with php',
        link: '/55-Days-of-Code/Day-23-Autosuggest-with-php/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_23.png',
    },
    {
        title: 'IP Address',
        link: '/55-Days-of-Code/Day-24-Ip-Address/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_24.png',
    },
    {
        title: 'Editor',
        link: '/55-Days-of-Code/Day-25-Editor/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_25.png',
    },
    {
        title: 'Shell Script',
        link: '/55-Days-of-Code/Day-26-shell/quiz.zsh',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_26.png',
    },
    {
        title: 'README.md Generator',
        link: '/55-Days-of-Code/Day-27-README-Generator/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_27.png',
    },
    {
        title: 'Live Location',
        link: '/55-Days-of-Code/Day-28-Live-Location/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_28.png',
    },
    {
        title: 'Corona Dashboard',
        link: '/55-Days-of-Code/Day-29-Corona-Dashboard/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_29.png',
    },
    {
        title: 'console.log() Game',
        link: '/55-Days-of-Code/Day-30-console-log-game/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_30.png',
    },
    {
        link: '/55-Days-of-Code/Day-31-Hover-Board/index.html',
        title: 'Hover Board',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_31.png',
    },
    {
        title: 'Higher or Lower',
        link: '/55-Days-of-Code/Day-32-Higher-or-Lower/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_32.png',
    },
    {
        title: 'Horizontal Scroll',
        link: '/55-Days-of-Code/Day-33-Horizontal-Scroll/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_33.png',
    },
    {
        title: 'Text Editor',
        link: '/55-Days-of-Code/Day-34-Text-Editor/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_34.png',
    },
    {
        title: 'Digital Clock',
        link: '/55-Days-of-Code/Day-35-Digital-Clock/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_35.png',
    },
    {
        title: 'Cookie Notice',
        link: '/55-Days-of-Code/Day-36-Cookie-Notice/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_36.png',
    },
    {
        title: 'Currency Converter',
        link: '/55-Days-of-Code/Day-37-Currency-Converter/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_37.png',
    },
    {
        title: 'Brooklyn Nine Nine Tribute',
        link: '/55-Days-of-Code/Day-38-Brooklyn-Nine-Nine-Tribute/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_38.png',
    },
    {
        title: 'Tip Calculator',
        link: '/55-Days-of-Code/Day-39-Tip-Calculator/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_39.png',
    },
    {
        title: 'Steps',
        link: '/55-Days-of-Code/Day-40-Steps/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_40.png',
    },
    {
        title: 'Validation Code',
        link: '/55-Days-of-Code/Day-41-Validation-Code/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_41.png',
    },
    {
        title: 'Post It',
        link: '/55-Days-of-Code/Day-42-Post-It/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_42.png',
    },
    {
        title: 'Color Countdown',
        link: '/55-Days-of-Code/Day-43-Color-Countdown/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_43.png',
    },
    {
        title: 'How low can you go?',
        link: '/55-Days-of-Code/Day-44-How-Low-Can-You-Go/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_44.png',
    },
    {
        title: 'Where is Waldo?',
        link: '/55-Days-of-Code/Day-45-Where-is-Waldo/home.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_45.png',
    },
    {
        title: 'Flip Card',
        link: '/55-Days-of-Code/Day-46-Flip-Card/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_46.png',
    },
    {
        title: 'Remus Lupin',
        link: '/55-Days-of-Code/Day-47-Remus-Lupin/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_47.png',
    },
    {
        title: 'Staggered Menu',
        link: '/55-Days-of-Code/Day-48-Staggered-Menu/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_48.png',
    },
    {
        title: 'Dynamic Shadow',
        link: '/55-Days-of-Code/Day-49-Dynamic-Shadow/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_49.png',
    },
    {
        title: 'Beverage Timer',
        link: '/55-Days-of-Code/Day-50-Beverage-Timer/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_50.png',
    },
    {
        title: 'Scroll Indicator',
        link: '/55-Days-of-Code/Day-51-Scroll-Indicator/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_51.png',
    },
    {
        title: 'Button Border Animation',
        link: '/55-Days-of-Code/Day-52-Button-Border-Animation/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_52.png',
    },
    {
        title: 'Hover Text Effect',
        link: '/55-Days-of-Code/Day-53-Text-Hover-Effect/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_53.png',
    },
    {
        title: 'Hover Animation',
        link: '/55-Days-of-Code/Day-54-Text-Animation/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_54.png',
    },
    {
        title: 'Image Overlay',
        link: '/55-Days-of-Code/Day-55-Image-Overlay/index.html',
        image: '/55-Days-of-Code/Day-14-Overview-Page/images/Day_55.png',
    },
];


projects.forEach(project => {
    const projectTile = document.createElement('div');
    const link = document.createElement('a');
    const imageLink = document.createElement('a');
    const image = document.createElement('img');

    image.setAttribute('src', `${project.image}`);

    imageLink.setAttribute('href', `${project.link}`);
    imageLink.appendChild(image);

    link.setAttribute('href', `${project.link}`);
    link.classList.add('link');
    link.innerText = project.title;

    projectTile.classList.add('projectTile');
    projectTile.appendChild(imageLink);
    projectTile.appendChild(link);

    projectContainer.appendChild(projectTile);
});