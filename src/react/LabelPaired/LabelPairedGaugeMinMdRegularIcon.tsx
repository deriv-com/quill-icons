import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGaugeMinMdRegularIcon = (
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
      <path d='M8 5a7.2 7.2 0 0 0-3.5.938A7.2 7.2 0 0 0 1.938 8.5a7 7 0 0 0 0 7A7.2 7.2 0 0 0 4.5 18.063 7.2 7.2 0 0 0 8 19a7.2 7.2 0 0 0 3.5-.937 7.2 7.2 0 0 0 2.563-2.563 7 7 0 0 0 0-7A7.2 7.2 0 0 0 11.5 5.938 7.2 7.2 0 0 0 8 5m0 15q-2.187-.03-4-1.062Q2.188 17.875 1.063 16 0 14.095 0 12t1.063-4Q2.188 6.124 4 5.063 5.813 4.03 8 4q2.188.03 4 1.063Q13.813 6.125 14.938 8 16 9.906 16 12t-1.062 4Q13.813 17.875 12 18.938 10.188 19.968 8 20m.75-13q-.063.687-.75.75-.687-.063-.75-.75.063-.687.75-.75.687.063.75.75M7 15q0 .438.281.719A.97.97 0 0 0 8 16a.97.97 0 0 0 .719-.281A.97.97 0 0 0 9 15a.97.97 0 0 0-.281-.719A.97.97 0 0 0 8 14a.97.97 0 0 0-.719.281A.97.97 0 0 0 7 15m3 0q-.03.844-.594 1.406Q8.843 16.97 8 17q-.843-.03-1.406-.594Q6.032 15.844 6 15q0-.281.094-.562l-3.344-2q-.375-.282-.187-.688.28-.375.687-.187l3.344 2Q7.156 13.03 8 13q.844.03 1.406.594.563.563.594 1.406M5.25 8.5q-.063.687-.75.75-.687-.063-.75-.75.063-.687.75-.75.687.063.75.75M13 12.75q-.687-.063-.75-.75.063-.687.75-.75.687.063.75.75-.063.687-.75.75m-.75-4.25q-.063.687-.75.75-.687-.063-.75-.75.063-.687.75-.75.687.063.75.75' />
    </g>
    <defs>
      <clipPath id='5811e7e51c76ae57__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGaugeMinMdRegularIcon);
export default ForwardRef;
