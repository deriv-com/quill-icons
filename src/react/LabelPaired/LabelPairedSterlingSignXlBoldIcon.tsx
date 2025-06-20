import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSterlingSignXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.5 13.5v3h6.375c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125H4.5v3c0 1.172-.328 2.344-.89 3.422L3 26.25h10.875c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125H1.125c-.422 0-.797-.187-.984-.516-.188-.375-.235-.797-.047-1.125l1.547-2.765c.375-.75.609-1.547.609-2.344v-3H1.125C.469 18.75 0 18.281 0 17.625c0-.61.469-1.125 1.125-1.125H2.25v-3c0-3.328 2.672-6 5.953-6 .61 0 1.266.14 1.875.328l3.75 1.266c.61.187.938.797.703 1.406-.187.61-.797.89-1.406.703l-3.75-1.219a3.5 3.5 0 0 0-1.172-.234C6.141 9.75 4.5 11.438 4.5 13.5' />
    </g>
    <defs>
      <clipPath id='e79d323739e38112c3b8d7365434fa63__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSterlingSignXlBoldIcon);
export default ForwardRef;
