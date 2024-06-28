import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLockSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.313 7.688V9h4.375V7.688A2.194 2.194 0 0 0 6.5 5.5c-1.23 0-2.187.984-2.187 2.188M2.563 9V7.688c0-2.16 1.75-3.938 3.937-3.938 2.16 0 3.938 1.777 3.938 3.938V9h.437c.957 0 1.75.793 1.75 1.75V16c0 .984-.793 1.75-1.75 1.75h-8.75c-.984 0-1.75-.766-1.75-1.75v-5.25c0-.957.766-1.75 1.75-1.75z' />
    </g>
    <defs>
      <clipPath id='999a8cb908f85b82f60aace92e35af5d__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLockSmFillIcon);
export default ForwardRef;
