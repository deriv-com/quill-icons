import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedOneMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={24}
    viewBox='0 0 8 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.5 5.5V18h3q.47.031.5.5-.03.47-.5.5h-7q-.469-.03-.5-.5.031-.469.5-.5h3V6.438L1.281 7.906q-.406.219-.687-.125-.219-.406.125-.687l3-2a.54.54 0 0 1 .531-.032.49.49 0 0 1 .25.438' />
    </g>
    <defs>
      <clipPath id='0c556ad3b38e6c5f314ce51fdcf7cb85__a'>
        <path d='M0 0h8v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedOneMdRegularIcon);
export default ForwardRef;
