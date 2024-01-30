import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMicrophoneSmBoldIcon = (
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
      <path d='M6.813 6.375a1.43 1.43 0 0 0-.383-.93 1.43 1.43 0 0 0-.93-.383 1.43 1.43 0 0 0-.93.383 1.43 1.43 0 0 0-.383.93v4.375q.028.548.383.93.383.355.93.383.547-.028.93-.383.355-.383.383-.93zm-3.938 0q.027-1.12.766-1.86.738-.738 1.859-.765 1.12.027 1.86.766.738.738.765 1.859v4.375q-.027 1.12-.766 1.86-.738.738-1.859.765-1.12-.027-1.86-.766-.738-.738-.765-1.859zM2 9.656v1.094q.027 1.476 1.012 2.488 1.012.985 2.488 1.012 1.476-.027 2.488-1.012Q8.973 12.226 9 10.75V9.656q.054-.601.656-.656.602.054.656.656v1.094q-.027 1.86-1.203 3.172-1.148 1.312-2.953 1.586v.93H7.47q.601.054.656.656-.054.601-.656.656H3.53q-.601-.055-.656-.656.054-.602.656-.657h1.313v-.93q-1.805-.272-2.953-1.585Q.715 12.61.688 10.75V9.656q.054-.601.656-.656.601.054.656.656' />
    </g>
    <defs>
      <clipPath id='d8b3a8376ba64cb8330825d971bd8c1b__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMicrophoneSmBoldIcon);
export default ForwardRef;
