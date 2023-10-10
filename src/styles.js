import { StyleSheet } from "react-native";

export default StyleSheet.create({
    header:
    {
        backgroundColor:"blue",
        margin:5,
        padding:25,
        borderRadius:5,
        alignItems:"center",
        justifyContent:"center",
        textAlign:"center",
        fontSize:30,
        fontWeight:"600",
        color:"white",
    },
    container:
    {
        margin:10,
    },
    addInput:
    {
        margin:10,
        borderColor:'blue',
        borderWidth:2,
        textDecorationLine : 'line-through',
        borderRadius:10
    },
    task:
    {
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        fontSize:15,
        fontWeight:"400",
    },
    btnup:
    {
        borderRadius:25,
    },

})