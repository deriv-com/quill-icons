import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSearchMdRegularIcon = (
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
      <path d='M12 10.5q0-1.5-.75-2.75a5.4 5.4 0 0 0-2-2A5.46 5.46 0 0 0 6.5 5q-1.437 0-2.75.75a5.4 5.4 0 0 0-2 2Q1 9 1 10.5t.75 2.75q.72 1.25 2 2Q5.063 16 6.5 16t2.75-.75a5.4 5.4 0 0 0 2-2Q12 12 12 10.5m-1.281 4.938Q8.969 16.938 6.5 17q-2.75-.063-4.594-1.906Q.063 13.25 0 10.5q.063-2.75 1.906-4.594Q3.75 4.063 6.5 4q2.75.063 4.594 1.906Q12.937 7.75 13 10.5q-.062 2.469-1.562 4.219l4.406 4.437q.312.345 0 .688-.345.312-.688 0z' />
    </g>
    <defs>
      <clipPath id='48d92d2866eaf03e3188070e53417219__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSearchMdRegularIcon);
export default ForwardRef;
