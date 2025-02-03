import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCloneSmFillIcon = (
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
      <path d='M7.875 16v-1.75h1.75V16c0 .984-.793 1.75-1.75 1.75H1.75C.766 17.75 0 16.984 0 16V9.875c0-.957.766-1.75 1.75-1.75H3.5v1.75H1.75V16zm-1.75-2.625c-.984 0-1.75-.766-1.75-1.75V5.5c0-.957.766-1.75 1.75-1.75h6.125c.957 0 1.75.793 1.75 1.75v6.125c0 .984-.793 1.75-1.75 1.75z' />
    </g>
    <defs>
      <clipPath id='8446d40467d43a0631d2b3fcf006988c__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCloneSmFillIcon);
export default ForwardRef;
