import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowDownToBracketCaptionBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 11 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m8.898 8.586-3 3c-.265.219-.53.219-.796 0l-3-3c-.22-.266-.22-.531 0-.797.265-.219.53-.219.796 0l2.04 2.04V4.061c.03-.343.218-.53.562-.562.344.031.531.219.563.563v5.765L8.102 7.79c.265-.219.53-.219.796 0 .22.266.22.531 0 .797m-7.523 2.976v1.876c0 .265.094.484.281.656.172.187.39.281.657.281h6.374a.851.851 0 0 0 .657-.281.851.851 0 0 0 .281-.656v-1.876c.031-.343.219-.53.563-.562.343.031.53.219.562.563v1.874c-.016.579-.219 1.063-.61 1.454-.39.39-.874.593-1.453.609H2.314c-.579-.016-1.063-.219-1.454-.61-.39-.39-.593-.874-.609-1.453v-1.874c.031-.344.219-.532.563-.563.343.031.53.219.562.563'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToBracketCaptionBoldIcon);
export default ForwardRef;
