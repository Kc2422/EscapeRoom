import React, { useState, useEffect } from 'react';

const Page = React.forwardRef((props, ref) => {
    return (
        <div className={props.orientation} ref={ref}>
            <h1 style={{margin:"10%"}}>Page Header</h1>
            <p>{props.children}</p>
            {/* <p>Page number: {props.number}</p> */}
        </div>
    );
});
export default Page;