import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowUpFromSquareCaptionBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M6.398 3.664 9.023 6.29c.22.266.22.531 0 .797-.265.219-.53.219-.796 0L6.562 5.422v5.766c-.03.343-.218.53-.562.562-.344-.031-.531-.219-.563-.563V5.423L3.774 7.086c-.265.219-.53.219-.796 0-.22-.266-.22-.531 0-.797l2.625-2.625c.265-.219.53-.219.796 0Zm-4.71.586h.187c.344.031.531.219.563.563-.032.343-.22.53-.563.562h-.188c-.343.031-.53.219-.562.563v7.875c.031.343.219.53.563.562h8.624c.344-.031.532-.219.563-.563V5.939c-.031-.344-.219-.532-.563-.563h-.187c-.344-.031-.531-.219-.563-.563.032-.343.22-.53.563-.562h.188c.484.016.882.18 1.195.492.312.313.476.711.492 1.196v7.875c-.016.484-.18.882-.492 1.195-.313.312-.711.476-1.195.492H1.687c-.484-.016-.882-.18-1.195-.492-.312-.313-.476-.711-.492-1.195V5.936c.016-.484.18-.882.492-1.195.313-.312.711-.476 1.196-.492Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromSquareCaptionBoldIcon);
export default ForwardRef;
