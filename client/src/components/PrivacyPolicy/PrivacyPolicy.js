import React from 'react'

import { Paper,Button } from '@material-ui/core';
import { useStyles } from "./styles";

/**
* @author
* @function PrivacyPolicy
**/

const PrivacyPolicy = (props) => {
    const classes = useStyles();

    return(
        <Paper className={classes.container} elevation={6}>
            <div className={classes.heading}>Privacy Policy</div>
            <ol className={classes.privacyContainer}>
                <li className={classes.points}>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You. We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</li>
                <li className={classes.points}>Using this site means you accept its terms. Don't be put off by the legalese, but please read these terms and conditions of use carefully before using this website.</li>
                <li className={classes.points}>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to: 
                    <ul>
                        <li>Email address</li>
                        <li>Usage Data</li>
                    </ul>
                </li>
                <li className={classes.points}>What is <b>Usage Data</b>?<br />Usage Data is collected automatically when using the Service. Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data. When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data. We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</li>
                <li className={classes.points}>This site and all features it provides are developed for the sole purpose of entertainment. Device Interactions / Roovie are not responsible for any complaints, lawsuits, and objections caused as a result of the content on this site.</li>
                <li className={classes.points}>Any users with malicious intent will be dealt with stern legal action. Any misuse of our website, servers, brand or name, whether online or offline, are not permitted and will attract legal action.</li>
                <li className={classes.points}>We strive to ensure 100% uptime of the website. However, the site may face downtime in case of updates, maintenance or rare internal technical issues. You agree that Device Interactions / Roovie may take down the site, move it, change it or discontinue it at any time without prior intimation.</li>
            </ol>
            <div className={classes.privacyButton}>
                <Button variant="contained" color="secondary" onClick={ () => { window.location.assign('/home') } }>Continue...</Button>
            </div>
        </Paper>
    )
}

export default PrivacyPolicy;