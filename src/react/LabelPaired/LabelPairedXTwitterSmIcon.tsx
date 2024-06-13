import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedXTwitterSmIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.637 5.063h1.914L8.34 9.903l4.976 6.534H9.434L6.37 12.474l-3.473 3.964H.957l4.512-5.14L.71 5.062h3.992L7.437 8.7zm-.684 10.226h1.067L4.129 6.156H2.98z' />
    </g>
    <defs>
      <clipPath id='ee51ed158a511a6994301db8b3f718f6__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXTwitterSmIcon);
export default ForwardRef;
