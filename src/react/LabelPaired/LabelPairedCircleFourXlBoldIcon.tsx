import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleFourXlBoldIcon = (
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
      <path d='M21.75 18c0-3.469-1.875-6.656-4.875-8.437-3.047-1.735-6.75-1.735-9.75 0C4.078 11.343 2.25 14.53 2.25 18c0 3.516 1.828 6.703 4.875 8.484 3 1.735 6.703 1.735 9.75 0 3-1.78 4.875-4.968 4.875-8.484M0 18A11.91 11.91 0 0 1 6 7.64c3.703-2.156 8.25-2.156 12 0 3.703 2.157 6 6.094 6 10.36 0 4.313-2.297 8.25-6 10.406-3.75 2.157-8.297 2.157-12 0C2.25 26.25 0 22.313 0 18m10.453-5.906c.61.187.938.797.703 1.406l-1.734 5.25h3.328v-2.625c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125v2.625h.375c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 15.375 21H15v1.875A1.11 1.11 0 0 1 13.875 24c-.656 0-1.125-.469-1.125-1.125V21H7.875c-.375 0-.703-.14-.937-.469-.188-.281-.282-.656-.141-.984l2.25-6.75c.187-.61.844-.938 1.406-.703' />
    </g>
    <defs>
      <clipPath id='1c6454259c2dda73898dddcbc9149a55__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleFourXlBoldIcon);
export default ForwardRef;
