import axios from 'axios';

import { SearchFunction } from './customerApi';
import config from '../../config';

export default async function handler (req, res) {
    try {
    // Fields needed for SOAP request//
        const xml = `<?xml version="1.0" encoding="utf-8"?>
  <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
      <soap:Body>
      <GetLoan xmlns="http://paydayloanmanager.com/CustomerSiteService/2015-06-19">
        <accessKey>${process.env.ACCESS_KEY}</accessKey>
        <customerId>${req.body.customerId}</customerId>
        <loanId>${req.body.loanId}</loanId>
      </GetLoan>
  </soap:Body>
  </soap:Envelope>`;

        // Make the SOAP request
        const soapResponse = await axios.post(config.SOAPEndpoint, xml, {
            headers: {
                'Content-Type': 'text/xml',
                SOAPAction: 'http://paydayloanmanager.com/CustomerSiteService/2015-06-19/GetLoan',
            },
        });

        // Parse the SOAP response
        const XMLbody = soapResponse.data;

        const IBVDone = SearchFunction('BankVerificationDone', XMLbody);

        // Send a response
        res.status(200).json({
            message: 'SOAP request processed successfully',
            result: IBVDone,
        });
    } catch (error) {

        res.status(500).json({
            message: 'Error occurred while processing the SOAP request',
            error,
        });
    }
}
