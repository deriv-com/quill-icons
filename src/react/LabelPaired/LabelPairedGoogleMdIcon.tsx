import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGoogleMdIcon = (
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
      <path d='M15.625 12.188c0 4.437-3.031 7.562-7.5 7.562A7.71 7.71 0 0 1 .375 12a7.73 7.73 0 0 1 7.75-7.75c2.063 0 3.844.781 5.188 2.031l-2.126 2.032C8.438 5.656 3.314 7.656 3.314 12c0 2.719 2.156 4.906 4.812 4.906 3.063 0 4.219-2.187 4.375-3.343H8.125v-2.657H15.5c.063.406.125.781.125 1.281' />
    </g>
    <defs>
      <clipPath id='264fe46676b476ed938a0a49fffe1717__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGoogleMdIcon);
export default ForwardRef;
