import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMicrophoneMdRegularIcon = (
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
      <path d='M8 7q-.03-.843-.594-1.406Q6.844 5.032 6 5q-.843.03-1.406.594Q4.032 6.156 4 7v5q.03.844.594 1.406Q5.156 13.97 6 14q.844-.03 1.406-.594Q7.97 12.843 8 12zM3 7q.031-1.28.875-2.125Q4.718 4.032 6 4q1.282.031 2.125.875Q8.969 5.718 9 7v5q-.03 1.281-.875 2.125Q7.282 14.969 6 15q-1.28-.03-2.125-.875Q3.032 13.282 3 12zm-1 3.5V12q.03 1.688 1.156 2.844Q4.312 15.969 6 16q1.688-.03 2.844-1.156Q9.969 13.687 10 12v-1.5q.031-.469.5-.5.47.031.5.5V12q-.03 2-1.312 3.375-1.25 1.375-3.188 1.594V19h2q.47.031.5.5-.03.47-.5.5h-5q-.469-.03-.5-.5.031-.469.5-.5h2v-2.031q-1.938-.219-3.187-1.594Q1.03 14 1 12v-1.5q.031-.469.5-.5.47.031.5.5' />
    </g>
    <defs>
      <clipPath id='ca8928e2f60448a3186910112c351be2__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMicrophoneMdRegularIcon);
export default ForwardRef;
