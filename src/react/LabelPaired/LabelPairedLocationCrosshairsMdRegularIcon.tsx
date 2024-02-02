import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8 4q.47.031.5.5v1.531q2.22.219 3.75 1.719 1.5 1.53 1.719 3.75H15.5q.47.031.5.5-.03.47-.5.5h-1.531q-.219 2.22-1.719 3.75-1.53 1.5-3.75 1.719V19.5q-.03.47-.5.5-.469-.03-.5-.5v-1.531q-2.22-.219-3.75-1.719-1.5-1.53-1.719-3.75H.5q-.469-.03-.5-.5.031-.469.5-.5h1.531Q2.25 9.28 3.75 7.75q1.53-1.5 3.75-1.719V4.5q.031-.469.5-.5m-5 8q0 1.345.656 2.5A5.2 5.2 0 0 0 5.5 16.344 5.1 5.1 0 0 0 8 17q1.312 0 2.5-.656a5.2 5.2 0 0 0 1.844-1.844Q13 13.345 13 12t-.656-2.5A5.2 5.2 0 0 0 10.5 7.656 5.1 5.1 0 0 0 8 7q-1.312 0-2.5.656A5.2 5.2 0 0 0 3.656 9.5 5 5 0 0 0 3 12m7 0q-.03-1.125-1-1.719-1-.562-2 0-.97.594-1 1.719.03 1.125 1 1.719 1 .562 2 0 .97-.594 1-1.719m-5 0q0-.813.406-1.5T6.5 9.406Q7.22 9.001 8 9a3.01 3.01 0 0 1 2.594 1.5Q11 11.187 11 12t-.406 1.5T9.5 14.594Q8.78 15 8 15a3.01 3.01 0 0 1-2.594-1.5A2.9 2.9 0 0 1 5 12' />
    </g>
    <defs>
      <clipPath id='0ba24a87cce0c093__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsMdRegularIcon);
export default ForwardRef;
