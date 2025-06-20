import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpFromSquareXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m12.516 6.234 4.875 4.875c.28.282.28.797 0 1.079-.282.28-.797.28-1.078 0l-3.563-3.61V21c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V8.578l-3.61 3.61c-.28.28-.796.28-1.077 0-.282-.282-.282-.797 0-1.079l4.875-4.875c.28-.28.796-.28 1.078 0M3 7.5h1.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H3c-.844 0-1.5.703-1.5 1.5V27c0 .844.656 1.5 1.5 1.5h18c.797 0 1.5-.656 1.5-1.5V10.5c0-.797-.703-1.5-1.5-1.5h-1.5a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75H21c1.64 0 3 1.36 3 3V27c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3V10.5c0-1.64 1.313-3 3-3' />
    </g>
    <defs>
      <clipPath id='52859a5b483baa9220ff35731bf72eb5__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromSquareXlRegularIcon);
export default ForwardRef;
