import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Rodnny',
    lastName:  'Garcia',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Independent Developer & Creator',
    avatar:    '/images/avatar.jpg',
    location:  'America/New_York',  
    languages: ['English', 'Spanish']           
}

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about app development, virtual world tools, and immersive game design.</>
}

const social = [
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/XxYOSHIIPRxX',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/your-profile/',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:xxYoshiiprxx@proton.me',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio showcasing my work as a developer and creator of virtual experiences and applications.`,
    headline: <>Independent Developer and Builder</>,
    subline: <>I’m Rodnny, the creator of 3DXControlHub and Beyond Lust. With expertise in Unreal Engine, Electron, and game scripting, I craft tools and experiences that merge technology with creativity.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com/rodnnyg'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Rodnny is a Cleveland-based developer specializing in immersive tools for games, apps, and virtual worlds. With a strong background in scripting and design, his work focuses on innovation, social mechanics, and user engagement.</>
    },
    work: {
        display: true,
        title: 'Work Experience',
        experiences: [
            {
                company: 'Burger King',
                timeframe: '2016 - 2019',
                role: 'Store Manager',
                achievements: [
                    <>Managed a high-performing team, increasing customer satisfaction and operational efficiency.</>,
                    <>Implemented process optimizations, improving service speed by 15%.</>
                ],
                images: []
            },
            {
                company: 'Cinemark Theaters',
                timeframe: 'Independent Contractor',
                role: 'Contractor',
                achievements: [
                    <>Provided specialized operations support, improving customer experiences in a theater environment.</>,
                ],
                images: []
            }
        ]
    },
    projects: {
        display: true,
        title: 'Highlighted Projects',
        projects: [
            {
                name: '3DXControlHub',
                description: <>A versatile tool for managing virtual world platforms, featuring event overlays, symbol menus, and client-side utilities.</>,
                technologies: ['Electron', 'CSS', 'JavaScript'],
                link: 'https://github.com/your-project-link',
            },
            {
                name: 'Beyond Lust',
                description: <>A free-to-play game in Unreal Engine with advanced social mechanics and multiplayer capabilities, aimed at redefining adult gaming.</>,
                technologies: ['Unreal Engine', 'AWS', 'PlayFab', 'Epic Games Multiplayer Services'],
                link: 'https://beyondlust.example.com',
            }
        ]
    },
    studies: {
        display: true,
        title: 'Studies',
        institutions: [
            {
                name: 'Self-Taught',
                description: <>Advanced training in Unreal Engine, Lua scripting, and web technologies.</>,
            },
            {
                name: 'FiveM Community',
                description: <>Gained expertise in developing roleplay servers and tools using Lua and C#.</>
            }
        ]
    },
    technical: {
        display: true,
        title: 'Technical skills',
        skills: [
            {
                title: 'Unreal Engine',
                description: <>Experienced in creating immersive environments and multiplayer systems.</>,
            },
            {
                title: 'Lua & C#',
                description: <>Six years of experience scripting and developing tools for FiveM roleplay servers.</>,
            },
            {
                title: 'Electron',
                description: <>Developing tools and overlays, such as 3DXControlHub for virtual world platforms.</>,
            },
            {
                title: 'Next.js',
                description: <>Creating modern, scalable web applications with React and Next.js.</>,
            },
            {
                title: 'AWS & PlayFab',
                description: <>Deploying backend services for multiplayer games and virtual world tools.</>,
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about virtual tools and game design...',
    description: `Read articles and updates by ${person.name} on creating tools, apps, and immersive experiences.`
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Explore development and design projects by ${person.name}.`
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A collection of visuals showcasing projects and designs by ${person.name}.`,
    images: [
        { 
            src: '/images/projects/beyond-lust.jpg', 
            alt: 'Beyond Lust gameplay screenshot',
            orientation: 'horizontal'
        },
        { 
            src: '/images/projects/3dxcontrolhub.jpg', 
            alt: '3DXControlHub interface',
            orientation: 'vertical'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };
