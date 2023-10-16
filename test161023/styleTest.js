import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container:
    {
        flex:1,
        backgroundColor:"#705fff",
    },
    header:
    {
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        width:"100%",
        height:150,
        // backgroundColor:"#ccc",
    },
    avatar:
    {
        width:50,
        height:50,
        borderRadius:25,
        margin:10,
    },
    text:
    {
        flexDirection:"column",
        // backgroundColor:"orange",
    },
    title:
    {
        fontSize:20,
        fontWeight:"700",
        color:"white",
        marginLeft:15,
    },
    slogan:
    {
        marginLeft:15,
        color:"white",
    },
    courses:
    {
        flexDirection:"column",
        backgroundColor:"white",
        width:"100%",
        height:"100%",
        borderRadius:50
    },
    courseTitle:
    {
        textAlign:"left",
        justifyContent:"flex-start",
        margin:20,
        fontSize:20,
        fontWeight:"500",
        color:"black",
    },
    courseBox:
    {
        alignItems:"flex-start",
        margin:5,
        width:"80%",
        height:140,
        borderRadius:20,
        backgroundColor:"#ff658c"
    },
    rate:
    {
        flexDirection:"row",
        margin:10,
        backgroundColor:"white",
        width:50,
        height:30,
        borderRadius:25,
    },
    courseBoxInfos:
    {
        flexDirection:"column",
    },
    infos:
    {
        flexDirection:"row",
        fontSize:18,
        fontWeight:"600",
        color:"white",
    },



})