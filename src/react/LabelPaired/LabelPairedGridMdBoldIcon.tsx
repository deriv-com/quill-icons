import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGridMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.75 6.25h-1.5v1.5h1.5zM1.25 5h1.5q.531 0 .875.375Q4 5.719 4 6.25v1.5q0 .531-.375.875Q3.281 9 2.75 9h-1.5q-.531 0-.875-.375Q0 8.281 0 7.75v-1.5q0-.531.375-.875Q.719 5 1.25 5m1.5 6.25h-1.5v1.5h1.5zM1.25 10h1.5q.531 0 .875.375.375.344.375.875v1.5q0 .531-.375.875Q3.281 14 2.75 14h-1.5q-.531 0-.875-.375Q0 13.281 0 12.75v-1.5q0-.531.375-.875Q.719 10 1.25 10m0 6.25v1.5h1.5v-1.5zm-1.25 0q0-.531.375-.875Q.719 15 1.25 15h1.5q.531 0 .875.375.375.344.375.875v1.5q0 .531-.375.875Q3.281 19 2.75 19h-1.5q-.531 0-.875-.375Q0 18.281 0 17.75zm7.75-10h-1.5v1.5h1.5zM6.25 5h1.5q.531 0 .875.375Q9 5.719 9 6.25v1.5q0 .531-.375.875Q8.281 9 7.75 9h-1.5q-.531 0-.875-.375Q5 8.281 5 7.75v-1.5q0-.531.375-.875Q5.719 5 6.25 5m0 6.25v1.5h1.5v-1.5zm-1.25 0q0-.531.375-.875Q5.719 10 6.25 10h1.5q.531 0 .875.375.375.344.375.875v1.5q0 .531-.375.875Q8.281 14 7.75 14h-1.5q-.531 0-.875-.375Q5 13.281 5 12.75zm2.75 5h-1.5v1.5h1.5zM6.25 15h1.5q.531 0 .875.375.375.344.375.875v1.5q0 .531-.375.875Q8.281 19 7.75 19h-1.5q-.531 0-.875-.375Q5 18.281 5 17.75v-1.5q0-.531.375-.875Q5.719 15 6.25 15m5-8.75v1.5h1.5v-1.5zm-1.25 0q0-.531.375-.875Q10.719 5 11.25 5h1.5q.531 0 .875.375.375.344.375.875v1.5q0 .531-.375.875Q13.281 9 12.75 9h-1.5q-.531 0-.875-.375Q10 8.281 10 7.75zm2.75 5h-1.5v1.5h1.5zM11.25 10h1.5q.531 0 .875.375.375.344.375.875v1.5q0 .531-.375.875-.344.375-.875.375h-1.5q-.531 0-.875-.375Q10 13.281 10 12.75v-1.5q0-.531.375-.875.344-.375.875-.375m0 6.25v1.5h1.5v-1.5zm-1.25 0q0-.531.375-.875.344-.375.875-.375h1.5q.531 0 .875.375.375.344.375.875v1.5q0 .531-.375.875-.344.375-.875.375h-1.5q-.531 0-.875-.375Q10 18.281 10 17.75z' />
    </g>
    <defs>
      <clipPath id='cee7cd0a77b13ee7__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGridMdBoldIcon);
export default ForwardRef;
