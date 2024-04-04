import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEightCaptionFillIcon = (
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
      <path d='M0 9.5a5.96 5.96 0 0 1 3-5.18 5.97 5.97 0 0 1 6 0 6 6 0 0 1 3 5.18 6.01 6.01 0 0 1-3 5.203 5.97 5.97 0 0 1-6 0A5.97 5.97 0 0 1 0 9.5m6.188-3h-.375c-.938 0-1.688.773-1.688 1.688 0 .374.117.726.305.984-.422.351-.68.867-.68 1.453 0 1.055.82 1.875 1.875 1.875h.75c1.031 0 1.875-.82 1.875-1.875 0-.586-.281-1.102-.703-1.453.21-.258.328-.61.328-.985 0-.914-.773-1.687-1.687-1.687m-.375 2.25a.54.54 0 0 1-.563-.562c0-.305.234-.563.563-.563h.375a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562zm.375 1.125h.187c.398 0 .75.352.75.75 0 .422-.352.75-.75.75h-.75a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75h.563' />
    </g>
    <defs>
      <clipPath id='bf244981aa554989d75703abf1d5ddab__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEightCaptionFillIcon);
export default ForwardRef;
