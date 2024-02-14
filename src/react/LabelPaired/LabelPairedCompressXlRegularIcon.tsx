import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCompressXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.5 8.25v6q-.046.703-.75.75h-6q-.703-.047-.75-.75.047-.703.75-.75H6V8.25q.046-.703.75-.75.704.046.75.75M.75 21h6q.704.046.75.75v6q-.046.704-.75.75-.703-.046-.75-.75V22.5H.75q-.703-.046-.75-.75.047-.704.75-.75M15 8.25v5.25h5.25q.704.047.75.75-.046.703-.75.75h-6q-.703-.047-.75-.75v-6q.047-.703.75-.75.703.046.75.75M14.25 21h6q.704.046.75.75-.046.704-.75.75H15v5.25q-.047.704-.75.75-.703-.046-.75-.75v-6q.047-.704.75-.75' />
    </g>
    <defs>
      <clipPath id='d57d8a6ac53eeafa48d392d0ed851c77__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCompressXlRegularIcon);
export default ForwardRef;
