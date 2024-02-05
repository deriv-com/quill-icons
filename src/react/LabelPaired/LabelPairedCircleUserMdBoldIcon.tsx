import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleUserMdBoldIcon = (
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
      <path d='M12.719 16.5q1.72-1.812 1.781-4.5-.063-2.75-1.906-4.594Q10.75 5.563 8 5.5q-2.75.063-4.594 1.906Q1.563 9.25 1.5 12q.063 2.688 1.813 4.5.436-1.125 1.437-1.812Q5.719 14.03 7 14h2q1.281.03 2.25.688a4.04 4.04 0 0 1 1.469 1.812m-1.281 1h.03a2.7 2.7 0 0 0-.874-1.437Q9.937 15.53 9 15.5H7q-.937.03-1.594.563a2.54 2.54 0 0 0-.843 1.437q1.5.97 3.437 1 1.938-.03 3.438-1M8 20q-2.187-.03-4-1.062Q2.188 17.875 1.063 16 0 14.095 0 12t1.063-4Q2.188 6.124 4 5.063 5.813 4.03 8 4q2.188.03 4 1.063Q13.813 6.125 14.938 8 16 9.906 16 12t-1.062 4Q13.813 17.875 12 18.938 10.188 19.968 8 20m0-8.5q.72-.031 1.094-.625a1.33 1.33 0 0 0 0-1.25Q8.719 9.031 8 9q-.72.031-1.094.625a1.33 1.33 0 0 0 0 1.25q.375.594 1.094.625m-2.75-1.25q.063-1.562 1.375-2.375 1.375-.75 2.75 0 1.312.813 1.375 2.375-.063 1.563-1.375 2.375-1.375.75-2.75 0-1.312-.812-1.375-2.375' />
    </g>
    <defs>
      <clipPath id='c61dc19573a86f58bfbd57c7e995dba4__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleUserMdBoldIcon);
export default ForwardRef;
