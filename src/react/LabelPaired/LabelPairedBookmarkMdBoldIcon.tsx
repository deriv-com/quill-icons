import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBookmarkMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 5.5A1.5 1.5 0 0 1 1.5 4v13.813l4.063-2.907c.25-.187.593-.187.875 0l4.062 2.906V5.5h-9V4h9c.813 0 1.5.688 1.5 1.5v13.75a.78.78 0 0 1-.406.688.78.78 0 0 1-.781-.063L6 16.438l-4.844 3.437a.72.72 0 0 1-.75.063A.78.78 0 0 1 0 19.25z' />
    </g>
    <defs>
      <clipPath id='1a0b3b6f2eb8ee0659fd819ee62f0716__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookmarkMdBoldIcon);
export default ForwardRef;
