import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTrashXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.328 6.844C6.562 6.328 7.078 6 7.641 6h5.672c.562 0 1.078.328 1.312.844L15 7.5h4.5c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-18A1.48 1.48 0 0 1 0 9c0-.797.656-1.5 1.5-1.5H6zM19.5 12l-1.031 15.89c-.047 1.22-1.032 2.11-2.25 2.11H4.734c-1.218 0-2.203-.89-2.25-2.11L1.5 12z' />
    </g>
    <defs>
      <clipPath id='f893aa7037ffb96cdc3b13f1da409b71__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTrashXlFillIcon);
export default ForwardRef;
