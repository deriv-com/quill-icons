import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCaretDownCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m4.14 11.703 2.813-2.672A.16.16 0 0 0 7 8.914a.18.18 0 0 0-.164-.164H1.164A.18.18 0 0 0 1 8.914q0 .07.047.117l2.812 2.672A.25.25 0 0 0 4 11.75a.25.25 0 0 0 .14-.047m.516.54A.94.94 0 0 1 4 12.5a.94.94 0 0 1-.656-.258L.53 9.594a.93.93 0 0 1-.281-.68q0-.399.258-.656A.9.9 0 0 1 1.164 8h5.672q.399.024.656.281a.86.86 0 0 1 .258.633.93.93 0 0 1-.281.68z' />
    </g>
    <defs>
      <clipPath id='4e957a82ca9bcd82bf705afe73e2d39f__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretDownCaptionRegularIcon);
export default ForwardRef;
