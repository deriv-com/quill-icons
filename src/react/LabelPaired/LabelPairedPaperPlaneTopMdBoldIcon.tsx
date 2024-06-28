import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPaperPlaneTopMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={17}
    height={24}
    viewBox='0 0 17 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.656 11.25h7.813L2.53 7zm0 1.5-2.125 4.281 9.938-4.281zM1.875 5.094l14 6c.375.156.625.531.625.937 0 .375-.25.75-.625.906l-14 6a1.02 1.02 0 0 1-1.125-.25c-.281-.28-.344-.75-.156-1.125L3.375 12 .594 6.469A1.05 1.05 0 0 1 .75 5.312c.281-.28.75-.375 1.125-.218' />
    </g>
    <defs>
      <clipPath id='8c93c4bf296e7fbc8ef31c94bca2dacf__a'>
        <path d='M0 0h17v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPaperPlaneTopMdBoldIcon);
export default ForwardRef;
