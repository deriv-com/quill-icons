import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleNineLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M18.125 15.5q0-2.226-1.094-4.062-1.054-1.837-2.968-2.97A8.06 8.06 0 0 0 10 7.376a8.06 8.06 0 0 0-4.062 1.094q-1.915 1.133-2.97 2.969-1.092 1.835-1.093 4.062t1.094 4.063q1.054 1.836 2.969 2.968A8.06 8.06 0 0 0 10 23.625a8.06 8.06 0 0 0 4.063-1.094q1.913-1.132 2.968-2.968 1.095-1.837 1.094-4.063M0 15.5q.04-2.735 1.328-5Q2.657 8.235 5 6.828 7.383 5.5 10 5.5t5 1.328q2.344 1.407 3.672 3.672 1.29 2.265 1.328 5-.04 2.735-1.328 5-1.329 2.265-3.672 3.672-2.382 1.328-5 1.328t-5-1.328Q2.657 22.765 1.328 20.5.038 18.235 0 15.5m10-3.125q-1.055.038-1.64.938-.47.937 0 1.874.585.9 1.64.938 1.055-.039 1.64-.937.47-.938 0-1.876-.585-.898-1.64-.937m-1.016 5.469a3.67 3.67 0 0 1-1.953-1.328q-.742-.937-.781-2.266.038-1.602 1.094-2.656Q8.398 10.539 10 10.5q1.602.038 2.656 1.094 1.055 1.054 1.094 2.656-.04 1.992-1.523 3.281l-3.165 2.735q-.702.507-1.328-.078-.507-.704.079-1.329z' />
    </g>
    <defs>
      <clipPath id='0bc2658d49b9f0b3__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleNineLgBoldIcon);
export default ForwardRef;
