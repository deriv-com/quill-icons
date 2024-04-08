import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSignalXlFillIcon = (
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
      <path d='M27 6c.797 0 1.5.703 1.5 1.5v21c0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5v-21c0-.797.656-1.5 1.5-1.5m-6 4.5c.797 0 1.5.703 1.5 1.5v16.5c0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5V12c0-.797.656-1.5 1.5-1.5m-4.5 6v12c0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5v-12c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5m-7.5 3c.797 0 1.5.703 1.5 1.5v7.5c0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5V21c0-.797.656-1.5 1.5-1.5m-4.5 6v3c0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5v-3c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5' />
    </g>
    <defs>
      <clipPath id='2b1cf32e3cd68556c9693c93ff83d36e__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSignalXlFillIcon);
export default ForwardRef;
