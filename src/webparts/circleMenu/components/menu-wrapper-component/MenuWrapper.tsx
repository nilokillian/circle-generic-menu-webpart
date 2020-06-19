import * as React from "react";
import { MemoizedMenu } from "../menu-component/Menu";
import { InnerCircle } from "../inner-circle-component/InnerCircle";
import { WebPartPropsContext } from "../../contexts/webpart-context/WebPartPropsContext";

export const MenuWrapper = (): JSX.Element => {
  const { menuItems, centreToCircle } = React.useContext(WebPartPropsContext);

  const makeMenu = (menuConfig: any[]): any[] => {
    const angle = 360 / menuConfig.length;
    let rotation = 0;
    const makeMenuItems = [];

    menuConfig.forEach(
      ({ color, icon, title, imageUrl, extraInfoId, url, subMenu }) => {
        makeMenuItems.push({
          color,
          icon,
          title,
          imageUrl,
          extraInfoId,
          subMenu,
          rotation,
          angle,
          url,
          show: false,
        });
        rotation += angle;
      }
    );
    return makeMenuItems;
  };
  const [animatedMenuItems, setAnimatedMenuItems] = React.useState<any[]>(() =>
    makeMenu(menuItems)
  );

  // staggerd fade menu items in
  const animateButtons = (items: any[]): void => {
    const length = items.length;

    const stagger = (i: number) => {
      if (i < length) {
        setTimeout(() => {
          items[i].show = true;
          setAnimatedMenuItems([...items]);
          stagger(i + 1);
        }, 70);
      }
    };

    stagger(0);
  };

  React.useEffect(() => {
    animateButtons(makeMenu(menuItems));
    console.log("menu items changed", menuItems);
  }, [menuItems]);

  return (
    <div>
      <InnerCircle />
      <MemoizedMenu centreToCircle={centreToCircle} items={animatedMenuItems} />
    </div>
  );
};
