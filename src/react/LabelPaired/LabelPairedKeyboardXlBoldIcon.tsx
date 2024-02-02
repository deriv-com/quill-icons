import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedKeyboardXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 11.25q-.703.047-.75.75v12q.046.704.75.75h21q.704-.046.75-.75V12q-.046-.703-.75-.75zM0 12q.047-1.266.89-2.11Q1.735 9.048 3 9h21q1.266.047 2.11.89.843.844.89 2.11v12q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89Q.048 25.265 0 24zm8.25 9h10.5q.704.046.75.75v.75q-.046.704-.75.75H8.25q-.703-.046-.75-.75v-.75q.046-.704.75-.75m-3.375-3.375q.046-.704.75-.75h.75q.704.046.75.75v.75q-.046.704-.75.75h-.75q-.703-.046-.75-.75zm.75-4.5h.75q.704.047.75.75v.75q-.046.703-.75.75h-.75q-.703-.047-.75-.75v-.75q.046-.703.75-.75m3 4.5q.047-.704.75-.75h.75q.703.046.75.75v.75q-.047.704-.75.75h-.75q-.703-.046-.75-.75zm.75-4.5h.75q.703.047.75.75v.75q-.047.703-.75.75h-.75q-.703-.047-.75-.75v-.75q.047-.703.75-.75m3 4.5q.047-.704.75-.75h.75q.703.046.75.75v.75q-.047.704-.75.75h-.75q-.703-.046-.75-.75zm.75-4.5h.75q.703.047.75.75v.75q-.047.703-.75.75h-.75q-.703-.047-.75-.75v-.75q.047-.703.75-.75m3 4.5q.046-.704.75-.75h.75q.704.046.75.75v.75q-.046.704-.75.75h-.75q-.704-.046-.75-.75zm.75-4.5h.75q.704.047.75.75v.75q-.046.703-.75.75h-.75q-.704-.047-.75-.75v-.75q.046-.703.75-.75m3 4.5q.046-.704.75-.75h.75q.704.046.75.75v.75q-.046.704-.75.75h-.75q-.704-.046-.75-.75zm.75-4.5h.75q.704.047.75.75v.75q-.046.703-.75.75h-.75q-.704-.047-.75-.75v-.75q.046-.703.75-.75' />
    </g>
    <defs>
      <clipPath id='93c451fdb9349e51__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedKeyboardXlBoldIcon);
export default ForwardRef;
