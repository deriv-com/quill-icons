import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowUpToLineCaptionBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.563 4.25h7.875c.343.031.53.219.562.563-.031.343-.219.53-.563.562H.564C.219 5.344.03 5.156 0 4.812c.031-.343.219-.53.563-.562Zm4.359 3.188h-.024l3 3.187c.22.266.211.523-.023.773-.266.22-.523.211-.773-.023l-2.04-2.133v4.945c-.03.344-.218.532-.562.563-.344-.031-.531-.219-.563-.563V9.242l-2.039 2.156c-.25.22-.507.227-.773.024-.234-.266-.242-.531-.023-.797l3-3.188A.51.51 0 0 1 4.5 7.25c.156 0 .297.063.422.188Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpToLineCaptionBoldIcon);
export default ForwardRef;
