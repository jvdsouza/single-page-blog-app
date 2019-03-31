//A "card" to encapsulate each blog post in
const Card = (props) => {
    return(
        <div style={{
                borderTop: '2px solid #D3D3D3', 
                // borderRadius:'10px',
                // boxShadow: '5px 5px 5px grey',
                padding: '10px',
                paddingBottom: '0px',
                backgroundColor: 'white'}}>
            {props.children}
        </div>
    )
}

export default Card;