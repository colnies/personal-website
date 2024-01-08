import axios from 'axios';

import { SearchFunction } from './customerApi';
import config from '../../config';

export default async function handler (req, res) {
    try {
    // Fields needed for SOAP request//
        const xml = `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
        <soap:Body>
        <StartIbv xmlns="http://paydayloanmanager.com/CustomerSiteService/2015-06-19">
            <accessKey>${process.env.ACCESS_KEY}</accessKey>
            <customerId>${req.body.customerId}</customerId>
            <loanId>${req.body.loanId}</loanId>
            <originUrl></originUrl>
        </StartIbv>
    </soap:Body>
    </soap:Envelope>`;

        // Make the SOAP request
        const soapResponse = await axios.post(config.SOAPEndpoint, xml, {
            headers: {
                'Content-Type': 'text/xml',
                SOAPAction: 'http://paydayloanmanager.com/CustomerSiteService/2015-06-19/StartIbv',
            },
        });

        // Parse the SOAP response
        const XMLbody = soapResponse.data;

        // Banking Verification Provider for Store//
        // const provider = SearchFunction('ProviderType', XMLbody);

        const key = SearchFunction('LendMateRequestCode', XMLbody);

        // Send a response
        res.status(200).json({
            message: 'SOAP request processed successfully',
            key: [true, key],
        });
    } catch (error) {
        const err = SearchFunction('faultstring', error.response.data);

        res.status(500).json({
            message: 'Error occurred while processing the SOAP request',
            key: [false, err],
        });
    }
}
