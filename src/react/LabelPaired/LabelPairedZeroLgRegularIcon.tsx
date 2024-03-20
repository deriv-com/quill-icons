import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedZeroLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 13A6.243 6.243 0 0 1 6.5 6.75c3.438 0 6.25 2.813 6.25 6.25v5a6.243 6.243 0 0 1-6.25 6.25A6.22 6.22 0 0 1 .25 18zM6.5 8c-2.773 0-5 2.266-5 5v5c0 2.773 2.227 5 5 5 2.734 0 5-2.227 5-5v-5c0-2.734-2.266-5-5-5' />
    </g>
    <defs>
      <clipPath id='62bd46c9ea974db0bc464f40c44fd710__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedZeroLgRegularIcon);
export default ForwardRef;
