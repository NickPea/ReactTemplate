import React from 'react';

export const OurWeddingContext = React.createContext({
    rsvpd: [],
    getRsvpd: ()=>{}
})


export function OurWeddingService(props) {
    return (
        <>
            <OurWeddingContext.Provider
            value={{
                rsvpd: [
                    {name: 'larry', phone: '20943', message: 'with bells on', diet: 'all good'},
                    {name: 'sally', phone: '41432', message: 'yo yo yo', diet: 'vegan4life'}
                ]
            }}>
                {props.children}
            </OurWeddingContext.Provider>
        </>
    )
}
