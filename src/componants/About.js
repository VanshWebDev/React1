import React from 'react'

export default function About(props) {
    return (
        <div className='container' >
            <div className="accordion " id="accordionExample">
                <div className={`accordion-item bg-${props.textMode=== 'light' ? 'dark' : 'light'}`} >
                    <h2 className={`accordion-header`}>
                        <button className={`accordion-button collapsed bg-${props.textMode=== 'light' ? 'dark' : 'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne ">
                            <code>Accordion Item #1</code>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className={`accordion-body text-${props.textMode}`}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the accordion-body, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className={`accordion-item bg-${props.textMode=== 'light' ? 'dark' : 'light'}`}>
                    <h2 className="accordion-header">
                        <button className={`accordion-button collapsed bg-${props.textMode=== 'light' ? 'dark' : 'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <code>Accordion Item #2</code>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className={`accordion-body text-${props.textMode}`}>
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className={`accordion-item bg-${props.textMode=== 'light' ? 'dark' : 'light'}`}>
                    <h2 className="accordion-header">
                        <button className={`accordion-button collapsed bg-${props.textMode=== 'light' ? 'dark' : 'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <code>Accordion Item #3</code>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className={`accordion-body text-${props.textMode}`}>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
