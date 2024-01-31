import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSquareMinusMdRegularIcon = (
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
      <path d='M2 6a.97.97 0 0 0-.719.281A.97.97 0 0 0 1 7v10q0 .438.281.719A.97.97 0 0 0 2 18h10a.97.97 0 0 0 .719-.281A.97.97 0 0 0 13 17V7a.97.97 0 0 0-.281-.719A.97.97 0 0 0 12 6zM0 7q.03-.843.594-1.406Q1.157 5.032 2 5h10q.844.03 1.406.594Q13.97 6.156 14 7v10q-.03.844-.594 1.406-.563.563-1.406.594H2q-.843-.03-1.406-.594Q.032 17.844 0 17zm4 4.5h6q.47.031.5.5-.03.47-.5.5H4q-.469-.03-.5-.5.031-.469.5-.5' />
    </g>
    <defs>
      <clipPath id='b90d02de0c8d26ff__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareMinusMdRegularIcon);
export default ForwardRef;
