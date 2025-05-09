import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import config  from '~/config';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    type: 'language',
                    code: 'ja',
                    title: 'Japanese',
                },
                {
                    type: 'language',
                    code: 'ko',
                    title: 'Korean',
                },
                {
                    type: 'language',
                    code: 'zh',
                    title: 'Chinese',
                },
                {
                    type: 'language',
                    code: 'fr',
                    title: 'French',
                },
                {
                    type: 'language',
                    code: 'de',
                    title: 'German',
                },
                {
                    type: 'language',
                    code: 'es',
                    title: 'Spanish',
                },
                {
                    type: 'language',
                    code: 'it',
                    title: 'Italian',
                },
                {
                    type: 'language',
                    code: 'pt',
                    title: 'Portuguese',
                },
                {
                    type: 'language',
                    code: 'ru',
                    title: 'Russian',
                },
                {
                    type: 'language',
                    code: 'tr',
                    title: 'Turkish',
                },
                {
                    type: 'language',
                    code: 'ar',
                    title: 'Arabic',
                },
                {
                    type: 'language',
                    code: 'hi',
                    title: 'Hindi',
                },
                {
                    type: 'language',
                    code: 'nl',
                    title: 'Dutch',
                },
                {
                    type: 'language',
                    code: 'pl',
                    title: 'Polish',
                },
                {
                    type: 'language',
                    code: 'sv',
                    title: 'Swedish',
                },
                {
                    type: 'language',
                    code: 'no',
                    title: 'Norwegian',
                },
                {
                    type: 'language',
                    code: 'da',
                    title: 'Danish',
                },
                {
                    type: 'language',
                    code: 'fi',
                    title: 'Finnish',
                },
                {
                    type: 'language',
                    code: 'is',
                    title: 'Icelandic',
                }
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {

    const currentUser = true;

    // Handle Logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/viewprofile',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                <img src={images.logo} alt="TikTok" />
                </Link>
                {/*Search Start*/}
                <Search />
                {/*Search End*/}

                {/*Action Start*/}
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/e5884e16413892a4b0529db6cd62952c~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=9887fb47&x-expires=1745082000&x-signature=I1NUJcm90uOxPmRR3dGj67Yy8eE%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my2"
                                alt="Nguyen Van A"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
                {/*Action End*/}
            </div>
        </header>
    );
}

export default Header;
