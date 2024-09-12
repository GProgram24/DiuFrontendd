import React, { useEffect } from 'react';

const TransformSpaces = () => {

    useEffect(() => {
        // Initialize the juxtapose slider
        new juxtapose.JXSlider('#comparison',
            [
                {
                    src: '/Homepage/bannerBnW.jpg',
                    label: '',
                    credit: ''
                },
                {
                    src: '/Homepage/banner1.jpg',
                    label: '',
                    credit: ''
                }
            ],
            {
                animate: true,
                showLabels: false,
                showCredits: false,
                startingPosition: '50%',
                makeResponsive: true
            });

        // Function to remove the watermark
        const removeKnightLabLink = () => {
            const anchorTag = document.querySelector('a.jx-knightlab');
            if (anchorTag) {
                anchorTag.remove();
            }
        };

        // Use MutationObserver to watch for changes in the DOM and remove the watermark
        const observer = new MutationObserver((mutationsList) => {
            for (let mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    removeKnightLabLink();
                }
            }
        });

        // Start observing the comparison div for any child node additions
        const comparisonDiv = document.getElementById('comparison');
        if (comparisonDiv) {
            observer.observe(comparisonDiv, { childList: true, subtree: true });
        }

        // Clean up observer on component unmount
        return () => {
            observer.disconnect();
        };

    }, []);

    return (
        <div className='w-full  px-5 md:px-0 flex flex-col items-center '>
            <div className='w-full text-center pt-10 pb-8 md:pb-10 flex flex-col items-center gap-2'>
                <h1 className='text-[22px] md:text-[32px] font-bold font-heading '>How we transform Spaces</h1>
                <p className='text-[14px] md:text-lg font-subHeading'>See Before and After</p>
            </div>

            <div id="comparison" className=''></div>
        </div>
    );
}

export default TransformSpaces;
