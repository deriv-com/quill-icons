import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerMdRegularIcon = (
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
      <path d='M12 6H2a.97.97 0 0 0-.719.281A.97.97 0 0 0 1 7v7q0 .438.281.719A.97.97 0 0 0 2 15h10a.97.97 0 0 0 .719-.281A.97.97 0 0 0 13 14V7a.97.97 0 0 0-.281-.719A.97.97 0 0 0 12 6M2 16q-.843-.03-1.406-.594Q.032 14.843 0 14V7q.03-.843.594-1.406Q1.157 5.032 2 5h10q.844.03 1.406.594Q13.97 6.156 14 7v7q-.03.844-.594 1.406-.563.563-1.406.594H8.938l.687 2H11.5q.47.031.5.5-.03.47-.5.5h-9q-.469-.03-.5-.5.031-.469.5-.5h1.906l.657-2zm3.438 2h3.125l-.688-2h-1.75zM16.5 6q-.469.031-.5.5V8h3V6.5q-.03-.469-.5-.5zM16 9v1h3V9zm0 8.5q.031.47.5.5h2q.47-.03.5-.5V11h-3zm-1-11q.03-.625.438-1.062A1.63 1.63 0 0 1 16.5 5h2q.625.03 1.063.438.405.436.437 1.062v11a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 18.5 19h-2a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 15 17.5zm2.5 8.75q-.687-.063-.75-.75.063-.687.75-.75.687.063.75.75-.063.687-.75.75' />
    </g>
    <defs>
      <clipPath id='da0da60f8f8448d577d979d2744f3dc8__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerMdRegularIcon);
export default ForwardRef;
