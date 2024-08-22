import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandsHoldingDiamondLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m13.36 5.89 3.75 3.75c.507.47.507 1.29 0 1.758l-3.75 3.75a1.205 1.205 0 0 1-1.758 0l-3.75-3.75a1.205 1.205 0 0 1 0-1.757l3.75-3.75a1.205 1.205 0 0 1 1.757 0M8.75 10.5l3.75 3.75 3.75-3.75-3.75-3.75zM2.5 8C3.867 8 5 9.133 5 10.5v4.883c0 .156 0 .351.04.508.077-.118.155-.235.272-.352a2.17 2.17 0 0 1 3.086 0l3.555 3.555c.195.234.39.43.547.664.117-.235.313-.43.508-.664l3.555-3.555a2.17 2.17 0 0 1 3.085 0c.118.117.196.234.274.352.039-.157.078-.352.078-.508V10.5C20 9.133 21.094 8 22.5 8c1.367 0 2.5 1.133 2.5 2.5v8.477a4.41 4.41 0 0 1-1.29 3.085l-3.28 3.282a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899l3.282-3.28c.585-.587.937-1.368.937-2.188V10.5c0-.664-.586-1.25-1.25-1.25-.703 0-1.25.586-1.25 1.25v4.883c0 1.055-.43 2.07-1.172 2.812l-.43.43-1.718 1.719-.625.625a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899l.625-.625 1.719-1.718a.92.92 0 0 0 0-1.29.92.92 0 0 0-1.29 0l-3.554 3.555a2.63 2.63 0 0 0-.781 1.875v3.008a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-3.008c0-.703-.312-1.367-.781-1.875L7.5 16.437a.92.92 0 0 0-1.29 0 .92.92 0 0 0 0 1.29l1.72 1.718.625.625a.66.66 0 0 1 0 .899.66.66 0 0 1-.899 0l-.625-.625-1.718-1.719-.391-.43c-.781-.742-1.172-1.758-1.172-2.812V10.5c0-.664-.586-1.25-1.25-1.25-.703 0-1.25.586-1.25 1.25v8.477c0 .82.313 1.601.898 2.187l3.282 3.281a.66.66 0 0 1 0 .899.66.66 0 0 1-.899 0L1.25 22.062C.43 21.243 0 20.11 0 18.978V10.5C0 9.133 1.094 8 2.5 8' />
    </g>
    <defs>
      <clipPath id='9e7d2641a0157d0f34d9627d937d084d__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandsHoldingDiamondLgRegularIcon);
export default ForwardRef;
