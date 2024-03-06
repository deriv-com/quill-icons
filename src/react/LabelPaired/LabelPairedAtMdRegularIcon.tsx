import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAtMdRegularIcon = (
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
      <path d='M8 5q-1.969.03-3.531.969a6.55 6.55 0 0 0-2.5 2.5Q1.032 10.03 1 12q.03 1.97.969 3.531a6.55 6.55 0 0 0 2.5 2.5Q6.03 18.97 8 19q.47.031.5.5-.03.47-.5.5-2.25-.03-4.031-1.094a7.9 7.9 0 0 1-2.875-2.875Q.03 14.251 0 12q.03-2.25 1.094-4.031a7.9 7.9 0 0 1 2.875-2.875Q5.749 4.03 8 4q2.25.03 4.031 1.094a7.9 7.9 0 0 1 2.875 2.875Q15.97 9.749 16 12v.75q-.031 1.156-.812 1.938-.781.78-1.938.812-.78 0-1.437-.406a2.57 2.57 0 0 1-.97-1.031Q9.814 15.437 8 15.5q-1.5-.031-2.469-1.031Q4.531 13.5 4.5 12q.031-1.5 1.031-2.469Q6.5 8.531 8 8.5q1.5.03 2.5 1.063V9.5q.031-.469.5-.5.47.031.5.5v3.25q.031.75.5 1.25.5.47 1.25.5.75-.03 1.25-.5.47-.5.5-1.25V12q-.03-1.969-.969-3.531a6.55 6.55 0 0 0-2.5-2.5Q9.97 5.032 8 5m2.5 7q-.03-1.406-1.25-2.156-1.25-.688-2.5 0-1.219.75-1.25 2.156.031 1.407 1.25 2.156 1.25.688 2.5 0 1.22-.75 1.25-2.156' />
    </g>
    <defs>
      <clipPath id='ad127e943f90cf54dfc00532256009af__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAtMdRegularIcon);
export default ForwardRef;
