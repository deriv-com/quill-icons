import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLaptopMobileCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 4.625A.385.385 0 0 0 2.625 5v6H8.25v1.5H1.125A1.11 1.11 0 0 1 0 11.375C0 11.188.164 11 .375 11H1.5V5c0-.82.656-1.5 1.5-1.5h7.5c.82 0 1.5.68 1.5 1.5v.75h-1.125V5a.4.4 0 0 0-.375-.375zm6 3c0-.61.492-1.125 1.125-1.125h3.75c.61 0 1.125.516 1.125 1.125v6.75c0 .633-.516 1.125-1.125 1.125h-3.75A1.11 1.11 0 0 1 9 14.375zm1.125 0v6.75h3.75v-6.75z' />
    </g>
    <defs>
      <clipPath id='90652b6f33ce6065cdb0530a87082d40__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopMobileCaptionBoldIcon);
export default ForwardRef;
