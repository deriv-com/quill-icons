import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedScissorsCaptionBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 12 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M11.86 13.79c-.235.25-.493.273-.774.07l-3.774-3.141.891-.727 3.586 3.024c.25.234.274.492.07.773M2.624 4.624c-.562.016-.992.266-1.29.75-.28.5-.28 1 0 1.5.298.484.728.734 1.29.75.563-.016.992-.266 1.29-.75.28-.5.28-1 0-1.5-.298-.484-.727-.734-1.29-.75m0-1.125c.75.016 1.367.273 1.852.773.5.485.757 1.102.773 1.852 0 .422-.094.813-.281 1.172L6.75 8.773l4.336-3.632c.281-.203.539-.18.773.07.204.281.18.539-.07.773l-6.82 5.72c.187.358.281.75.281 1.171-.016.75-.273 1.367-.773 1.852-.485.5-1.102.757-1.852.773-.75-.016-1.367-.273-1.852-.773-.5-.485-.757-1.102-.773-1.852.016-.75.273-1.367.773-1.852.485-.5 1.102-.757 1.852-.773.64.016 1.188.21 1.64.586L5.86 9.5 4.266 8.164c-.453.375-1 .57-1.641.586-.75-.016-1.367-.273-1.852-.773C.273 7.492.016 6.875 0 6.125c.016-.75.273-1.367.773-1.852.485-.5 1.102-.757 1.852-.773m1.5 9.375c-.016-.562-.266-.992-.75-1.29-.5-.28-1-.28-1.5 0-.484.298-.734.727-.75 1.29.016.563.266.992.75 1.29.5.28 1 .28 1.5 0 .484-.298.734-.727.75-1.29'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedScissorsCaptionBoldIcon);
export default ForwardRef;