import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLockXlRegularIcon = (
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
      <path d='M6 12v3h9v-3q-.047-1.922-1.312-3.187Q12.422 7.547 10.5 7.5q-1.922.047-3.187 1.313Q6.047 10.078 6 12m-1.5 3v-3q.047-2.531 1.734-4.266Q7.97 6.047 10.5 6q2.532.047 4.266 1.734Q16.454 9.47 16.5 12v3h.75q1.594.046 2.672 1.078Q20.953 17.157 21 18.75v7.5q-.046 1.594-1.078 2.672Q18.843 29.953 17.25 30H3.75q-1.593-.046-2.672-1.078Q.047 27.843 0 26.25v-7.5q.046-1.593 1.078-2.672Q2.157 15.047 3.75 15zm-3 3.75v7.5q.047.937.656 1.594.657.61 1.594.656h13.5a2.45 2.45 0 0 0 1.594-.656q.61-.657.656-1.594v-7.5a2.45 2.45 0 0 0-.656-1.594 2.45 2.45 0 0 0-1.594-.656H3.75a2.45 2.45 0 0 0-1.594.656A2.45 2.45 0 0 0 1.5 18.75' />
    </g>
    <defs>
      <clipPath id='437c7c8bc8a735da12483168b720ed0a__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLockXlRegularIcon);
export default ForwardRef;
