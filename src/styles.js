import { fade, makeStyles } from '@material-ui/core/styles';

const UseStyles = makeStyles((theme) => ({

    paper: {
        padding: '2px 4px',
        alignItems: 'center',
        display:"flex",
        fullWidth: true,
        color: '#ffff!important',
        margin: theme.spacing(6),
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.7),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.9),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            // width: 'auto',
        },
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
        margin: '20px'
    },
    icon: {
        marginRight: '20px',
    },
    title: {
        display: 'none',
        minWidth: '120px',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        color: '#ffff',
    },
    button: {
        marginTop: '40x',
    },
    cardGrid: {
        padding: '20px',
        maxWidth: 'false'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',

        // alignSelf:'center',

    },
    cardMedia: {
        paddingTop: '56.25%',
        height: '1vw'
    },
    cardContent: {
        flexGrow: 1,

    },
    // footer: {
    //     backgroundColor: theme.palette.background.paper,
    //     padding: '50px 0',
    // }

}));
export default UseStyles;