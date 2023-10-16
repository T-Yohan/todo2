import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container:
    {
        flex:1,
        backgroundColor:"#78baa8",
        // flexDirection:"row",
        // justifyContent:"space-between",
    },
    cardContainer:
    {
        // flexDirection:"column",
        backgroundColor:"white",
        borderRadius:30,
        width:"98%",
        height:"98%",
    },
    header:
    {
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%",
        height:100,
        backgroundColor:"blue"
    },
    icon:
    {
        margin:30,
        alignItems:"flex-start",
    },
    png:
    {
        width:50,
        height:50,
        borderRadius:25,
        margin:20,
        alignItems:"flex-end",
    },
    title:
    {
        backgroundColor:"green",
        width:"100%",
        height:100,
        justifyContent:"space-around",
    },
    text:
    {
        textAlign:"left",
        fontSize:35,
        fontWeight:"800",
        margin:20,
    },
    input:
    {
        width:"99%",
        height:60,
        borderWidth:2,
        borderRadius:50,
    },
    card:
    {
        // backgroundColor:"orange",
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%",
        height:50,
    },
    cardCat:
    {
        // backgroundColor:"red",
        justifyContent:"space-around",
    },
    cardImg:
    {
        backgroundColor:"yellow",
    },
    
    
})