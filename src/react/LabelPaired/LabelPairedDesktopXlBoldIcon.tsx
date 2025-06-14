import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDesktopXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M24 8.25H3c-.422 0-.75.375-.75.75v9h22.5V9c0-.375-.375-.75-.75-.75M27 18v4.5c0 1.688-1.36 3-3 3h-6.937l.375 2.25h2.437c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 19.875 30H7.125C6.469 30 6 29.531 6 28.875c0-.61.469-1.125 1.125-1.125h2.39l.376-2.25H3c-1.687 0-3-1.312-3-3V9c0-1.64 1.313-3 3-3h21c1.64 0 3 1.36 3 3zM2.25 20.25v2.25c0 .422.328.75.75.75h21c.375 0 .75-.328.75-.75v-2.25zm9.563 7.5h3.328l-.375-2.25h-2.578z' />
    </g>
    <defs>
      <clipPath id='e2eb6c0ca06cbbd26bd9f426c332169e__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDesktopXlBoldIcon);
export default ForwardRef;
