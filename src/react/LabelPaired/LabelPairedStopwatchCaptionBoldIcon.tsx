import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedStopwatchCaptionBoldIcon = (
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
        d='M3.625 4.063c.031-.344.219-.532.563-.563h2.625c.343.031.53.219.562.563-.031.343-.219.53-.562.562h-.75v1.148c1.03.141 1.921.54 2.671 1.196l.68-.68c.266-.219.531-.219.797 0 .219.266.219.531 0 .797l-.727.726c.579.813.875 1.75.891 2.813-.031 1.375-.508 2.523-1.43 3.445-.922.922-2.07 1.399-3.445 1.43-1.375-.031-2.523-.508-3.445-1.43-.922-.922-1.399-2.07-1.43-3.445.031-1.281.445-2.367 1.242-3.258.813-.89 1.836-1.422 3.07-1.594V4.625h-.75c-.343-.031-.53-.219-.562-.562M5.5 14.375c.672 0 1.297-.164 1.875-.492A3.908 3.908 0 0 0 8.758 12.5a3.821 3.821 0 0 0 0-3.75 3.908 3.908 0 0 0-1.383-1.383A3.735 3.735 0 0 0 5.5 6.875c-.672 0-1.297.164-1.875.492A3.908 3.908 0 0 0 2.242 8.75a3.821 3.821 0 0 0 0 3.75c.344.578.805 1.04 1.383 1.383a3.736 3.736 0 0 0 1.875.492m.563-5.812V11c-.032.344-.22.531-.563.563-.344-.032-.531-.22-.562-.563V8.563c.03-.344.218-.532.562-.563.344.031.531.219.563.563'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStopwatchCaptionBoldIcon);
export default ForwardRef;
