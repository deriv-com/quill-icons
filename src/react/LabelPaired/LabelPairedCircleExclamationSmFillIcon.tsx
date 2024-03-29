import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleExclamationSmFillIcon = (
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
      <path d='M7 17.75a6.96 6.96 0 0 1-6.07-3.5c-1.258-2.16-1.258-4.812 0-7A7.02 7.02 0 0 1 7 3.75c2.488 0 4.785 1.34 6.043 3.5 1.258 2.188 1.258 4.84 0 7A6.95 6.95 0 0 1 7 17.75m0-10.5c-.383 0-.656.3-.656.656v3.063c0 .383.273.656.656.656a.65.65 0 0 0 .656-.656V7.906c0-.355-.3-.656-.656-.656m-.875 6.125c0 .492.383.875.875.875a.88.88 0 0 0 .875-.875A.9.9 0 0 0 7 12.5a.88.88 0 0 0-.875.875' />
    </g>
    <defs>
      <clipPath id='42e666fa0a255eb66fde3a13b5261e97__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleExclamationSmFillIcon);
export default ForwardRef;
