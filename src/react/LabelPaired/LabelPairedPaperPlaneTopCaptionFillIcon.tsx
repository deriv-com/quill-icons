import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPaperPlaneTopCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={18}
    viewBox='0 0 13 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m1.648 4.156 10.36 4.5a.932.932 0 0 1 0 1.711l-10.36 4.5c-.796.352-1.617-.539-1.195-1.312l1.64-3.024a.64.64 0 0 1 .516-.351l4.125-.516c.07 0 .141-.07.141-.164 0-.07-.07-.14-.14-.14l-4.126-.516c-.234-.047-.421-.164-.515-.352L.454 5.47C.03 4.695.851 3.805 1.647 4.156' />
    </g>
    <defs>
      <clipPath id='b726d0b67b7ab44e5be507272d6a3299__a'>
        <path d='M0 0h13v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPaperPlaneTopCaptionFillIcon);
export default ForwardRef;
