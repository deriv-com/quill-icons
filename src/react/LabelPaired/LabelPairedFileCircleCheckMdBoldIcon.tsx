import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCircleCheckMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 18.5h8q.47-.03.5-.5V9H8a.97.97 0 0 1-.719-.281A.97.97 0 0 1 7 8V5.5H2q-.469.031-.5.5v12q.031.47.5.5M2 4h5.188Q8 4 8.594 4.594l2.812 2.812Q12 8 12 8.844V18q-.03.844-.594 1.406-.563.563-1.406.594H2q-.843-.03-1.406-.594Q.032 18.844 0 18V6q.03-.843.594-1.406Q1.157 4.032 2 4m7.031 8.375-3.344 3.313a.72.72 0 0 1-.53.218.72.72 0 0 1-.532-.219l-1.656-1.656q-.438-.531 0-1.062.531-.438 1.062 0l1.125 1.125 2.813-2.781q.531-.438 1.062 0 .438.531 0 1.062' />
    </g>
    <defs>
      <clipPath id='4439d0331762ad60__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCircleCheckMdBoldIcon);
export default ForwardRef;
