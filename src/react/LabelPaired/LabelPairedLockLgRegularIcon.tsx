import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLockLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.25 10.5V13h7.5v-2.5a3.751 3.751 0 0 0-7.5 0M4 13v-2.5c0-2.734 2.227-5 5-5 2.734 0 5 2.266 5 5V13h.625a3.134 3.134 0 0 1 3.125 3.125v6.25a3.11 3.11 0 0 1-3.125 3.125H3.375C1.617 25.5.25 24.133.25 22.375v-6.25A3.11 3.11 0 0 1 3.375 13zm-2.5 3.125v6.25c0 1.055.82 1.875 1.875 1.875h11.25c1.016 0 1.875-.82 1.875-1.875v-6.25c0-1.016-.86-1.875-1.875-1.875H3.375c-1.055 0-1.875.86-1.875 1.875' />
    </g>
    <defs>
      <clipPath id='240b2380e658b13470bf4e793b413593__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLockLgRegularIcon);
export default ForwardRef;
