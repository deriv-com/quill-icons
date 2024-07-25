import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLaptopXlRegularIcon = (
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
      <path d='M24 9H6c-.844 0-1.5.703-1.5 1.5v12H3v-12c0-1.64 1.313-3 3-3h18c1.64 0 3 1.36 3 3v12h-1.5v-12c0-.797-.703-1.5-1.5-1.5M3.563 27H26.39c.937 0 1.734-.61 2.015-1.5H1.546c.282.89 1.079 1.5 2.016 1.5M0 24.938C0 24.422.375 24 .89 24h28.173a.94.94 0 0 1 .937.938c0 1.968-1.64 3.562-3.61 3.562H3.564A3.56 3.56 0 0 1 0 24.938' />
    </g>
    <defs>
      <clipPath id='e49d175276dc55f8db10ca4c7d717d6c__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopXlRegularIcon);
export default ForwardRef;
