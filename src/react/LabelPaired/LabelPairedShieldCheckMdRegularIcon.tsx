import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShieldCheckMdRegularIcon = (
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
      <path d='M7.625 5.156 2.094 7.5q-.562.282-.594.875 0 1.5.5 3.5.531 1.97 1.844 3.844 1.344 1.875 3.75 3.094.405.188.812 0 2.406-1.188 3.719-3.094 1.343-1.875 1.875-3.844.5-2 .5-3.5-.03-.593-.594-.875l-5.5-2.344a1.01 1.01 0 0 0-.781 0m1.156-.906 5.531 2.344q.532.219.844.687a1.8 1.8 0 0 1 .344 1.094q.03 1.595-.531 3.75-.563 2.156-2.031 4.188-1.438 2.062-4.126 3.406-.812.375-1.624 0-2.688-1.344-4.125-3.407-1.47-2.031-2.032-4.187Q.47 9.97.5 8.375a1.8 1.8 0 0 1 .344-1.094q.313-.468.844-.687l5.53-2.344a2.03 2.03 0 0 1 1.563 0M8 9.75q-.687.063-.75.75.063.687.75.75.687-.063.75-.75-.063-.687-.75-.75m1.75.75q0 .594-.344 1.063-.344.437-.906.624V14.5q-.03.47-.5.5-.469-.03-.5-.5v-2.312a1.88 1.88 0 0 1-.906-.626A1.75 1.75 0 0 1 6.25 10.5q.031-.75.5-1.25.5-.469 1.25-.5.75.031 1.25.5.47.5.5 1.25' />
    </g>
    <defs>
      <clipPath id='7f4cde278d20dac57be03dd6e55a8eae__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShieldCheckMdRegularIcon);
export default ForwardRef;
