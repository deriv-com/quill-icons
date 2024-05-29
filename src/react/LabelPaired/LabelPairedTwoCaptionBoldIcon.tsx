import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTwoCaptionBoldIcon = (
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
      <path d='M3.695 5.375c-.632 0-1.218.258-1.664.703l-.82.82c-.234.235-.586.235-.797 0a.513.513 0 0 1 0-.773l.82-.844A3.5 3.5 0 0 1 3.695 4.25h.164a3.34 3.34 0 0 1 3.329 3.328c0 .914-.399 1.781-1.055 2.414l-3.914 3.633h4.969a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H.813a.59.59 0 0 1-.54-.352.59.59 0 0 1 .141-.609L5.36 9.172a2.22 2.22 0 0 0 .704-1.594 2.2 2.2 0 0 0-2.204-2.203z' />
    </g>
    <defs>
      <clipPath id='771887ef9730f00100b0b9b687731c79__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTwoCaptionBoldIcon);
export default ForwardRef;
