import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCaretDownXlRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 15 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m7.781 22.406 5.625-5.343a.318.318 0 0 0 .094-.235.366.366 0 0 0-.328-.328H1.828a.366.366 0 0 0-.328.328c0 .094.031.172.094.235l5.625 5.343a.503.503 0 0 0 .281.094.503.503 0 0 0 .281-.094m1.032 1.078A1.881 1.881 0 0 1 7.5 24c-.5 0-.937-.172-1.312-.516L.563 18.187A1.852 1.852 0 0 1 0 16.829c0-.531.172-.969.516-1.312.343-.344.78-.516 1.312-.516h11.344c.531.031.969.219 1.312.563.344.343.516.765.516 1.265 0 .531-.187.985-.562 1.36z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretDownXlRegularIcon);
export default ForwardRef;
