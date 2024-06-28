import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGrid2MdBoldIcon = (
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
      <path d='M2.5 6.5v3h3v-3zM1 6.5A1.5 1.5 0 0 1 2.5 5h3C6.313 5 7 5.688 7 6.5v3A1.5 1.5 0 0 1 5.5 11h-3A1.48 1.48 0 0 1 1 9.5zm1.5 8v3h3v-3zm-1.5 0A1.5 1.5 0 0 1 2.5 13h3c.813 0 1.5.688 1.5 1.5v3A1.5 1.5 0 0 1 5.5 19h-3A1.48 1.48 0 0 1 1 17.5zm12.5-8h-3v3h3zm-3-1.5h3c.813 0 1.5.688 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.48 1.48 0 0 1 9 9.5v-3A1.5 1.5 0 0 1 10.5 5m0 9.5v3h3v-3zm-1.5 0a1.5 1.5 0 0 1 1.5-1.5h3c.813 0 1.5.688 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.48 1.48 0 0 1 9 17.5z' />
    </g>
    <defs>
      <clipPath id='4ab46861bb3c61d137fea74eee019678__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGrid2MdBoldIcon);
export default ForwardRef;
