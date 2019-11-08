export default {
    normalShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    borderRadius: (n = 5) => {
        return { borderRadius: n, }
    },
    modalContent: {
        // flex: 1,
        height: '50%',
        backgroundColor: 'white',
        padding: 22,
        // justifyContent: 'center',
        // alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 5,
    },
}