import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowsRotateMdRegularIcon = (
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
      <path d='M2.156 10.594h.031q-.125.375-.53.406-.532-.063-.47-.562.563-2.376 2.438-3.876Q5.47 5.063 8 5q1.938.03 3.5.938A6.9 6.9 0 0 1 14 8.406V6.5q.031-.469.5-.5.47.031.5.5v3q-.03.47-.5.5h-3q-.469-.03-.5-.5.031-.469.5-.5h1.688a5.87 5.87 0 0 0-2.157-2.187Q9.687 6.032 8 6q-2.155.03-3.75 1.313-1.563 1.25-2.094 3.28m11.688 2.844v-.032q.093-.375.5-.406.53.063.469.563-.564 2.374-2.407 3.874Q10.531 18.938 8 19q-1.937-.03-3.5-.937A7 7 0 0 1 2 15.625V17.5q-.03.47-.5.5-.437-.03-.5-.5v-3q.063-.469.5-.5h3q.47.031.5.5-.03.47-.5.5H2.813a5.87 5.87 0 0 0 2.156 2.188Q6.313 17.968 8 18q2.157-.03 3.75-1.312 1.563-1.25 2.094-3.25' />
    </g>
    <defs>
      <clipPath id='8c47884ab8faa9b6155f59f3f3e911c0__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowsRotateMdRegularIcon);
export default ForwardRef;
