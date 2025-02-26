import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenLineCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m10.867 3.969.914.914a1.514 1.514 0 0 1 0 2.133L10.656 8.14 7.61 5.094l1.125-1.125a1.514 1.514 0 0 1 2.133 0M1.61 11.094 7.07 5.633l3.047 3.047-5.46 5.46a2.04 2.04 0 0 1-.868.516l-2.836.82a.48.48 0 0 1-.539-.14.48.48 0 0 1-.14-.54l.82-2.835c.093-.328.281-.633.515-.867m4.454 3.281h7.125a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H6.062a.54.54 0 0 1-.562-.562c0-.305.234-.563.563-.563' />
    </g>
    <defs>
      <clipPath id='197c7a7f6f50710f02dc223bebfd1717__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenLineCaptionFillIcon);
export default ForwardRef;
