import React from 'react'
import { useState } from 'react'
import Question from './question'
const Faq = () => {
    const [isActive, setActive] = useState(false);
    const handleClick = (id) => {
        setActive(!isActive)
    }
    const questions = [{
        'id': '01',
        'question': 'Do I have to pay to download TikTok video?',
        'answer': `No, you don't have to pay for anything, because our service is always free! We support all
     modern browsers such as Google Chrome, Mozilla Firefox, Safari, Microsoft Edge etc.`
    },
    {
        'id': '02',
        'question': 'Do I need to install extensions to use TikTok downloader?',
        'answer': `No. To save and remove the watermark from TikTok online, you just need a link. Paste it into the
        input field and select the appropriate format for conversion. Our TikTok watermark remover will
        do the rest.`
    },
    {
        'id': '03',
        'question':'Where are TikTok videos saved after downloading?',
        'answer':`When you save from TikTok without trademark, files are usually saved to your default location.
        In your browser settings, you can change and manually select the destination folder for your
        downloaded TikTok videos.`
    },{
        'id' : '04',
        'question':'Do I need to have a TT account to download TikTok videos?',
        'answer':`No, you do not need to have a TT account. You can launch TikTok video download when you have a
        link to it, just paste it into the input field at the top of the page and click "Download". Our
        TikTok download service will remove the watermark from TikTok and the video will be ready to use
        in a few seconds.`
    },{
        'id': '05',
        'question':'How to get link for TikTok videos?',
        'answer':`Open the TT app and Choose the video you want to save. Click "Share" and then "Copy Link". Your
        TikTok video download without watermark URL is ready on your clipboard.`
    },
    {
        'id': '06',
        'question':'Can your TikTok video downloader save videos from personal accounts?',
        'answer':` No, you do not need to have a TT account. You can launch TikTok video download when you have a
        link to it, just paste it into the input field at the top of the page and click "Download". Our
        TikTok download service will remove the watermark from TikTok and the video will be ready to use
        in a few seconds.`
    }
]
    return (
        <div className='faq accordion'>
            {questions.map(item => <Question key ={item.id} id={item.id} question={item.question} answer={item.answer} />)}
        </div>
    )
}

export default Faq
