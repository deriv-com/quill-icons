import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsCaptionFillIcon = (
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
      <path d='M6 3.5c.398 0 .75.352.75.75v.82a4.54 4.54 0 0 1 3.68 3.68h.82c.398 0 .75.352.75.75 0 .422-.352.75-.75.75h-.82a4.535 4.535 0 0 1-3.68 3.703v.797c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75v-.797a4.53 4.53 0 0 1-3.703-3.703H.75A.74.74 0 0 1 0 9.5c0-.398.328-.75.75-.75h.797A4.535 4.535 0 0 1 5.25 5.07v-.82c0-.398.328-.75.75-.75m-3 6c0 1.078.563 2.063 1.5 2.602a2.99 2.99 0 0 0 3 0A3.03 3.03 0 0 0 9 9.5c0-1.055-.586-2.04-1.5-2.578a2.99 2.99 0 0 0-3 0A2.97 2.97 0 0 0 3 9.5m3-1.875c.656 0 1.266.375 1.617.938a1.91 1.91 0 0 1 0 1.874c-.351.586-.96.938-1.617.938-.68 0-1.29-.352-1.64-.937a1.91 1.91 0 0 1 0-1.876C4.71 8 5.32 7.626 6 7.626' />
    </g>
    <defs>
      <clipPath id='12c6e1872500e0290eae605c8833fa26__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsCaptionFillIcon);
export default ForwardRef;
