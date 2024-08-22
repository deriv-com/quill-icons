import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPhoneXlFillIcon = (
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
      <path d='m7.688 7.172 1.875 4.5c.328.75.14 1.64-.516 2.156L6.75 15.75a15.75 15.75 0 0 0 7.5 7.5l1.922-2.297c.515-.656 1.406-.844 2.156-.515l4.5 1.875c.89.328 1.313 1.312 1.078 2.203l-1.125 4.125C22.547 29.438 21.844 30 21 30 9.375 30 0 20.625 0 9c0-.844.563-1.547 1.36-1.781l4.124-1.125c.891-.235 1.875.187 2.204 1.078' />
    </g>
    <defs>
      <clipPath id='e8eedf949d3e0fcdae8153ec763e911a__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPhoneXlFillIcon);
export default ForwardRef;
