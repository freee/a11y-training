import React, { useState } from 'react';
import styled from 'styled-components';

export const HamburgerStyle = styled.div`
    .hamburgermenu {
        background: #dfdfdf;
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

export const HamburgerMenu: React.FC = () => {
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
            <button
                type="button"
                className="button"
                onClick={handleClick}
                aria-expanded={isExpanded}
                aria-controls="hamburgermenu"
                aria-haspopup="menu"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    viewBox="0 96 960 960"
                    width="48"
                    role="img"
                    aria-label="目次"
                >
                    <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
                </svg>
            </button>
            <nav
                className={`hamburgermenu${isExpanded ? ' expanded' : ''}`}
                onTransitionEnd={handleTransitionEnd}
                hidden={isHidden}
                id="hamburgermenu"
                aria-label="目次"
            >
                <ul>
                <li><a href="/keyboard/">キーボードで操作</a></li>
                <li><a href="/screen-reader/">スクリーンリーダー</a></li>
                <li><a href="/image/">画像</a></li>
                <li><a href="/heading/">見出し</a></li>
                </ul>
            </nav>
        </HamburgerStyle>
    );
};
