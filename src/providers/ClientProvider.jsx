import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ClientContext } from '../context/client';
import { MQTT } from '../constants/mqtt';
import { getSession } from '../helper/utils';
export function ClientProvider(props) {
    const [client, setClient] = useState(null);
    
    return (
        <ClientContext.Provider
            value={{
                client: client,
                setClient: setClient
            }}>
            {props.children}
        </ClientContext.Provider>
    );
}

ClientProvider.propTypes = {
  children: PropTypes.node
};