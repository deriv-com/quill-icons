import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMicrophoneCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.5 3.5a2.25 2.25 0 0 1 2.25 2.25V9.5a2.25 2.25 0 0 1-4.5 0V5.75A2.25 2.25 0 0 1 4.5 3.5m-3 5.063V9.5c0 1.664 1.336 3 3 3 1.64 0 3-1.336 3-3v-.937c0-.305.234-.563.563-.563a.57.57 0 0 1 .562.563V9.5c0 2.11-1.57 3.82-3.562 4.102v.773h1.125a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H2.813a.54.54 0 0 1-.563-.562c0-.305.234-.563.563-.563h1.124v-.773A4.126 4.126 0 0 1 .376 9.5v-.937C.375 8.258.609 8 .938 8a.57.57 0 0 1 .562.563' />
    </g>
    <defs>
      <clipPath id='7f80d629f5b149c75eef8db14779e7ff__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMicrophoneCaptionFillIcon);
export default ForwardRef;
