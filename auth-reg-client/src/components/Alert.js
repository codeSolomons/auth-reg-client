function Alert(props){

    if(props.error)
    {
        
            if(props.message)
            {
                return(
                    <div className="alert-error">
                    <span className="alert-text">{props.message}</span>    
                    </div>
                );
                
            }        
    }
    else{
        if(props.message){
            return(
                <div className="alert-info">
                    <span className="alert-text">{props.message}</span>    
                </div>
            );
        }
        
    }
    
}
export default Alert;