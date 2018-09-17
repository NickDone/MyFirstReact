import head from './images/head.jpg';
var NavConfig = {
    "brand": "MYMY",
    "icon": "",
    "navigations": [
        {
            "content": "Start",
            "link": "#"
        }, {
            "content": "GOGO",
            "link": "#"
        }, {
            "content": "Play",
            "link": "#"
        }, {
            "content": "Brave",
            "link": "#"
        }, {
            "content": "Kitty",
            "link": "#",
            "subcontents": [
                {
                    "content": "CUCI",
                    "link": "#"
                }, {
                    "content": "MOBI",
                    "link": "#"
                }
            ]
        }
    ]
};

var MyProfile = {
    "headportrait": head,
    "profiles": [
        {
            "title": "Name",
            "content": "Reboot, a collection of element-specific CSS changes in a single file, kickstart" +
                    " Bootstrap to provide an elegant, consistent, and simple baseline to build upon."
        }, {
            "title": "Age",
            "content": "18"
        }
    ]
}

export {NavConfig, MyProfile};