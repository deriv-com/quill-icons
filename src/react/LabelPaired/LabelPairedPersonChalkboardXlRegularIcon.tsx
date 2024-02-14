import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPersonChalkboardXlRegularIcon = (
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
      <path d='M7.875 8.625Q7.97 9.657 9 9.75q1.032-.093 1.125-1.125Q10.032 7.595 9 7.5q-1.03.095-1.125 1.125m3.75 0q-.047 1.5-1.312 2.25-1.313.75-2.626 0-1.264-.75-1.312-2.25.047-1.5 1.313-2.25 1.313-.75 2.625 0 1.264.75 1.312 2.25M8.391 13.5q-.47 0-.891.188V21h3v-7.5zM7.5 29.25q-.046.704-.75.75-.703-.046-.75-.75V15.469l-2.344 4.406q-.375.563-.984.281-.61-.375-.328-.984l2.765-5.203Q6.19 12.094 8.391 12H15V8.25q.047-.937.656-1.594A2.45 2.45 0 0 1 17.25 6h10.5q.937.047 1.594.656.61.657.656 1.594v10.5a2.45 2.45 0 0 1-.656 1.594A2.45 2.45 0 0 1 27.75 21h-10.5a2.45 2.45 0 0 1-1.594-.656A2.45 2.45 0 0 1 15 18.75V15h1.5v3.75q.046.704.75.75h10.5q.704-.046.75-.75V8.25q-.046-.703-.75-.75h-10.5q-.704.046-.75.75V12h2.25q.704.047.75.75-.046.703-.75.75H12v15.75q-.047.704-.75.75-.703-.046-.75-.75V22.5h-3z' />
    </g>
    <defs>
      <clipPath id='125722a5131c6c45c2f517b64e141efa__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPersonChalkboardXlRegularIcon);
export default ForwardRef;
