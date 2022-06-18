import Typography from '@mui/material/Typography';

const Zone = (props) => {
    return (
        <div style={{ marginLeft: "auto", textAlign: "right" }}>
            <Typography variant="h5" sx={{ fontWeight: "300", textTransform: "capitalize" }}>
                {props.children.city}
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: "200", fontSize: "16px", textTransform: "capitalize", color: "#9aa0a6"}}>
                {props.children.day}, {props.children.hour}:00
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: "200", fontSize: "16px", textTransform: "capitalize", color: "#9aa0a6" }}>
                {props.children.description}
            </Typography>
        </div>

    );
}

export default Zone;