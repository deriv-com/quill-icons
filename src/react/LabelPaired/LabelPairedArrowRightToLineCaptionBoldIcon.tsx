import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowRightToLineCaptionBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M10.75 5.563v7.875c-.031.343-.219.53-.563.562-.343-.031-.53-.219-.562-.563V5.564c.031-.344.219-.532.563-.563.343.031.53.219.562.563ZM7.562 9.921l.024-.024-3.188 3c-.28.22-.546.211-.796-.023-.22-.266-.211-.523.023-.773l2.156-2.04H.813C.469 10.033.28 9.845.25 9.5c.031-.344.219-.531.563-.563H5.78L3.625 6.899c-.234-.25-.242-.507-.023-.773.25-.234.507-.242.773-.023l3.188 3a.51.51 0 0 1 .187.398.583.583 0 0 1-.188.422Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightToLineCaptionBoldIcon);
export default ForwardRef;
