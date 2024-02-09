import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLaptopMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M16 6.5H4q-.469.031-.5.5v7H2V7q.03-.843.594-1.406Q3.157 5.032 4 5h12q.844.03 1.406.594Q17.97 6.156 18 7v7h-1.5V7q-.03-.469-.5-.5m-13 11h14q1.031-.063 1.406-1H1.594q.375.937 1.406 1M0 16q0-.437.281-.719A.97.97 0 0 1 1 15h18q.438 0 .719.281A.97.97 0 0 1 20 16q-.03 1.281-.875 2.125-.843.844-2.125.875H3q-1.28-.03-2.125-.875Q.032 17.282 0 16' />
    </g>
    <defs>
      <clipPath id='5c62e9b6a9e79d62a80625ea6d08de97__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopMdBoldIcon);
export default ForwardRef;
