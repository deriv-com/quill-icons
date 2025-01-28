import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileScreenButtonSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.125 4.625h-5.25A.88.88 0 0 0 2 5.5v7h7v-7a.9.9 0 0 0-.875-.875M9 13.375H2V16c0 .492.383.875.875.875h5.25A.88.88 0 0 0 9 16zM2.875 3.75h5.25c.957 0 1.75.793 1.75 1.75V16c0 .984-.793 1.75-1.75 1.75h-5.25c-.984 0-1.75-.766-1.75-1.75V5.5c0-.957.766-1.75 1.75-1.75m1.313 11.375a.45.45 0 0 1 .437-.437h1.75a.47.47 0 0 1 .438.437.45.45 0 0 1-.438.438h-1.75a.43.43 0 0 1-.437-.438' />
    </g>
    <defs>
      <clipPath id='1e93b992847610640b912f04d98216da__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileScreenButtonSmRegularIcon);
export default ForwardRef;
