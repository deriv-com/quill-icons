import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSearchLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M16.25 13.625a8.12 8.12 0 0 1-1.562 4.805l4.921 4.96c.508.47.508 1.29 0 1.758a1.205 1.205 0 0 1-1.757 0l-4.961-4.96c-1.328 1.015-3.008 1.562-4.766 1.562A8.12 8.12 0 0 1 0 13.625C0 9.172 3.633 5.5 8.125 5.5c4.453 0 8.125 3.672 8.125 8.125M8.125 19.25a5.58 5.58 0 0 0 4.844-2.812c1.015-1.72 1.015-3.868 0-5.625C11.953 9.093 10.117 8 8.125 8c-2.031 0-3.867 1.094-4.883 2.813-1.015 1.757-1.015 3.906 0 5.624a5.6 5.6 0 0 0 4.883 2.813' />
    </g>
    <defs>
      <clipPath id='79cec25ff838075d5bc1262fee70bc0b__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSearchLgFillIcon);
export default ForwardRef;
