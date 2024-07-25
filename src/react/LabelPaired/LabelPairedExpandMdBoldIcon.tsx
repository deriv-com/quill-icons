import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedExpandMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.25 5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H1.5v2.75a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75v-3.5A.74.74 0 0 1 .75 5zM0 14.75A.74.74 0 0 1 .75 14a.76.76 0 0 1 .75.75v2.75h2.75a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H.75a.72.72 0 0 1-.75-.75zM13.25 5a.76.76 0 0 1 .75.75v3.5a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75V6.5H9.75A.72.72 0 0 1 9 5.75.74.74 0 0 1 9.75 5zm-.75 9.75a.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75v3.5a.74.74 0 0 1-.75.75h-3.5a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75h2.75z' />
    </g>
    <defs>
      <clipPath id='8826c9a4bde49d2e0dcd4b91dbd99d22__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExpandMdBoldIcon);
export default ForwardRef;
