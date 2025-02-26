import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedExclamationXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={3}
    height={36}
    viewBox='0 0 3 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 9v12c0 .844-.703 1.5-1.5 1.5A1.48 1.48 0 0 1 0 21V9c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5M1.5 28.5c-.703 0-1.312-.328-1.64-.937-.329-.563-.329-1.266 0-1.875a1.89 1.89 0 0 1 1.64-.938c.656 0 1.266.375 1.594.938.328.609.328 1.312 0 1.875-.328.609-.938.937-1.594.937' />
    </g>
    <defs>
      <clipPath id='047f0521d4fcbcfcbc37e4c61dc929e1__a'>
        <path d='M0 0h3v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExclamationXlFillIcon);
export default ForwardRef;
