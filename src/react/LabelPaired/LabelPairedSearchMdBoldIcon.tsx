import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSearchMdBoldIcon = (
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
      <path d='M11.5 10.5q0-1.344-.656-2.5A5.2 5.2 0 0 0 9 6.156 5.1 5.1 0 0 0 6.5 5.5q-1.312 0-2.5.656A5.2 5.2 0 0 0 2.156 8a5 5 0 0 0-.656 2.5q0 1.345.656 2.5A5.2 5.2 0 0 0 4 14.844a5.1 5.1 0 0 0 2.5.656q1.312 0 2.5-.656A5.2 5.2 0 0 0 10.844 13q.656-1.155.656-2.5m-.969 5.094Q8.843 16.968 6.5 17q-2.75-.063-4.594-1.906Q.063 13.25 0 10.5q.063-2.75 1.906-4.594Q3.75 4.063 6.5 4q2.75.063 4.594 1.906Q12.937 7.75 13 10.5q-.031 2.344-1.406 4.031l4.187 4.188q.438.531 0 1.062-.531.438-1.062 0z' />
    </g>
    <defs>
      <clipPath id='50cb5966a75fe107__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSearchMdBoldIcon);
export default ForwardRef;
