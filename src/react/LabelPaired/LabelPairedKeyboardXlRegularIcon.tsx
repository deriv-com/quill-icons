import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedKeyboardXlRegularIcon = (
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
      <path d='M3 10.5q-.656 0-1.078.422Q1.5 11.343 1.5 12v12q0 .657.422 1.078.421.422 1.078.422h21q.657 0 1.078-.422.422-.421.422-1.078V12q0-.656-.422-1.078Q24.657 10.5 24 10.5zM0 12q.047-1.266.89-2.11Q1.735 9.048 3 9h21q1.266.047 2.11.89.843.844.89 2.11v12q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89Q.048 25.265 0 24zm4.125.375h.75q.704.047.75.75v.75q-.046.703-.75.75h-.75q-.703-.047-.75-.75v-.75q.046-.703.75-.75m-.75 5.25q.046-.704.75-.75h.75q.704.046.75.75v.75q-.046.704-.75.75h-.75q-.703-.046-.75-.75zm.75 3.75h.75q.704.046.75.75v.75q-.046.704-.75.75h-.75q-.703-.046-.75-.75v-.75q.046-.704.75-.75m3.75-8.25q.047-.703.75-.75h.75q.703.047.75.75v.75q-.047.703-.75.75h-.75q-.703-.047-.75-.75zm.75 3.75h.75q.703.046.75.75v.75q-.047.704-.75.75h-.75q-.703-.046-.75-.75v-.75q.047-.704.75-.75m3.75-3.75q.047-.703.75-.75h.75q.703.047.75.75v.75q-.047.703-.75.75h-.75q-.703-.047-.75-.75zm.75 3.75h.75q.703.046.75.75v.75q-.047.704-.75.75h-.75q-.703-.046-.75-.75v-.75q.047-.704.75-.75m3.75-3.75q.046-.703.75-.75h.75q.704.047.75.75v.75q-.046.703-.75.75h-.75q-.704-.047-.75-.75zm.75 3.75h.75q.704.046.75.75v.75q-.046.704-.75.75h-.75q-.704-.046-.75-.75v-.75q.046-.704.75-.75m3.75-3.75q.046-.703.75-.75h.75q.704.047.75.75v.75q-.046.703-.75.75h-.75q-.704-.047-.75-.75zm.75 3.75h.75q.704.046.75.75v.75q-.046.704-.75.75h-.75q-.704-.046-.75-.75v-.75q.046-.704.75-.75m-.75 5.25q.046-.704.75-.75h.75q.704.046.75.75v.75q-.046.704-.75.75h-.75q-.704-.046-.75-.75zM8.25 21.75h10.5q.704.046.75.75-.046.704-.75.75H8.25q-.703-.046-.75-.75.046-.704.75-.75' />
    </g>
    <defs>
      <clipPath id='318e86a67508ef8b1ee81ed18666e455__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedKeyboardXlRegularIcon);
export default ForwardRef;
