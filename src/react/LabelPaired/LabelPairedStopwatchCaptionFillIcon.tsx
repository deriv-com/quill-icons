import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStopwatchCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.375 3.5h2.25c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H6.25v.82c.867.14 1.664.492 2.32 1.032l.516-.493a.723.723 0 0 1 1.055 0 .723.723 0 0 1 0 1.055l-.563.563c.492.773.797 1.687.797 2.648 0 2.695-2.203 4.875-4.875 4.875a4.87 4.87 0 0 1-4.875-4.875A4.85 4.85 0 0 1 4.75 5.82V5h-.375a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75M6.063 8a.57.57 0 0 0-.563-.562.555.555 0 0 0-.562.562v3c0 .328.234.563.562.563A.555.555 0 0 0 6.063 11z' />
    </g>
    <defs>
      <clipPath id='17142f63cd93542bed4bd7d2191e068d__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStopwatchCaptionFillIcon);
export default ForwardRef;
