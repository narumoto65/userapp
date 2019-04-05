import React, { Component } from "react";
import { 
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView
} from "react-native";
import { Container, Header, View, DeckSwiper, 
    Card, CardItem, Thumbnail, Text, 
    Left, Body, Icon,Drawer,Button,Title,Right,InputGroup, Input } from 'native-base';
import Stylist from './Tags/Stylist'
import SideBar from './SideBar';
const Pics =[
  {id:'1',uri: require('../../assets/biyoushi3.jpg')},
  {id:'2',uri: require('../../assets/biyoushi2.jpg')},
  {id:'3',uri: require('../../assets/biyoushi1.jpg')},
];
const cards = [
    {
        text:'寺岡悠馬',
        name:'yuma',
        image:require('../../assets/bafter1.jpg')
    },
    {
        text:'寺岡悠馬',
        name:'yuma',
        image:require('../../assets/bafter2.jpg')
    }
]
class Home extends Component {
    closeDrawer = () => {
        this._drawer._root.close();
    }
    openDrawer = () => {
        //alert('open');
        this._drawer._root.open();
    }
    navigateToProfile(press){
        this.props.navigation.navigate('Profile',{press});
    }
    render() {
        return (
           <Drawer 
                ref={(ref)=>{this._drawer=ref;}}
                        content={<SideBar/>}> 
        <Container>
                <Header style={{backgroundColor:'#fd7166'}}>
                    <Left>
                        <Button transparent onPress={this.openDrawer.bind(this)}>
                            <Icon style={styles.icon} name='list' />
                        </Button> 
                    </Left>
                    <InputGroup borderType= 'underline'style={{marginTop:5,backgroundColor:'#fff',width:180,height:25}}>
                        <Icon name="ios-search" style={{color:'#fd7166'}}/>
                        <Input style={{color: '#00c497'}} placeholder="お悩みタグ"/>
                    </InputGroup> 
                </Header>
                <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>@teraokayum</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                {/*
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  */}
                  <Text>{item.name}</Text>
                  <TouchableOpacity>
                    <Icon name='logo-twitter' style={{color:'#ed4a6a',marginLeft:150}}/>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Icon name='logo-instagram' style={{color:'#ed4a6a'}}/>
                  </TouchableOpacity>
                  
                </CardItem>
              </Card>
            }
          />
          <View style = {{marginTop:420}}>
                    {/*
                    <View style={{marginTop:30,flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <Rating
                            imageSize={28}
                            startingValue={3}
                            />
                            <Text style={{marginLeft:30,marginTop:10}}>神奈川県横浜市</Text>
                            <Text style={{marginLeft:30}}>キャリア4年</Text>
                        </View>
                        <View style={{flex:1,marginLeft:10}}>
                            <Text>103レビュー</Text>
                        </View>
                    </View>
                    */}
                    <View style={{marginTop:30}}>
                        <ScrollView horizontal='true'>
                            <Stylist imageUri={require('../../assets/photo1.jpg')} />
                            <Stylist imageUri={require('../../assets/photo2.jpg')}　/>
                            <Stylist imageUri={require('../../assets/photo3.jpg')}　/>
                            <Stylist imageUri={require('../../assets/photo4.jpg')}　/>
                            <Stylist imageUri={require('../../assets/photo1.jpg')} />
                            <Stylist imageUri={require('../../assets/photo2.jpg')}　/>
                            <Stylist imageUri={require('../../assets/photo3.jpg')}　/>
                            <Stylist imageUri={require('../../assets/photo4.jpg')}　/>
                        </ScrollView>
                    </View>
                    <TouchableOpacity style={styles.buttonStyle} onPress={()=>this.navigateToProfile(Pics[0])}>
                        <Text 
                        style={styles.textStyle}>
                            Go to Profile
                        </Text>
                    </TouchableOpacity>
                </View>
          </Container>
          </Drawer>
          
        );
    }
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonStyle:{
        marginTop:10,
        marginLeft:130,
        marginRight:130,
        backgroundColor:'#59D494',
        borderRadius:15,
        borderWidth:1,
        borderColor:'#f8f8f8',
        height:35
    },
    textStyle:{
        marginTop:5,
        paddingLeft:15,
        color:'#fff',
        fontSize:14
    },
    icon:{
        color:'#fff',
        fontSize:40,
    }
});