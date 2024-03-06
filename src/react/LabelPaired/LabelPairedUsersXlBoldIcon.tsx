import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUsersXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.75 13.5q-2.109-.047-3.234-1.875-1.032-1.875 0-3.75Q4.64 6.047 6.75 6q2.109.046 3.234 1.875 1.032 1.875 0 3.75Q8.86 13.453 6.75 13.5m17.25 0q-2.109-.047-3.234-1.875-1.032-1.875 0-3.75Q21.89 6.047 24 6q2.109.046 3.234 1.875 1.032 1.875 0 3.75Q26.11 13.453 24 13.5M0 20.016q.047-2.157 1.453-3.563T5.016 15h1.968q1.125 0 2.11.469A6 6 0 0 0 9 16.5q.094 2.766 2.016 4.5H.984q-.89-.093-.984-.984M18.984 21q1.922-1.734 2.016-4.5 0-.516-.094-1.031a4.84 4.84 0 0 1 2.11-.469h1.968q2.157.047 3.563 1.453T30 20.016q-.093.89-.984.984zM15 14.25q-1.266.047-1.969 1.125-.562 1.125 0 2.25.703 1.079 1.969 1.125 1.266-.046 1.969-1.125.563-1.125 0-2.25-.703-1.078-1.969-1.125M15 21a4.34 4.34 0 0 1-2.25-.61 4.51 4.51 0 0 1-2.25-3.89 4.51 4.51 0 0 1 2.25-3.89A4.34 4.34 0 0 1 15 12q1.22 0 2.25.61a4.51 4.51 0 0 1 2.25 3.89 4.51 4.51 0 0 1-2.25 3.89A4.34 4.34 0 0 1 15 21m-2.766 3.75q-1.406.047-2.437.844A3.86 3.86 0 0 0 8.39 27.75h13.218a3.86 3.86 0 0 0-1.406-2.156q-1.031-.798-2.437-.844zm0-2.25h5.532q2.625.046 4.406 1.828T24 28.734q-.093 1.172-1.266 1.266H7.266Q6.094 29.907 6 28.734q.046-2.624 1.828-4.406t4.406-1.828' />
    </g>
    <defs>
      <clipPath id='588a460566593c74ecfbdecb344df7c4__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUsersXlBoldIcon);
export default ForwardRef;
