import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUnlockXlRegularIcon = (
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
      <path d='M6 12v3h11.25q1.594.046 2.672 1.078Q20.953 17.157 21 18.75v7.5q-.046 1.594-1.078 2.672Q18.843 29.953 17.25 30H3.75q-1.593-.046-2.672-1.078Q.047 27.843 0 26.25v-7.5q.046-1.593 1.078-2.672Q2.157 15.047 3.75 15h.75v-3q.047-2.531 1.734-4.266Q7.97 6.047 10.5 6q2.062.047 3.61 1.219 1.546 1.172 2.156 3.093.14.657-.516.891-.703.141-.937-.469a4.4 4.4 0 0 0-1.594-2.343Q12.047 7.547 10.5 7.5q-1.922.047-3.187 1.313Q6.047 10.078 6 12m-4.5 6.75v7.5q.047.937.656 1.594.657.61 1.594.656h13.5a2.45 2.45 0 0 0 1.594-.656q.61-.657.656-1.594v-7.5a2.45 2.45 0 0 0-.656-1.594 2.45 2.45 0 0 0-1.594-.656H3.75a2.45 2.45 0 0 0-1.594.656A2.45 2.45 0 0 0 1.5 18.75' />
    </g>
    <defs>
      <clipPath id='68982368a1764be383b7d0305de652e2__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUnlockXlRegularIcon);
export default ForwardRef;
