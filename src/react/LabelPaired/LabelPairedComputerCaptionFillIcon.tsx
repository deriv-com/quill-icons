import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerCaptionFillIcon = (
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
      <path d='M9 5.75H1.5V11H9zm-7.5-1.5H9c.82 0 1.5.68 1.5 1.5V11c0 .844-.68 1.5-1.5 1.5H6.234l.258.75H8.25c.398 0 .75.352.75.75 0 .422-.352.75-.75.75h-6A.74.74 0 0 1 1.5 14c0-.398.328-.75.75-.75h1.734l.258-.75H1.5A1.48 1.48 0 0 1 0 11V5.75c0-.82.656-1.5 1.5-1.5m10.875 0h1.5c.61 0 1.125.516 1.125 1.125v8.25c0 .633-.516 1.125-1.125 1.125h-1.5a1.11 1.11 0 0 1-1.125-1.125v-8.25c0-.61.492-1.125 1.125-1.125m.375 1.5a.385.385 0 0 0-.375.375c0 .21.164.375.375.375h.75a.385.385 0 0 0 .375-.375.4.4 0 0 0-.375-.375zm-.375 1.875c0 .21.164.375.375.375h.75a.385.385 0 0 0 .375-.375.4.4 0 0 0-.375-.375h-.75a.385.385 0 0 0-.375.375m.75 3.75a.755.755 0 0 0-.75.75c0 .422.328.75.75.75.398 0 .75-.328.75-.75a.77.77 0 0 0-.75-.75' />
    </g>
    <defs>
      <clipPath id='bb028114ec88f7efb1734b8e7d91332e__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerCaptionFillIcon);
export default ForwardRef;
