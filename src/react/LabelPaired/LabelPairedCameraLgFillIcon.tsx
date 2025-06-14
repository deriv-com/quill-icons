import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCameraLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.82 8.04a1.85 1.85 0 0 1 1.758-1.29h4.805c.82 0 1.523.547 1.758 1.29l.43 1.21H17.5c1.367 0 2.5 1.133 2.5 2.5v10c0 1.406-1.133 2.5-2.5 2.5h-15a2.47 2.47 0 0 1-2.5-2.5v-10c0-1.367 1.094-2.5 2.5-2.5h2.89zM10 13c-1.367 0-2.578.742-3.281 1.875-.664 1.172-.664 2.617 0 3.75C7.422 19.797 8.633 20.5 10 20.5c1.328 0 2.54-.703 3.242-1.875.664-1.133.664-2.578 0-3.75C12.54 13.742 11.328 13 10 13' />
    </g>
    <defs>
      <clipPath id='432351ae68848802955702f14b0ec135__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCameraLgFillIcon);
export default ForwardRef;
