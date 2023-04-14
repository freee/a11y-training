import React, { useState } from "react";
import styled from 'styled-components';

export const HamburgerStyle = styled.div`
    .hamburgermenu {
        background: #ccc;
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
        width: 200px;
    }
`;

export const BadHamburgerMenu: React.FC = () => {
    // 開閉状態を管理するステート
    const [isExpanded, setExpanded] = useState(false);

    const handleClick = () => {
        // クリックしたときに開閉状態を切り替える
        setExpanded(!isExpanded);
    };

    return (
        <HamburgerStyle>
            <button
                type="button"
                className="button"
                onClick={handleClick}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    viewBox="0 96 960 960"
                    width="48"
                >
                    <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
                </svg>
            </button>
            <nav
                className={`hamburgermenu${isExpanded ? " expanded" : ""}`}
            >
                <ul>
                <li>メニューアイテム1</li>
                <li>メニューアイテム2</li>
                <li>メニューアイテム3</li>
                <li>メニューアイテム4</li>
                </ul>
            </nav>
        </HamburgerStyle>
    );
};
