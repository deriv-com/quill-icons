import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWifiSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.316 8.836a.62.62 0 0 1-.902-.055.653.653 0 0 1 .055-.93A12.88 12.88 0 0 1 9 4.626c3.254 0 6.234 1.23 8.504 3.227.273.246.3.656.082.93a.653.653 0 0 1-.93.054A11.56 11.56 0 0 0 9 5.937a11.57 11.57 0 0 0-7.684 2.899M9 10.75c-1.777 0-3.39.684-4.594 1.805a.653.653 0 0 1-.93-.055.68.68 0 0 1 .028-.93A8.15 8.15 0 0 1 9 9.437c2.105 0 4.02.82 5.469 2.133a.68.68 0 0 1 .027.93.653.653 0 0 1-.93.055A6.7 6.7 0 0 0 9 10.75m1.531 4.594a1.532 1.532 0 0 1-2.297 1.34c-.492-.274-.765-.766-.765-1.34 0-.547.273-1.04.765-1.313a1.532 1.532 0 0 1 2.297 1.313' />
    </g>
    <defs>
      <clipPath id='82e8929f18a59b714fd488533381f0dd__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWifiSmBoldIcon);
export default ForwardRef;
