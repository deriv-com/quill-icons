import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVideoLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.75 9.875a.64.64 0 0 0-.625.625v10c0 .352.273.625.625.625h10a.64.64 0 0 0 .625-.625v-10c0-.312-.312-.625-.625-.625zm-2.5.625C.25 9.133 1.344 8 2.75 8h10c1.367 0 2.5 1.133 2.5 2.5v10c0 1.406-1.133 2.5-2.5 2.5h-10a2.47 2.47 0 0 1-2.5-2.5zm20.625 9.219V11.32L16.5 13.273v-2.03l4.063-1.837c.195-.078.39-.156.625-.156.859 0 1.562.703 1.562 1.563v9.414c0 .859-.703 1.523-1.562 1.523-.235 0-.43-.04-.625-.117L16.5 19.797v-2.07z' />
    </g>
    <defs>
      <clipPath id='180b1e930cabfdeca1b6f8a5fab573b0__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVideoLgBoldIcon);
export default ForwardRef;
