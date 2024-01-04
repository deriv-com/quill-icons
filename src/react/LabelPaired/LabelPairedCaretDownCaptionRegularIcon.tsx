import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCaretDownCaptionRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m4.14 11.703 2.813-2.672A.159.159 0 0 0 7 8.914a.183.183 0 0 0-.164-.164H1.164A.183.183 0 0 0 1 8.914c0 .047.016.086.047.117l2.812 2.672A.252.252 0 0 0 4 11.75a.252.252 0 0 0 .14-.047Zm.516.54A.94.94 0 0 1 4 12.5a.94.94 0 0 1-.656-.258L.53 9.594a.926.926 0 0 1-.281-.68c0-.266.086-.484.258-.656A.889.889 0 0 1 1.164 8h5.672c.266.016.484.11.656.281a.86.86 0 0 1 .258.633.926.926 0 0 1-.281.68l-2.813 2.648Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretDownCaptionRegularIcon);
export default ForwardRef;
