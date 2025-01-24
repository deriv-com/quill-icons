import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUnlockSmFillIcon = (
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
      <path d='M4.313 7.688V9h6.562c.957 0 1.75.793 1.75 1.75V16c0 .984-.793 1.75-1.75 1.75h-8.75c-.984 0-1.75-.766-1.75-1.75v-5.25c0-.957.766-1.75 1.75-1.75h.438V7.688c0-2.16 1.75-3.938 3.937-3.938 1.559 0 2.926.93 3.555 2.27a.87.87 0 0 1-.438 1.148c-.41.219-.957.027-1.148-.41C8.113 6.02 7.348 5.5 6.5 5.5c-1.23 0-2.187.984-2.187 2.188' />
    </g>
    <defs>
      <clipPath id='647f6c06ff98711f8618b8f083342e44__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUnlockSmFillIcon);
export default ForwardRef;
