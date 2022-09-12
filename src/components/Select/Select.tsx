import React, {KeyboardEvent, useEffect, useState} from "react";
import style from './Select.module.css'

export type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    items: ItemType[]
    onClick: (value: any) => void
}

export const Select = React.memo((props: SelectPropsType) => {
    console.log('Select rendering')
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)


    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])


    const toggleItem = () => setActive(!active)

    const onItemClick = (value: any) => {
        props.onClick(value);
        toggleItem();
    }
    const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === "ArrowDown"
                        ? props.items[i + 1]
                        : props.items[i - 1]

                    if (pretendentElement) {
                        props.onClick(pretendentElement.value)
                        return;
                    }
                }
            }
            if (!selectedItem) {
                props.onClick(props.items[0].value);
            }
        }
        if (e.key === "Enter" || e.key === "Escape") {
            setActive(false)
        }
    }

    return (
        <>
            {/*<select>
                <option value="">Minsk</option>
                <option value="">Moscow</option>
                <option value="">Kiev</option>
            </select>*/}
            <div className={style.select} onKeyUp={onKeyUpHandler} tabIndex={0}>
                <span className={style.main} onClick={toggleItem}>{selectedItem && selectedItem.title}</span>
                {active &&
                    <div className={style.items}>
                        {props.items.map(item => <div
                            onMouseEnter={() => setHoveredElementValue(item.value)}
                            className={style.item + " " + (hoveredItem === item ? style.selected : "")}
                            key={item.value}
                            onClick={() => onItemClick(item.value)}
                        >{item.title}
                        </div>)}
                    </div>
                }

            </div>
        </>
    )
})