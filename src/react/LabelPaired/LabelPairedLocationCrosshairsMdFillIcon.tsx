import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsMdFillIcon = (
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
      <path d='M8 4c.531 0 1 .469 1 1v1.094A6.05 6.05 0 0 1 13.906 11H15c.531 0 1 .469 1 1 0 .563-.469 1-1 1h-1.094A6.05 6.05 0 0 1 9 17.938V19c0 .563-.469 1-1 1-.562 0-1-.437-1-1v-1.062A6.04 6.04 0 0 1 2.063 13H1c-.562 0-1-.437-1-1 0-.531.438-1 1-1h1.063A6.05 6.05 0 0 1 7 6.094V5c0-.531.438-1 1-1m-4 8c0 1.438.75 2.75 2 3.469 1.219.719 2.75.719 4 0A4.04 4.04 0 0 0 12 12c0-1.406-.781-2.719-2-3.437-1.25-.72-2.781-.72-4 0-1.25.718-2 2.03-2 3.437m4-2.5c.875 0 1.688.5 2.156 1.25.438.781.438 1.75 0 2.5-.469.781-1.281 1.25-2.156 1.25a2.53 2.53 0 0 1-2.187-1.25c-.438-.75-.438-1.719 0-2.5C6.28 10 7.093 9.5 8 9.5' />
    </g>
    <defs>
      <clipPath id='538bfc4ce2b5bf966f64d9c7776cc654__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsMdFillIcon);
export default ForwardRef;
