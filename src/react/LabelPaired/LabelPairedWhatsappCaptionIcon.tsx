import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedWhatsappCaptionIcon = (
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
        d='M9.18 5.773c.5.5.883 1.063 1.148 1.688.281.625.422 1.289.422 1.992-.016.969-.258 1.844-.727 2.625a5.323 5.323 0 0 1-1.898 1.875c-.781.453-1.656.688-2.625.703-.89 0-1.719-.21-2.484-.633L.25 14.75l.727-2.695a5.174 5.174 0 0 1-.68-2.602C.313 8.484.547 7.61 1 6.828a5.386 5.386 0 0 1 1.875-1.875C3.656 4.5 4.531 4.266 5.5 4.25c1.422.016 2.648.523 3.68 1.523M5.5 13.79c1.219-.031 2.242-.453 3.07-1.266.828-.828 1.266-1.851 1.313-3.07-.031-1.187-.477-2.203-1.336-3.047-.844-.843-1.86-1.265-3.047-1.265-1.219.015-2.234.437-3.047 1.265-.828.813-1.258 1.828-1.289 3.047a4.43 4.43 0 0 0 .68 2.297l.093.164-.445 1.594 1.64-.422.165.094c.672.39 1.406.593 2.203.61m2.367-3.234a.18.18 0 0 1 .07.023c.094.031.157.07.188.117.047.078.016.29-.094.633-.062.156-.187.29-.375.399-.187.109-.351.18-.492.21a2.138 2.138 0 0 1-.633 0c-.218-.046-.531-.156-.937-.328-.61-.296-1.102-.656-1.477-1.078-.39-.422-.625-.703-.703-.844-.016-.015-.023-.03-.023-.046h-.024a5.686 5.686 0 0 1-.281-.47 2.049 2.049 0 0 1-.234-.866c.015-.297.07-.532.164-.703.093-.172.18-.29.257-.352.016-.016.024-.031.024-.047.14-.11.258-.156.351-.14H3.93c.078-.047.164.023.257.21.032.079.079.18.141.305.063.156.117.297.164.422.047.14.078.219.094.234a.252.252 0 0 1 .023.235c-.125.219-.226.36-.304.422-.11.093-.133.187-.07.28.234.423.492.743.773.962.281.219.61.414.984.586.125.078.219.07.281-.024.047-.047.118-.125.211-.234a6.58 6.58 0 0 1 .211-.281c.078-.11.172-.125.282-.047.078.031.226.094.445.187.219.11.367.188.445.235'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWhatsappCaptionIcon);
export default ForwardRef;
