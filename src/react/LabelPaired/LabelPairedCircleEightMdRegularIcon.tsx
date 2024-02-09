import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEightMdRegularIcon = (
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
      <path d='M15 12a7.2 7.2 0 0 0-.937-3.5A7.2 7.2 0 0 0 11.5 5.938a7 7 0 0 0-7 0A7.2 7.2 0 0 0 1.938 8.5 7.2 7.2 0 0 0 1 12q.03 1.906.938 3.5A7.2 7.2 0 0 0 4.5 18.063a7 7 0 0 0 7 0 7.2 7.2 0 0 0 2.563-2.563A7.2 7.2 0 0 0 15 12M0 12q.03-2.187 1.063-4Q2.125 6.188 4 5.063 5.906 4 8 4t4 1.063Q13.875 6.188 14.938 8q1.03 1.813 1.062 4-.03 2.188-1.062 4-1.063 1.812-2.938 2.938Q10.095 20 8 20t-4-1.062Q2.124 17.813 1.063 16 .03 14.188 0 12m8.375-4q.906.031 1.5.625t.625 1.5q-.03.969-.719 1.594.938.688.969 1.906-.03 1-.687 1.688-.688.656-1.688.687h-.75q-1.001-.03-1.687-.687-.657-.688-.688-1.688.03-1.219.969-1.906-.688-.625-.719-1.594.031-.906.625-1.5T7.625 8zm-.75 3.25h.75q.47 0 .781-.344.345-.312.344-.781 0-.469-.344-.781A1.01 1.01 0 0 0 8.375 9h-.75q-.469 0-.781.344-.344.313-.344.781 0 .47.344.781.312.345.781.344m.75 1h-.75q-.594 0-.969.406-.405.375-.406.969 0 .594.406.969.375.406.969.406h.75q.594 0 .969-.406.406-.375.406-.969t-.406-.969q-.375-.405-.969-.406' />
    </g>
    <defs>
      <clipPath id='47af2e1b55572f8ec8be08e205c23fee__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEightMdRegularIcon);
export default ForwardRef;
