import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEnvelopeCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6 15.5a5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3M3 8v.234L5.79 9.5c.07.023.14.047.21.047s.14-.024.188-.047L9 8.234V8a.77.77 0 0 0-.75-.75h-4.5A.755.755 0 0 0 3 8m3.492 2.18a1.2 1.2 0 0 1-.492.117c-.187 0-.352-.047-.516-.117L3 9.055V11c0 .422.328.75.75.75h4.5c.398 0 .75-.328.75-.75V9.055z' />
    </g>
    <defs>
      <clipPath id='52f12b0f7d47aa899c2b0bd5a9958e21__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEnvelopeCaptionFillIcon);
export default ForwardRef;
