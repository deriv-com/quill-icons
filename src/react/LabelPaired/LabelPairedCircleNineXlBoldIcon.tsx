import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleNineXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M21.75 18q0-2.671-1.312-4.875-1.266-2.203-3.563-3.562Q14.578 8.25 12 8.25T7.125 9.563q-2.297 1.359-3.562 3.562Q2.25 15.329 2.25 18t1.313 4.875q1.264 2.203 3.562 3.563Q9.422 27.75 12 27.75t4.875-1.312q2.297-1.36 3.563-3.563Q21.75 20.671 21.75 18M0 18q.047-3.28 1.594-6Q3.187 9.282 6 7.594 8.859 6 12 6t6 1.594Q20.813 9.28 22.406 12q1.548 2.72 1.594 6-.046 3.282-1.594 6-1.593 2.719-4.406 4.406Q15.141 30 12 30t-6-1.594Q3.187 26.72 1.594 24 .047 21.282 0 18m12-3.75q-1.266.047-1.969 1.125-.562 1.125 0 2.25.703 1.079 1.969 1.125 1.266-.046 1.969-1.125.562-1.125 0-2.25-.703-1.078-1.969-1.125m-1.219 6.563a4.4 4.4 0 0 1-2.344-1.594q-.89-1.126-.937-2.719.047-1.922 1.313-3.187Q10.078 12.047 12 12q1.922.047 3.188 1.313 1.264 1.265 1.312 3.187-.046 2.39-1.828 3.938l-3.797 3.28q-.843.61-1.594-.093-.61-.844.094-1.594z' />
    </g>
    <defs>
      <clipPath id='6298cf076adb6178cf3d586791b2d3dd__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleNineXlBoldIcon);
export default ForwardRef;
