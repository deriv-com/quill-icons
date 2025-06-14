import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMicrophoneXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12 10.5c0-1.64-1.36-3-3-3-1.687 0-3 1.36-3 3V18c0 1.688 1.313 3 3 3 1.64 0 3-1.312 3-3zm-7.5 0a4.501 4.501 0 0 1 9 0V18a4.501 4.501 0 0 1-9 0zM3 15.75V18c0 3.328 2.672 6 6 6 3.281 0 6-2.672 6-6v-2.25c0-.375.328-.75.75-.75.375 0 .75.375.75.75V18c0 3.89-3 7.125-6.75 7.5v3h3c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-7.5a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75h3v-3C4.453 25.125 1.5 21.89 1.5 18v-2.25c0-.375.328-.75.75-.75.375 0 .75.375.75.75' />
    </g>
    <defs>
      <clipPath id='84dc5e9c2563a054446119a04700ecc4__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMicrophoneXlRegularIcon);
export default ForwardRef;
