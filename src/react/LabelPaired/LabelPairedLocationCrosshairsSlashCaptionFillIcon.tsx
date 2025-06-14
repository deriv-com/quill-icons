import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsSlashCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m.89 3.64 3.423 2.673A4.68 4.68 0 0 1 6.75 5.07v-.82c0-.398.328-.75.75-.75.398 0 .75.352.75.75v.82a4.54 4.54 0 0 1 3.68 3.68h.82c.398 0 .75.352.75.75 0 .422-.352.75-.75.75h-.82a4.5 4.5 0 0 1-.586 1.57l3.422 2.696c.257.187.304.539.093.773a.518.518 0 0 1-.773.094L.21 4.508a.518.518 0 0 1-.094-.774.518.518 0 0 1 .774-.093m4.618 3.61.914.703c.305-.187.68-.328 1.078-.328A1.88 1.88 0 0 1 9.375 9.5c0 .234-.047.469-.14.68l.913.703c.211-.399.352-.867.352-1.383 0-1.64-1.36-3-3-3-.773 0-1.453.281-1.992.75m2.883 5.133 1.312 1.031a4.5 4.5 0 0 1-1.453.54v.796c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75v-.797a4.535 4.535 0 0 1-3.703-3.68H2.25a.755.755 0 0 1-.75-.75.74.74 0 0 1 .75-.75h.797c.023-.187.07-.351.117-.515L4.5 9.313V9.5c0 1.664 1.336 3 3 3 .305 0 .61-.047.89-.117' />
    </g>
    <defs>
      <clipPath id='ca429f2529523c937a3db0c9acf568d6__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsSlashCaptionFillIcon);
export default ForwardRef;
