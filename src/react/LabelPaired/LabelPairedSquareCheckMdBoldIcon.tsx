import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSquareCheckMdBoldIcon = (
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
      <path d='M2 6.5q-.469.031-.5.5v10q.031.47.5.5h10q.47-.03.5-.5V7q-.03-.469-.5-.5zM0 7q.03-.843.594-1.406Q1.157 5.032 2 5h10q.844.03 1.406.594Q13.97 6.156 14 7v10q-.03.844-.594 1.406-.563.563-1.406.594H2q-.843-.03-1.406-.594Q.032 17.844 0 17zm10.531 3.531-4 4q-.531.438-1.062 0l-2-2q-.438-.531 0-1.062.531-.438 1.062 0L6 12.938l3.469-3.47q.531-.435 1.062 0 .438.533 0 1.063' />
    </g>
    <defs>
      <clipPath id='058ad533711d15a9e95b64ffbe757b3e__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareCheckMdBoldIcon);
export default ForwardRef;
