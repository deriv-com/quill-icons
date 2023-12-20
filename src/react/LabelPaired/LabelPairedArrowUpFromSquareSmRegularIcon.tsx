import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpFromSquareSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m7.3 3.887 2.845 2.843c.182.201.182.402 0 .602-.201.182-.402.182-.602 0L7.438 5.254V12.5c-.019.273-.165.42-.438.438-.273-.019-.42-.165-.437-.438V5.254L4.457 7.332c-.2.182-.401.182-.602 0-.182-.2-.182-.401 0-.602L6.7 3.887c.2-.183.401-.183.602 0m-5.55.738h.875c.273.018.42.164.438.438-.019.273-.165.419-.438.437H1.75a.852.852 0 0 0-.629.246.852.852 0 0 0-.246.629V16c0 .255.082.465.246.629a.852.852 0 0 0 .629.246h10.5a.852.852 0 0 0 .629-.246.852.852 0 0 0 .246-.629V6.375a.852.852 0 0 0-.246-.629.852.852 0 0 0-.629-.246h-.875c-.273-.018-.42-.164-.437-.437.018-.274.164-.42.437-.438h.875c.492.018.902.191 1.23.52.329.328.502.738.52 1.23V16c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52H1.75c-.492-.018-.902-.191-1.23-.52C.19 16.903.018 16.493 0 16V6.375c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromSquareSmRegularIcon);
export default ForwardRef;
