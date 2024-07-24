import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardStepXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.438 26.672a1.42 1.42 0 0 1-1.594.187C.328 26.625 0 26.11 0 25.5v-15c0-.562.328-1.078.844-1.36.515-.234 1.125-.14 1.594.235l9 7.5.562.422V10.5c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5v15c0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5v-6.797l-.562.469z' />
    </g>
    <defs>
      <clipPath id='19d53a600e5cb3c207a6ca491f79d77c__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepXlFillIcon);
export default ForwardRef;
