import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsSlashMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.188 4.188 5.75 7.75c.875-.844 2-1.437 3.25-1.656V5c0-.531.438-1 1-1 .531 0 1 .469 1 1v1.094A6.05 6.05 0 0 1 15.906 11H17c.531 0 1 .469 1 1 0 .563-.469 1-1 1h-1.094a6 6 0 0 1-.781 2.094l4.563 3.594c.343.25.406.718.125 1.03-.25.345-.72.407-1.032.126l-18.5-14.5c-.343-.25-.406-.719-.125-1.032.25-.343.719-.406 1.032-.125M7.344 9l1.218.938C8.97 9.688 9.47 9.5 10 9.5c1.375 0 2.5 1.125 2.5 2.5 0 .313-.062.625-.187.906l1.218.938A3.9 3.9 0 0 0 14 12c0-2.187-1.812-4-4-4a4 4 0 0 0-2.656 1m3.843 6.844 1.75 1.375a6 6 0 0 1-1.937.718V19c0 .563-.469 1-1 1-.562 0-1-.437-1-1v-1.062a6.05 6.05 0 0 1-4.937-4.907H3c-.562 0-1-.469-1-1 0-.562.438-1 1-1h1.063c.03-.25.093-.469.156-.687L6 11.75V12c0 2.219 1.781 4 4 4 .406 0 .813-.062 1.188-.156' />
    </g>
    <defs>
      <clipPath id='3e8f89c35c4a8d6027bbf26a23e9bb9d__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsSlashMdFillIcon);
export default ForwardRef;
