import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationDotXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M15.75 15c0-3.703-3.047-6.75-6.75-6.75-3.75 0-6.75 3.047-6.75 6.75 0 .61.188 1.5.703 2.719.469 1.125 1.172 2.437 1.969 3.75 1.36 2.156 2.906 4.218 4.078 5.718 1.125-1.5 2.672-3.562 4.031-5.718.797-1.313 1.5-2.625 1.969-3.75.516-1.219.75-2.11.75-2.719M18 15c0 4.125-5.484 11.39-7.922 14.438a1.414 1.414 0 0 1-2.203 0C5.485 26.39 0 19.124 0 15c0-4.969 4.031-9 9-9s9 4.031 9 9m-7.5 0c0-.797-.703-1.5-1.5-1.5-.844 0-1.5.703-1.5 1.5 0 .844.656 1.5 1.5 1.5.797 0 1.5-.656 1.5-1.5m-5.25 0c0-1.312.703-2.531 1.875-3.234 1.125-.657 2.578-.657 3.75 0C12 12.469 12.75 13.688 12.75 15c0 1.36-.75 2.578-1.875 3.281-1.172.657-2.625.657-3.75 0C5.953 17.578 5.25 16.36 5.25 15' />
    </g>
    <defs>
      <clipPath id='22553ea3edc743ddfdd53dc53b4b8b2a__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationDotXlBoldIcon);
export default ForwardRef;
