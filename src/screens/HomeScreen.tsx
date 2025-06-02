import {
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useStore} from '../store/Store';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import Icon from 'react-native-vector-icons/Ionicons';
import CoffeeCard from '../components/CoffeeCard';

// Function to get categories from the coffee data



const getCategoriesfromDate = (data: any) => {
  let temp: any = {};
  for (let i = 0; i < data.length; i++) {
    if (temp[data[i].name] == undefined) {
      temp[data[i].name] = 1;
    } else {
      temp[data[i].name]++;
    }
  }
  let Categories = Object.keys(temp);
  Categories.unshift('All');
  return Categories;
};

const getCoffeeList = (categories: string, data: any) => {
  if (categories == 'All') {
    return data;
  } else {
    let coffeelist = data.filter((item: any) => item.name == categories);
    return coffeelist;
  }
};
const HomeScreen = () => {
  const CoffeeList = useStore((state: any) => state.CoffeeList);
  const BeanList = useStore((state: any) => state.BeanList);

  const [categories, SetCategories] = useState(
    getCategoriesfromDate(CoffeeList),
  );
  const [SearchText, SetSearchText] = useState('');
  const [CategoryIndex, SetCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });
  const [sortedCoffee, setsortedCoffee] = useState(
  getCoffeeList(categories[0], CoffeeList),
  );

  console.log("categories List",categories);

  return (
    <View style={styles.Screencontainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        {/* adding the header  */}
        <HeaderBar />
        <Text style={styles.ScreenTittle}>
          Find The Best {'\n'}Coffee For You
        </Text>
        {/* Adding the Search Icon or Buttom */}
        <View style={styles.InputCOntainerComponent}>
          <TouchableOpacity onPress={() => {}} style={styles.touchable}>
            <Icon
              name="search"
              size={FONTSIZE.size_18}
              style={styles.inputIcons}
              color={
                SearchText.length > 0
                  ? COLORS.primaryOrangeHex
                  : COLORS.primaryLightGreyHex
              }></Icon>
            <TextInput
              placeholder="Find your coffee...."
              value={SearchText}
              onChangeText={text => SetSearchText(text)}
              placeholderTextColor={COLORS.primaryLightGreyHex}
              style={styles.textInputContainer}
            />
          </TouchableOpacity>
        </View>

        {/* adding the category Scroller */}

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryScrollViewStyle}>
          {categories.map((data, index) => (
            <View
              key={index.toString()}
              style={styles.CategoryScrollViewContainer}>
              <TouchableOpacity
                onPress={() => {
                  SetCategoryIndex({index: index, category: categories[index]});
                  setsortedCoffee([
                    ...getCoffeeList(categories[index], CoffeeList),
                  ]);
                }}
                style={styles.categorySCrolllViewItem}>
                <Text
                  style={[
                    styles.CategoryText,
                    CategoryIndex.index == index
                      ? {color: COLORS.primaryOrangeHex}
                      : {},
                  ]}>
                  {data}
                </Text>
                {CategoryIndex.index == index ? (
                  <View style={styles.categoryy} />
                ) : (
                  <></>
                )}
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        {/* Coffee FLatList */}

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={sortedCoffee}
          contentContainerStyle={styles.flatlistContainer}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity>             
                 <CoffeeCard
                  name={item.name}
                  id={item.id}
                  index={item.index}
                  type={item.type}
                  rosted={item.rosted}
                  imagelink_square={item.imagelink_square}
                  special_ingredient={item.special_ingredient}
                  average_rating={item.average_rating}
                  prices={item.prices}
                  buttomPressHandler={() => {}}
                />
              </TouchableOpacity>
            );
          }}
        />

        {/* Beans FlatLIst */}

        <View style={{marginTop: SPACING.space_20}} >
          <Text style={styles.ScreenTittle}>
              Coffee Beans
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatlistContainer}>
            {BeanList.map((item: any) => (
              <TouchableOpacity key={item.id}>
                <CoffeeCard
                  name={item.name}
                  id={item.id}
                  index={item.index}
                  type={item.type}
                  rosted={item.roasted}
                  imagelink_square={item.imagelink_square}
                  special_ingredient={item.special_ingredient}
                  average_rating={item.average_rating}
                  prices={item.prices}
                  buttomPressHandler={() => {}}
                />
              </TouchableOpacity>
            ))}
            </ScrollView>
            </View>
      
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  Screencontainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
    height: 700,
  },
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  ScreenTittle: {
    fontSize: FONTSIZE.size_28,
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
    paddingLeft: SPACING.space_30,
  },
  InputCOntainerComponent: {
    flexDirection: 'row',
    margin: SPACING.space_30,
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.primaryDarkGreyHex,
    alignItems: 'center',
    height: SPACING.space_20 * 3,
  },
  inputIcons: {
    marginHorizontal: SPACING.space_20,
  },
  textInputContainer: {
    flex: 1,
    height: SPACING.space_20 * 3,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
  },
  categoryScrollViewStyle: {
    paddingHorizontal: SPACING.space_20,
    marginBottom: SPACING.space_20,
  },
  CategoryScrollViewContainer: {
    paddingHorizontal: SPACING.space_15,
  },
  categorySCrolllViewItem: {
    alignItems: 'center',
  },
  categoryy: {
    height: SPACING.space_10,
    width: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_10,
    backgroundColor: COLORS.primaryOrangeHex,
  },
  CategoryText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryLightGreyHex,
    marginBottom: SPACING.space_4,
  },
  flatlistContainer: {
    gap: SPACING.space_20,
    paddingVertical: SPACING.space_20,
    paddingHorizontal: SPACING.space_30,
  },
});

export default HomeScreen;
