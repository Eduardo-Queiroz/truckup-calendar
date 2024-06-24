import React, { useState, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as Haptics from "expo-haptics";

const { width: viewportWidth } = Dimensions.get("window");

export type HorizontalScrollPickerItemProps = {
  item: any;
  active: boolean;
};

type HorizontalScrollPickerProps = {
  items: any[];
  rowItems: number;
  initialIdx: number;
  valueKey: string;
  onSelect: (value: string) => void;
  renderItem: (value: HorizontalScrollPickerItemProps) => React.JSX.Element;
  isOpened: boolean;
};

export const HorizontalScrollPicker = ({
  items,
  rowItems,
  initialIdx,
  onSelect,
  renderItem,
  isOpened,
  valueKey,
}: HorizontalScrollPickerProps) => {
  const size = viewportWidth / rowItems;
  const [active, setActive] = useState(initialIdx);

  const scrollView = useRef<ScrollView>(null);
  let scrollOffset = useRef(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollOffset.current = event.nativeEvent.contentOffset.x;
    const idx = Math.abs(Math.round(scrollOffset.current / size));
    const selected = idx === items.length ? idx - 1 : idx;
    if (active !== selected && isOpened) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      setActive(selected);
      onSelect(items[selected][valueKey]);
    }
  };

  const setInitialValue = () => {
    if (scrollView.current) {
      scrollView.current.scrollTo({
        x: initialIdx * size,
        y: 0,
        animated: false,
      });
      setActive(initialIdx);
    }
  };
  const onLayoutHandler = () => {
    if (!isOpened) setInitialValue();
  };

  useEffect(setInitialValue, [isOpened]);

  const sideItems = (rowItems - 1) / 2;
  return (
    <View style={[styles.scrollPickerContainer, { width: rowItems * size }]}>
      <ScrollView
        horizontal
        ref={scrollView}
        onLayout={onLayoutHandler}
        showsHorizontalScrollIndicator={false}
        snapToInterval={size}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        shouldCancelWhenOutside={false}
        contentContainerStyle={{
          paddingLeft: size * 1.4,
          paddingRight: size * sideItems,
        }}
      >
        {items.map((item, idx) => (
          <View
            key={`item-${idx}`}
            style={[styles.itemContainer, { width: size }]}
          >
            {renderItem({ item, active: idx == active })}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollPickerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
