import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Input, Button, ListItem, Text} from 'react-native-elements';
import {appContext} from '../context';
const Stage_one = () => {
  const context = useContext(appContext);
  const renderPlayers = () =>
    context.state.players.map((item, id) => (
      <ListItem key={id} bottomDivider style={{width: '100%'}}>
        <ListItem.Chevron />
        <ListItem.Content>
          <Text>{item}</Text>
        </ListItem.Content>
      </ListItem>
    ));
  console.log(context);
  return (
    <>
      <Formik
        initialValues={{player: ''}}
        validationSchema={Yup.object({
          player: Yup.string()
            .min(3, 'Must be bigger than 2 characters name')
            .max(15, 'Must be lower than 15 characters name')
            .required('Sorry the name is required'),
        })}
        onSubmit={(values, {resetForm}) => {
          context.addPlayer(values.player);
        }}>
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          touched,
          errors,
        }) => (
          <>
            <Input
              placeholder="Add names here"
              leftIcon={{type: 'font-awesome', name: 'user'}}
              renderErrorMessage={errors.player && touched.player}
              errorMessage={errors.player}
              errorStyle={{marginHorizontal: 50}}
              onChangeText={handleChange('player')}
              onBlur={handleBlur('player')}
              value={values.player}
            />
            <Button
              //buttonStyle={}
              title="Add Player"
              onPress={handleSubmit}
              disabled={errors.player}
            />
          </>
        )}
      </Formik>
      <View style={{padding: 20, width: '100%'}}>
        {context.state.players && context.state.players.length > 0 ? (
          <>
            <Text> List of player</Text>
            {renderPlayers()}
          </>
        ) : null}
      </View>
    </>
  );
};

export default Stage_one;
