import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRectangleBarcodeMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 6.5q-.469.031-.5.5v10q.031.47.5.5h14q.47-.03.5-.5V7q-.03-.469-.5-.5zM0 7q.03-.843.594-1.406Q1.157 5.032 2 5h14q.844.03 1.406.594Q17.97 6.156 18 7v10q-.03.844-.594 1.406-.562.563-1.406.594H2q-.843-.03-1.406-.594Q.032 17.844 0 17zm3.75 1q.687.063.75.75v6.5q-.063.687-.75.75-.687-.063-.75-.75v-6.5q.063-.687.75-.75M6 8q.47.031.5.5v7q-.03.47-.5.5-.469-.03-.5-.5v-7q.031-.469.5-.5m1.5.75q.063-.687.75-.75.687.063.75.75v6.5q-.063.687-.75.75-.687-.063-.75-.75zM11.75 8q.687.063.75.75v6.5q-.063.687-.75.75-.687-.063-.75-.75v-6.5q.063-.687.75-.75m2.25.5q.031-.469.5-.5.47.031.5.5v7q-.03.47-.5.5-.469-.03-.5-.5z' />
    </g>
    <defs>
      <clipPath id='6a930d20a8de46cda3e3ab0717f2289b__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleBarcodeMdBoldIcon);
export default ForwardRef;
