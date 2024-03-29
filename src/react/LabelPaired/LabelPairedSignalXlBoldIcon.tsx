import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSignalXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M27 6c.61 0 1.125.516 1.125 1.125v21.75A1.11 1.11 0 0 1 27 30c-.656 0-1.125-.469-1.125-1.125V7.125C25.875 6.515 26.344 6 27 6m-6 4.5c.61 0 1.125.516 1.125 1.125v17.25A1.11 1.11 0 0 1 21 30c-.656 0-1.125-.469-1.125-1.125v-17.25c0-.61.469-1.125 1.125-1.125M15 15c.61 0 1.125.516 1.125 1.125v12.75A1.11 1.11 0 0 1 15 30c-.656 0-1.125-.469-1.125-1.125v-12.75c0-.61.469-1.125 1.125-1.125m-6 4.5c.61 0 1.125.516 1.125 1.125v8.25A1.11 1.11 0 0 1 9 30c-.656 0-1.125-.469-1.125-1.125v-8.25c0-.61.469-1.125 1.125-1.125M3 24c.61 0 1.125.516 1.125 1.125v3.75A1.11 1.11 0 0 1 3 30c-.656 0-1.125-.469-1.125-1.125v-3.75C1.875 24.515 2.344 24 3 24' />
    </g>
    <defs>
      <clipPath id='d750e77b583aee50c1104ea8c89e0c11__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSignalXlBoldIcon);
export default ForwardRef;
