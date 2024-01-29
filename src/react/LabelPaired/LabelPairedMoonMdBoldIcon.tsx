import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMoonMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.531 7.094a5.4 5.4 0 0 0-2.187 1.968Q1.53 10.377 1.5 12q.063 2.344 1.594 3.875 1.562 1.563 3.875 1.625.625 0 1.218-.125a6.95 6.95 0 0 1-3.374-2.531Q3.53 13.094 3.5 10.75q0-2.031 1.031-3.656M6.47 5.03q.093 0 .218-.031h.563q.156 0 .313.031.375.063.468.375.063.375-.25.563a1.2 1.2 0 0 0-.312.187q-.187.125-.375.282h-.032L7 6.5a5.6 5.6 0 0 0-1.469 1.875A5.4 5.4 0 0 0 5 10.75q.063 2.344 1.594 3.875 1.53 1.563 3.875 1.625h.125q.25 0 .469-.031.187-.032.343-.032.375-.062.531.25.157.313-.093.594a2.4 2.4 0 0 0-.25.219q-.188.188-.438.344l-.062.062a.4.4 0 0 1-.094.063Q9.25 18.969 7 19q-1.969-.03-3.531-.969a6.55 6.55 0 0 1-2.5-2.5Q.032 13.97 0 12q.063-2.844 1.875-4.781Q3.688 5.28 6.469 5.03' />
    </g>
    <defs>
      <clipPath id='6f40abf9d107792e44247db8fff9feb6__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoonMdBoldIcon);
export default ForwardRef;
