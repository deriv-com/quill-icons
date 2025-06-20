import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowsRotateXlBoldIcon = (
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
      <path d='M4.406 14.813a1.17 1.17 0 0 1-1.5.562 1.12 1.12 0 0 1-.61-1.453C3.892 10.172 7.642 7.5 12 7.5a9.23 9.23 0 0 1 6.516 2.719L21 12.703v-2.578C21 9.515 21.469 9 22.125 9c.61 0 1.125.516 1.125 1.125v5.25a1.11 1.11 0 0 1-1.125 1.125h-5.25c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125h2.531l-2.484-2.437C15.609 10.5 13.828 9.75 12 9.75a8.235 8.235 0 0 0-7.594 5.063m17.25 7.359C20.016 25.875 16.313 28.5 12 28.5c-2.484 0-4.828-.937-6.562-2.719L3 23.344v2.531A1.11 1.11 0 0 1 1.875 27C1.219 27 .75 26.531.75 25.875v-5.25c0-.61.469-1.125 1.125-1.125h5.25c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125H4.547l2.484 2.484C8.344 25.547 10.125 26.25 12 26.25c3.375 0 6.328-2.016 7.547-4.969.281-.61.937-.843 1.5-.61.562.235.844.892.61 1.5' />
    </g>
    <defs>
      <clipPath id='a2e2eca35d24a6cbbaa79c0cab90ea21__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowsRotateXlBoldIcon);
export default ForwardRef;
