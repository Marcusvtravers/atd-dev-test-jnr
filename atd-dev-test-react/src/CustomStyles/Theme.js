import {createTheme} from '@mui/material'

const theme = createTheme({
    typography: {
        TitleText: {
            fontSize: '72px',
            fontWeight: 'bold'
        },
        GeneralText: {
            fontSize: '16px'
        },
    },
    components:{
        MuiButton:{
            styleOverrides:{
                root:{
                    color: '#71797E',
                    borderColor:'#71797E',
                    height:'40px',
                    '&:hover':{
                        backgroundColor:'#EBEBEB',
                        borderColor:'#E5E4E2'
                    }
                },

            }
        },
    }
})

export default theme