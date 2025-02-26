import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSlidersMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 17c0-.25.219-.5.5-.5h2.031c.25-1.125 1.25-2 2.469-2a2.51 2.51 0 0 1 2.438 2H15.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H7.438A2.48 2.48 0 0 1 5 19.5a2.514 2.514 0 0 1-2.469-2H.5A.494.494 0 0 1 0 17m3.5 0c0 .563.281 1.031.75 1.313.438.28 1.031.28 1.5 0 .438-.282.75-.75.75-1.313 0-.531-.312-1-.75-1.281-.469-.281-1.062-.281-1.5 0-.469.281-.75.75-.75 1.281m6-5c0 .563.281 1.031.75 1.313.438.28 1.031.28 1.5 0 .438-.282.75-.75.75-1.313 0-.531-.312-1-.75-1.281-.469-.281-1.062-.281-1.5 0-.469.281-.75.75-.75 1.281M11 9.5a2.51 2.51 0 0 1 2.438 2H15.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-2.062c-.22 1.156-1.25 2-2.438 2a2.514 2.514 0 0 1-2.469-2H.5A.494.494 0 0 1 0 12c0-.25.219-.5.5-.5h8.031c.25-1.125 1.25-2 2.469-2m-5-1c.531 0 1-.281 1.281-.75.282-.437.282-1.031 0-1.5C7 5.813 6.531 5.5 6 5.5c-.562 0-1.031.313-1.312.75-.282.469-.282 1.063 0 1.5.28.469.75.75 1.312.75m2.438-2H15.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H8.438A2.48 2.48 0 0 1 6 9.5a2.514 2.514 0 0 1-2.469-2H.5A.494.494 0 0 1 0 7c0-.25.219-.5.5-.5h3.031c.25-1.125 1.25-2 2.469-2a2.51 2.51 0 0 1 2.438 2' />
    </g>
    <defs>
      <clipPath id='9bc67f1ef1f14ffa89877cffe9b8a815__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSlidersMdRegularIcon);
export default ForwardRef;
