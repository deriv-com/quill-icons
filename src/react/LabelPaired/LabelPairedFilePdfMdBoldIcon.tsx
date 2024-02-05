import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFilePdfMdBoldIcon = (
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
      <path d='M2 18.5h1V20H2q-.843-.03-1.406-.594Q.032 18.844 0 18V6q.03-.843.594-1.406Q1.157 4.032 2 4h5.188Q8 4 8.594 4.594l2.812 2.812Q12 8 12 8.844V13h-1.5V9H8a.97.97 0 0 1-.719-.281A.97.97 0 0 1 7 8V5.5H2q-.469.031-.5.5v12q.031.47.5.5M5.5 15h1q.75.031 1.25.5.47.5.5 1.25-.03.75-.5 1.25-.5.47-1.25.5H6v1q-.03.47-.5.5-.469-.03-.5-.5v-4q.031-.469.5-.5m1 2.5q.687-.063.75-.75-.063-.687-.75-.75H6v1.5zm3-2.5h1q.624.03 1.063.438.405.437.437 1.062v2a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 10.5 20h-1q-.469-.03-.5-.5v-4q.031-.469.5-.5m1 4q.47-.03.5-.5v-2q-.03-.469-.5-.5H10v3zm2.5-3.5q.031-.469.5-.5H15q.47.031.5.5-.03.47-.5.5h-1v1h1q.47.031.5.5-.03.47-.5.5h-1v1.5q-.03.47-.5.5-.469-.03-.5-.5v-4' />
    </g>
    <defs>
      <clipPath id='61cd7399ed186799e3c16cd6916af86a__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFilePdfMdBoldIcon);
export default ForwardRef;
