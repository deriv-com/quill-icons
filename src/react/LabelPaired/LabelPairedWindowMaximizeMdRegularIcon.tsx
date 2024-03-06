import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWindowMaximizeMdRegularIcon = (
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
      <path d='M2 6a.97.97 0 0 0-.719.281A.97.97 0 0 0 1 7v3h14V7a.97.97 0 0 0-.281-.719A.97.97 0 0 0 14 6zm-1 5v6q0 .438.281.719A.97.97 0 0 0 2 18h12a.97.97 0 0 0 .719-.281A.97.97 0 0 0 15 17v-6zM0 7q.03-.843.594-1.406Q1.157 5.032 2 5h12q.844.03 1.406.594Q15.97 6.156 16 7v10q-.03.844-.594 1.406-.563.563-1.406.594H2q-.843-.03-1.406-.594Q.032 17.844 0 17z' />
    </g>
    <defs>
      <clipPath id='6ee04752bd0ecd7306b8a851527700f0__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWindowMaximizeMdRegularIcon);
export default ForwardRef;
