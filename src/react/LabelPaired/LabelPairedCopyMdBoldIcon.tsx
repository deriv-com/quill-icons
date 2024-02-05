import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCopyMdBoldIcon = (
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
      <path d='M12 14.5q.47-.03.5-.5V7.625L10.375 5.5H6q-.469.031-.5.5v8q.031.47.5.5zM6 16q-.843-.03-1.406-.594Q4.032 14.843 4 14V6q.03-.843.594-1.406Q5.156 4.032 6 4h4.375q.624 0 1.063.438l2.124 2.125Q14 6.999 14 7.625V14q-.03.844-.594 1.406-.563.563-1.406.594zM2 8h1v1.5H2q-.469.031-.5.5v8q.031.47.5.5h6q.47-.03.5-.5v-1H10v1q-.03.844-.594 1.406Q8.843 19.97 8 20H2q-.843-.03-1.406-.594Q.032 18.844 0 18v-8q.03-.843.594-1.406Q1.157 8.032 2 8' />
    </g>
    <defs>
      <clipPath id='5162308ba71ab390a5931260a917ea93__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCopyMdBoldIcon);
export default ForwardRef;
