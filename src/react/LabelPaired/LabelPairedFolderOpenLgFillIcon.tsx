import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFolderOpenLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.688 14.25.25 20.188V9.25c0-1.367 1.094-2.5 2.5-2.5h4.57c.664 0 1.29.273 1.758.742l1.055 1.055c.469.469 1.094.703 1.758.703H16.5c1.367 0 2.5 1.133 2.5 2.5V13H5.875a2.54 2.54 0 0 0-2.187 1.25m1.093.625c.235-.39.625-.625 1.094-.625H21.5c.43 0 .86.273 1.055.664.234.39.234.86 0 1.25l-4.375 7.5a1.28 1.28 0 0 1-1.055.586H1.5c-.469 0-.86-.234-1.094-.625a1.2 1.2 0 0 1 0-1.25z' />
    </g>
    <defs>
      <clipPath id='ef03fb6633ccddd0d17146da825a648a__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFolderOpenLgFillIcon);
export default ForwardRef;
