import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedObjectsAlignLeftMdBoldIcon = (
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
      <path d='M0 4.75A.74.74 0 0 1 .75 4a.76.76 0 0 1 .75.75v14.5a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75zM5.5 9.5h9v-2h-9zM4 7.5A1.5 1.5 0 0 1 5.5 6h9c.813 0 1.5.688 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5h-9A1.48 1.48 0 0 1 4 9.5zm1.5 9h5v-2h-5zm-1.5-2A1.5 1.5 0 0 1 5.5 13h5c.813 0 1.5.688 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5h-5A1.48 1.48 0 0 1 4 16.5z' />
    </g>
    <defs>
      <clipPath id='7c10e506c2a6726193fce4576ce494e1__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedObjectsAlignLeftMdBoldIcon);
export default ForwardRef;
