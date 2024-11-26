import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMagnifyingGlassPlusXlFillIcon = (
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
      <path d='M19.5 15.75a9.75 9.75 0 0 1-1.875 5.766l5.906 5.953c.61.562.61 1.547 0 2.11-.562.608-1.547.608-2.11 0l-5.952-5.954c-1.594 1.219-3.61 1.875-5.719 1.875C4.36 25.5 0 21.14 0 15.75 0 10.406 4.36 6 9.75 6c5.344 0 9.75 4.406 9.75 9.75M8.625 19.875c0 .656.469 1.125 1.125 1.125a1.11 1.11 0 0 0 1.125-1.125v-3h3A1.11 1.11 0 0 0 15 15.75a1.14 1.14 0 0 0-1.125-1.125h-3v-3A1.14 1.14 0 0 0 9.75 10.5a1.11 1.11 0 0 0-1.125 1.125v3h-3A1.11 1.11 0 0 0 4.5 15.75c0 .656.469 1.125 1.125 1.125h3z' />
    </g>
    <defs>
      <clipPath id='91bf6d3b19e6eab2bcd9a4687a70c17f__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMagnifyingGlassPlusXlFillIcon);
export default ForwardRef;
