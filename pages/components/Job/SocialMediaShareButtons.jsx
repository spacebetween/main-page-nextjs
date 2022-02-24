import React from 'react';


const SocialMediaShareButtons = ({linkToShare, title}) => {

    const url = 'www.localhost:3000/' + linkToShare

    const facebookLink = "https://www.facebook.com/sharer/sharer.php?u=" + url;
    const twitterLink = "https://twitter.com/intent/tweet/?url=" + url + "&text=" + title;
    const linkedinLink = "https://www.linkedin.com/shareArticle?mini=true&url=" + url + "&title=" + title + "&source=https://hrgo.co.uk/";
    const emailLink = "mailto:?Subject=" + title + "&body=Check%20out%20this%20page%20from%20HRGO%20" + url;
    const whatsappLink = `https://api.whatsapp.com/send/?phone&amp;text=${url}&amp;app_absent=0`

    return (

        <ul className="nav nav-inline fontSize-18">
        <li className="nav-item ml-hf">
          <a
            className="btn-whatsapp rounded d-inline-block"
            href={whatsappLink}
            target="_blank"
            title="Link will open in a new window/tab"
          >
            <i className="icomoon-whatsapp align-middle d-inline-block p-hf"></i>
            <span className="sr-only">whatsapp</span>
          </a>
        </li>
        <li className="nav-item ml-hf">
          <a
            className="btn-facebook rounded d-inline-block"
            href={facebookLink}
            target="_blank"
            title="Link will open in a new window/tab"
          >
            <i className="icomoon-facebook align-middle d-inline-block p-hf"></i>
            <span className="sr-only">facebook</span>
          </a>
        </li>
        <li className="nav-item ml-hf">
          <a
            className="btn-linkedin rounded d-inline-block"
            href={linkedinLink}
            target="_blank"
            title="Link will open in a new window/tab"
          >
            {" "}
            <i className="icomoon-linkedin align-middle d-inline-block p-hf"></i>
            <span className="sr-only">linkedin</span>
          </a>
        </li>
        <li className="nav-item ml-hf">
          <a
            className="btn-twitter rounded d-inline-block"
            href={twitterLink}
            target="_blank"
            title="Link will open in a new window/tab"
          >
            <i className="icomoon-twitter align-middle d-inline-block p-hf"></i>
            <span className="sr-only">twitter</span>
          </a>
        </li>
        <li className="nav-item ml-hf">
          <a
            className="btn-envelope rounded d-inline-block"
            href={emailLink}
          >
            <i className="icomoon-envelope align-middle d-inline-block p-hf"></i>
            <span className=" sr-only">email</span>
            <small className="pr-hf">
              <strong>Email a friend</strong>
            </small>
          </a>
        </li>
      </ul>

    )
}

export default SocialMediaShareButtons;