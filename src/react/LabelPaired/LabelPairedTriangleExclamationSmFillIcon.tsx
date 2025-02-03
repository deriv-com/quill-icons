import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTriangleExclamationSmFillIcon = (
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
      <path d='M7 4.625c.383 0 .738.219.93.547l5.906 10.062c.191.356.191.766 0 1.094a1.04 1.04 0 0 1-.93.547H1.094c-.41 0-.766-.191-.957-.547a1.11 1.11 0 0 1 0-1.094L6.043 5.172c.191-.328.547-.547.957-.547m0 3.5c-.383 0-.656.3-.656.656v3.063c0 .383.273.656.656.656a.65.65 0 0 0 .656-.656V8.78c0-.355-.3-.656-.656-.656m.875 6.125A.9.9 0 0 0 7 13.375a.88.88 0 0 0-.875.875c0 .492.383.875.875.875a.88.88 0 0 0 .875-.875' />
    </g>
    <defs>
      <clipPath id='52d4eaa985d125895fa0bd29d6d19273__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTriangleExclamationSmFillIcon);
export default ForwardRef;
