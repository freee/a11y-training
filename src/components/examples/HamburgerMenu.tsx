import React, {
    useState,
} from "react";

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
        // d3;
    };

    return (
        <>
            <button
                type="button"
                className="button"
                onClick={handleClick}
                aria-expanded={isExpanded}
                aria-controls="menu"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    viewBox="0 96 960 960"
                    width="48"
                    role="img"
                    aria-label="メニュー"
                >
                    <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
                </svg>
            </button>
            <nav
                className={`hamburgermenu${isExpanded ? " expanded" : ""}`}
                onTransitionEnd={handleTransitionEnd}
                hidden={isHidden}
                id="menu"
                aria-label="メインメニュー"
            >
                <ul>
                <li>メニューアイテム1</li>
                <li>メニューアイテム2</li>
                <li>メニューアイテム3</li>
                <li>メニューアイテム4</li>
                </ul>
            </nav>
        </>
    );
};
