import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M18 10.5H3V21h15zm-15-3h15c1.64 0 3 1.36 3 3V21c0 1.688-1.36 3-3 3h-5.531l.515 1.5H16.5c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-12A1.48 1.48 0 0 1 3 27c0-.797.656-1.5 1.5-1.5h3.469l.515-1.5H3c-1.687 0-3-1.312-3-3V10.5c0-1.64 1.313-3 3-3m21.75 0h3C28.969 7.5 30 8.531 30 9.75v16.5a2.25 2.25 0 0 1-2.25 2.25h-3a2.22 2.22 0 0 1-2.25-2.25V9.75a2.25 2.25 0 0 1 2.25-2.25m.75 3c-.422 0-.75.375-.75.75 0 .422.328.75.75.75H27c.375 0 .75-.328.75-.75 0-.375-.375-.75-.75-.75zm-.75 3.75c0 .422.328.75.75.75H27c.375 0 .75-.328.75-.75 0-.375-.375-.75-.75-.75h-1.5c-.422 0-.75.375-.75.75m1.5 7.5c-.844 0-1.5.703-1.5 1.5 0 .844.656 1.5 1.5 1.5.797 0 1.5-.656 1.5-1.5 0-.797-.703-1.5-1.5-1.5' />
    </g>
    <defs>
      <clipPath id='7b1c3672185b835a9ac18d7fa0fe2968__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerXlFillIcon);
export default ForwardRef;
