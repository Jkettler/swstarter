import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {orderedObjectList, urlParser} from '../util/helpers';
import {fetchManyInstances} from '../util/fetchers';
import {ObjectTextWrap} from '../components/object-text-wrap';
import {MockLink} from '../components/mock-link';
import {InfoHeader} from '../styles/info-header';
import {DetailBlock} from '../components/detail-block';
import {Footer} from '../components/footer';

export const DetailsScreen = props => {
  const item = props.navigation.getParam('item');
  const {url} = item;
  const {category} = urlParser(url);

  const {name, title, films, characters, opening_crawl} = item;

  const [references, setReferences] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const orderedFilter = [
    'birth_year',
    'gender',
    'eye_color',
    'hair_color',
    'height',
    'mass',
  ];

  useEffect(() => {
    const refUrls = films || characters;

    fetchManyInstances(refUrls).then(results => {
      setIsLoading(false);
      setReferences(results);
    });
  }, [films, characters]);

  const renderItem = (itemAttrs, final) => {
    return (
      <MockLink
        final={final}
        key={itemAttrs.url}
        onPress={onPress}
        item={itemAttrs}
      />
    );
  };

  const onPress = itemAttrs => {
    const {push} = props.navigation;
    push('Details', {item: itemAttrs});
  };

  const bottomText = () =>
    isLoading ? (
      <View style={styles.loading}>
        <ActivityIndicator />
      </View>
    ) : (
      <View style={styles.lineWrap}>
        {references.map((ref, idx) =>
          renderItem(ref, idx === references.length - 1),
        )}
      </View>
    );

  const blockContents = () => {
    switch (category) {
      case 'people':
        return [
          {
            header: 'Details',
            text: (
              <ObjectTextWrap list={orderedObjectList(item, orderedFilter)} />
            ),
          },
          {
            header: 'Movies',
            text: bottomText(),
          },
        ];
      case 'films':
        return [
          {
            header: 'Opening Crawl',
            text: <Text>{opening_crawl}</Text>,
          },
          {
            header: 'Characters',
            text: bottomText(),
          },
        ];
    }
  };

  const blocks = blockContents(name);

  return (
    <ScrollView contentContainerStyle={styles.details}>
      <View style={styles.content}>
        <Text style={InfoHeader.header}>{name || title}</Text>
        {blocks.map((block, idx) => (
          <DetailBlock key={idx} header={block.header} text={block.text} />
        ))}
      </View>
      <Footer visible={!isLoading} navigation={props.navigation} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  details: {
    margin: 30,
    flexGrow: 1,
    flex: 1,
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  // content: {
  //   flex: 1,
  // },
  header: {
    fontSize: 18,
    fontFamily: 'Montserrat-bold',
  },
  block: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    color: 'black',
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  lineWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'stretch',
    flexGrow: 1,
  },
});
