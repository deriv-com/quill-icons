import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGooglePlayMdIcon = (
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
      <path d='m10.156 11.344 1.875-1.875L3.25 4.406zM1.47 4l8 8-8 8a1.19 1.19 0 0 1-.688-1.094V5.125c0-.5.282-.906.688-1.125m13.281 7.063c.594.437.594 1.468.031 1.906l-1.875 1.062L10.844 12l2.062-2zm-11.5 8.53 6.906-6.905 1.875 1.874z' />
    </g>
    <defs>
      <clipPath id='05a0a169b9523d861290447fff9616ef__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGooglePlayMdIcon);
export default ForwardRef;
