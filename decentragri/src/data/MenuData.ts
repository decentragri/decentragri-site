
interface MenuItem {
    id: number;
    title: string;
    link: string;
    has_dropdown: boolean;
    sub_menus?: {
        link: string;
        title: string;
    }[];
}

const menu_data: MenuItem[] = [
    {
        id: 1,
        title: "Home",
        link: "/home",
        has_dropdown: false,
        sub_menus: [
            { link: "/", title: "Home One" },
            { link: "/home-one-dark", title: "Home One Dark" },
            { link: "/home-two", title: "Home Two" },
            { link: "/home-three", title: "Home Three" },
        ],
    },
    {
        id: 2,
        has_dropdown: false,
        title: "About",
        link: "/about",

    },
    {
        id: 3,
        title: "Whitepaper",
        link: "https://decentragri.gitbook.io/decentragri.com/",
        has_dropdown: false,
    },
    {
        id: 4,
        has_dropdown: false,
        title: "Contact",
        link: "/contact",
    },
];

export default menu_data;