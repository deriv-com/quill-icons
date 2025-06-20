import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEightXlBoldIcon = (
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
      <path d='M21.75 18c0-3.469-1.875-6.656-4.875-8.437-3.047-1.735-6.75-1.735-9.75 0C4.078 11.343 2.25 14.53 2.25 18c0 3.516 1.828 6.703 4.875 8.484 3 1.735 6.703 1.735 9.75 0 3-1.78 4.875-4.968 4.875-8.484M0 18A11.91 11.91 0 0 1 6 7.64c3.703-2.156 8.25-2.156 12 0 3.703 2.157 6 6.094 6 10.36 0 4.313-2.297 8.25-6 10.406-3.75 2.157-8.297 2.157-12 0C2.25 26.25 0 22.313 0 18m12.375-6c1.828 0 3.375 1.547 3.375 3.375 0 .75-.234 1.453-.656 1.969.844.703 1.406 1.734 1.406 2.906 0 2.11-1.687 3.75-3.75 3.75h-1.5c-2.11 0-3.75-1.64-3.75-3.75 0-1.172.516-2.203 1.36-2.906-.376-.516-.61-1.219-.61-1.969 0-1.828 1.5-3.375 3.375-3.375zm-.75 4.5h.75a1.11 1.11 0 0 0 1.125-1.125 1.14 1.14 0 0 0-1.125-1.125h-.75a1.11 1.11 0 0 0-1.125 1.125c0 .656.469 1.125 1.125 1.125m.75 2.25H11.25c-.844 0-1.5.703-1.5 1.5 0 .844.656 1.5 1.5 1.5h1.5c.797 0 1.5-.656 1.5-1.5 0-.797-.703-1.5-1.5-1.5z' />
    </g>
    <defs>
      <clipPath id='95ad005479df8831c6ee1fc870e6453e__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEightXlBoldIcon);
export default ForwardRef;
