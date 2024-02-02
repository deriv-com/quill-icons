import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEyeMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.656 8.25a13 13 0 0 0-1.687 1.969Q1.313 11.219 1 12q.312.781.969 1.781.687 1 1.687 1.969A9.1 9.1 0 0 0 6 17.344q1.344.624 3 .656 1.656-.031 3-.656a9.1 9.1 0 0 0 2.344-1.594 13 13 0 0 0 1.687-1.969q.656-1 .969-1.781-.312-.781-.969-1.781a13 13 0 0 0-1.687-1.969A9.1 9.1 0 0 0 12 6.656Q10.656 6.032 9 6q-1.656.031-3 .656A9.1 9.1 0 0 0 3.656 8.25M9 5q1.906.03 3.406.75t2.625 1.781q1.095 1.032 1.813 2.125.718 1.095 1.093 1.969.157.375 0 .75-.375.875-1.093 1.969-.72 1.093-1.813 2.125a10.2 10.2 0 0 1-2.625 1.781q-1.5.72-3.406.75-1.905-.03-3.406-.75-1.5-.72-2.625-1.781a12 12 0 0 1-1.813-2.125Q.438 13.249.094 12.375a.94.94 0 0 1 0-.75q.343-.875 1.062-1.969.72-1.093 1.813-2.125A10.2 10.2 0 0 1 5.594 5.75Q7.094 5.03 9 5m-3 7q0 .813.406 1.5T7.5 14.594Q8.22 15 9 15a3.01 3.01 0 0 0 2.594-1.5Q12 12.813 12 12t-.406-1.5A3.007 3.007 0 0 0 9 9a3.01 3.01 0 0 0-2.594 1.5Q6.001 11.187 6 12m7 0q0 1.095-.531 2A4.13 4.13 0 0 1 11 15.469 4 4 0 0 1 9 16a4 4 0 0 1-2-.531A4.13 4.13 0 0 1 5.531 14 3.9 3.9 0 0 1 5 12q0-1.094.531-2A4.13 4.13 0 0 1 7 8.531 4 4 0 0 1 9 8q1.062 0 2 .531A4.13 4.13 0 0 1 12.469 10q.531.906.531 2' />
    </g>
    <defs>
      <clipPath id='6aec097560641ba4__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeMdRegularIcon);
export default ForwardRef;
