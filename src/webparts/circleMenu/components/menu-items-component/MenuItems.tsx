import * as React from "react";
import { Icon, TooltipHost, Link } from "office-ui-fabric-react";
import { tooltipStyles } from "../../styles/fabricStyles";
import styles from "./MenuItems.module.scss";

export const MenuItems = ({ centreToCircle, items }) => {
  const btnRef = React.useRef();

  const buttons = items.map((item: any) => {
    const styling = {
      transform: `rotate(${item.rotation}deg) 
           translate(${centreToCircle / 1.7}em) 
           rotate(${-item.rotation}deg)`,
      backgroundColor: item.color,
    };

    return (
      <Link
        href={item.url}
        target="_blank"
        className={`${styles.menuItem} ${styles.itemShow}`}
        data-interception="off"
        style={styling}
      >
        <TooltipHost
          styles={tooltipStyles}
          content={item.title}
          id={item.title}
          calloutProps={{ gapSpace: 10 }}
        >
          <Icon
            iconName={item.icon}
            className="circleIcon"
            aria-describedby={item.title}
          />
        </TooltipHost>
      </Link>
    );
  });

  return (
    <div ref={btnRef} className={`${styles.buttonBg} ${styles.animateMenu}`}>
      {buttons}
    </div>
  );
};
