import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleFiveMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8 5a6.98 6.98 0 0 0-6.062 3.5c-1.282 2.188-1.282 4.844 0 7C3.188 17.688 5.467 19 8 19c2.5 0 4.781-1.312 6.031-3.5 1.281-2.156 1.281-4.812 0-7C12.781 6.344 10.5 5 8 5m0 15c-2.875 0-5.5-1.5-6.937-4-1.438-2.469-1.438-5.5 0-8A8.02 8.02 0 0 1 8 4c2.844 0 5.469 1.531 6.906 4 1.438 2.5 1.438 5.531 0 8A7.94 7.94 0 0 1 8 20M6.5 8H10c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H6.875l-.5 2.063 2.5.25c1.188.124 2.094 1.156 2.094 2.343A2.32 2.32 0 0 1 8.625 16H7.25c-.844 0-1.656-.406-2.125-1.125l-.062-.094a.48.48 0 0 1 .156-.687.5.5 0 0 1 .687.125l.063.094c.281.437.781.687 1.281.687h1.375c.75 0 1.375-.594 1.375-1.344 0-.687-.531-1.25-1.219-1.344L5.687 12c-.156 0-.28-.094-.375-.187a.63.63 0 0 1-.062-.407l.75-3c.063-.25.25-.406.5-.406' />
    </g>
    <defs>
      <clipPath id='f7b02296d2cf0bbc8fed2a4fb195c1f7__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleFiveMdRegularIcon);
export default ForwardRef;
