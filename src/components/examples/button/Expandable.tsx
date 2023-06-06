import React, { useState } from 'react';
import { ExampleContainer } from '..';
import styled from 'styled-components';
import { Button } from '../../parts/Button';

export const HamburgerStyle = styled.div`
    height: 12.5rem;
    .hamburgermenu {
        background: #ffffff;
        overflow: hidden;
        white-space: nowrap;
        transition: width 0.5s;
    }
    // ハンバーガーメニューが閉じているときには幅を0にする
    .hamburgermenu:not(.expanded) {
        width: 0;
    }
    // ハンバーガーメニューが開いたときに幅を指定する。アニメーションでせり出すように見える
    .hamburgermenu.expanded {
        width: 12.5rem;
    }
`;

const NavList = styled.ul`
    list-style: none;
    padding: 0 1rem;
`;

const NavLink = styled.a`
    display: block;
    padding: 0.25rem 0.5rem;
    color: #285ac8;
    text-decoration: none;
    transition: background-color 0.2s;
    border-radius: 0.25rem;
    margin-top: 0.5rem;
    position: relative;
    &:before {
        content: '';
        position: absolute;
        right: calc(100% + 0.25rem);
        top: calc(50% - 0.25rem);
        border-top: 0.25rem solid transparent;
        border-bottom: 0.25rem solid transparent;
        border-left: 0.5rem solid
        transition: border-color 0.2s;
    }
    &:hover {
        background-color: #ebf3ff;
        color: #2864f0;
    }
`;

const MyButton = styled(Button)`
    border-radius: 0.5rem;
`;

const Svg = styled.svg`
    color: #2864f0;
`;

const MenuItems = () => {
    return (
        <NavList>
            <li><NavLink href="https://corp.freee.co.jp/company/">会社概要</NavLink></li>
            <li><NavLink href="https://corp.freee.co.jp/mission/">ミッション</NavLink></li>
            <li><NavLink href="https://corp.freee.co.jp/news/">ニュース</NavLink></li>
        </NavList>
    );
};

const HamburgerMenu: React.FC = () => {
    // 開閉状態を管理するステート
    const [isExpanded, setExpanded] = useState(false);
    // 完全に閉じた状態を管理するステート
    const [isHidden, setHidden] = useState(true);

    const handleClick = () => {
        // クリックした直後は開閉いずれの状態であってもhidden属性の値をfalseにする
        setHidden(false);
        // クリックしたときに開閉状態を切り替える
        // アニメーションがスムーズに実行されるようにするため、hidden属性が反映されてからsetExpandedする
        setTimeout(() => {
            setExpanded(!isExpanded);
        }, 0);
    };

    const handleTransitionEnd = () => {
        // アニメーションが終了しメニューが閉じたとき（isExpandedがfalseのとき）、hidden属性の値をtrueにする
        !isExpanded && setHidden(true);
    };

    return (
        <HamburgerStyle>
            <MyButton
                type="button"
                className="button"
                onClick={handleClick}
                aria-expanded={isExpanded}
                aria-controls="hamburgermenu"
                aria-haspopup="menu"
            >
                <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    viewBox="0 96 960 960"
                    width="48"
                    role="img"
                    aria-label="目次"
                >
                    <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" fill="currentColor" />
                </Svg>
            </MyButton>
            <div
                className={`hamburgermenu${isExpanded ? ' expanded' : ''}`}
                onTransitionEnd={handleTransitionEnd}
                hidden={isHidden}
                id="hamburgermenu"
                aria-label="目次"
            >
                <MenuItems />
            </div>
        </HamburgerStyle>
    );
};

const BadHamburgerMenu: React.FC = () => {
    // 開閉状態を管理するステート
    const [isExpanded, setExpanded] = useState(false);

    const handleClick = () => {
        // クリックしたときに開閉状態を切り替える
        setExpanded(!isExpanded);
    };

    return (
        <HamburgerStyle>
            <MyButton
                type="button"
                className="button"
                onClick={handleClick}
            >
                <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    viewBox="0 96 960 960"
                    width="48"
                >
                    <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" fill="currentColor" />
                </Svg>
            </MyButton>
            <div
                className={`hamburgermenu${isExpanded ? ' expanded' : ''}`}
            >
                <MenuItems />
            </div>
        </HamburgerStyle>
    );
};

export const GoodExpandableButton = (): JSX.Element => (
    <ExampleContainer>
        <HamburgerMenu />
    </ExampleContainer>
);

export const BadExpandableButton = (): JSX.Element => (
    <ExampleContainer>
        <BadHamburgerMenu />
    </ExampleContainer>
);
