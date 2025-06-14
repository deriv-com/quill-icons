import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleStarXlFillIcon = (
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
      <path d='M0 18A11.91 11.91 0 0 1 6 7.64c3.703-2.156 8.25-2.156 12 0 3.703 2.157 6 6.094 6 10.36 0 4.313-2.297 8.25-6 10.406-3.75 2.157-8.297 2.157-12 0C2.25 26.25 0 22.313 0 18m12-7.125c-.328 0-.562.188-.703.422l-1.688 3.469-3.796.562c-.282 0-.516.235-.61.469-.094.281 0 .61.188.797l2.765 2.672-.656 3.797c-.047.28.047.562.281.703.235.187.563.187.797.093L12 22.08l3.375 1.78c.234.094.563.094.797-.093.234-.141.328-.422.281-.703l-.61-3.797 2.72-2.672a.665.665 0 0 0 .187-.75.76.76 0 0 0-.61-.516l-3.796-.562-1.688-3.47a.75.75 0 0 0-.656-.374z' />
    </g>
    <defs>
      <clipPath id='8fcc8880ee43d224e5bf1d0424385ffe__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleStarXlFillIcon);
export default ForwardRef;
