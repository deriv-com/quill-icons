import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedXmarkLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.36 11.398 9.257 15.5l4.101 4.14c.508.47.508 1.29 0 1.758a1.205 1.205 0 0 1-1.757 0L7.5 17.297l-4.14 4.101a1.205 1.205 0 0 1-1.758 0 1.205 1.205 0 0 1 0-1.757L5.703 15.5l-4.101-4.102a1.205 1.205 0 0 1 0-1.757 1.205 1.205 0 0 1 1.757 0L7.5 13.742l4.102-4.101a1.205 1.205 0 0 1 1.757 0c.508.468.508 1.289 0 1.757' />
    </g>
    <defs>
      <clipPath id='6be2d0ab9557773acc7f74292645ff8f__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXmarkLgFillIcon);
export default ForwardRef;
