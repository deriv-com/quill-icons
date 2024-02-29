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
      <path d='M10.637 5.063h1.941l-4.21 4.812 4.948 6.563H9.434l-3.036-3.965-3.472 3.964H.984l4.512-5.14L.738 5.062h3.965L7.465 8.7zm-.684 10.226h1.094L4.129 6.156H2.98z' />
    </g>
    <defs>
      <clipPath id='d4d4e2e8f92968e9664c96db647d6e83__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXTwitterSmIcon);
export default ForwardRef;
