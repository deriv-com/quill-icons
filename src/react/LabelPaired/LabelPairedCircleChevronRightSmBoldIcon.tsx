import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleChevronRightSmBoldIcon = (
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
      <path d='M12.688 10.75q0-1.56-.766-2.844a5.7 5.7 0 0 0-2.078-2.078A5.64 5.64 0 0 0 7 5.062q-1.504 0-2.844.766a5.7 5.7 0 0 0-2.078 2.078 5.45 5.45 0 0 0-.765 2.844q0 1.56.765 2.844.738 1.286 2.078 2.078 1.34.765 2.844.765t2.844-.765q1.34-.794 2.078-2.078.765-1.286.765-2.844M0 10.75q.027-1.914.93-3.5.93-1.586 2.57-2.57 1.668-.93 3.5-.93t3.5.93q1.64.984 2.57 2.57.903 1.586.93 3.5-.027 1.914-.93 3.5-.93 1.586-2.57 2.57-1.668.93-3.5.93t-3.5-.93q-1.64-.984-2.57-2.57-.903-1.586-.93-3.5m6.59 3.309q-.465.383-.93 0-.383-.465 0-.93l2.38-2.379-2.38-2.379q-.383-.465 0-.93.465-.383.93 0l2.844 2.844q.383.465 0 .93z' />
    </g>
    <defs>
      <clipPath id='82d4fe89f888aebd__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleChevronRightSmBoldIcon);
export default ForwardRef;
