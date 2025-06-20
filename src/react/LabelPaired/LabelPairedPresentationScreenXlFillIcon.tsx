import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPresentationScreenXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 6h24c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5v10.5c0 1.688-1.36 3-3 3H15v1.64l3.281 3.329c.61.562.61 1.547 0 2.11-.562.608-1.547.608-2.11 0L13.5 26.905l-2.719 2.672c-.562.61-1.547.61-2.11 0a1.445 1.445 0 0 1 0-2.11L12 24.142V22.5H4.5c-1.687 0-3-1.312-3-3V9A1.48 1.48 0 0 1 0 7.5C0 6.703.656 6 1.5 6m3 3v10.5h18V9z' />
    </g>
    <defs>
      <clipPath id='78f227313dc73442c995b1e5b54181a8__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPresentationScreenXlFillIcon);
export default ForwardRef;
