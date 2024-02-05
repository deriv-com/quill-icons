import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVideoXlRegularIcon = (
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
      <path d='M3 10.5q-.656 0-1.078.422Q1.5 11.343 1.5 12v12q0 .657.422 1.078.421.422 1.078.422h12q.657 0 1.078-.422.422-.421.422-1.078V12q0-.656-.422-1.078Q15.657 10.5 15 10.5zM0 12q.047-1.266.89-2.11Q1.735 9.048 3 9h12q1.266.047 2.11.89.843.844.89 2.11v12q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89Q.048 25.265 0 24zm24.328 13.266L19.5 22.594v-1.688l5.578 3.047q.047.047.14.047.235 0 .282-.281V12.28a.33.33 0 0 0-.281-.281q-.095 0-.14.047L19.5 15.094v-1.688l4.828-2.672q.422-.234.89-.234.75 0 1.266.516.516.515.516 1.265V23.72q0 .75-.516 1.265a1.72 1.72 0 0 1-1.265.516q-.47 0-.89-.234' />
    </g>
    <defs>
      <clipPath id='2bf9fead0414eaa6c2ed23ef4de44a66__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVideoXlRegularIcon);
export default ForwardRef;
