import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMagnifyingGlassMinusLgFillIcon = (
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
      <path d='M16.25 13.625a8.12 8.12 0 0 1-1.562 4.805l4.921 4.96c.508.47.508 1.29 0 1.758a1.205 1.205 0 0 1-1.757 0l-4.961-4.96c-1.328 1.015-3.008 1.562-4.766 1.562A8.12 8.12 0 0 1 0 13.625C0 9.172 3.633 5.5 8.125 5.5c4.453 0 8.125 3.672 8.125 8.125m-10.937-.937a.925.925 0 0 0-.938.937c0 .547.39.938.938.938h5.625c.507 0 .937-.391.937-.938a.95.95 0 0 0-.937-.937z' />
    </g>
    <defs>
      <clipPath id='c159105fb48e03a2b081bc8de1ea6661__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMagnifyingGlassMinusLgFillIcon);
export default ForwardRef;
