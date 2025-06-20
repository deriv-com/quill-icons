import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedScissorsXlRegularIcon = (
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
      <path d='M23.813 26.766c-.282.328-.75.328-1.079.093l-7.125-6.093c-.328-.235-.328-.75-.093-1.032a.753.753 0 0 1 1.078-.093l7.125 6.047c.328.28.328.75.093 1.078m-10.36-9.703 9.281-7.875c.328-.235.797-.235 1.078.093.235.328.235.797-.093 1.078L9.75 22.125c.469.75.75 1.688.75 2.625 0 2.906-2.39 5.25-5.25 5.25A5.24 5.24 0 0 1 0 24.75c0-2.86 2.344-5.25 5.25-5.25 1.36 0 2.625.563 3.563 1.453L12.28 18l-3.469-2.906A5.16 5.16 0 0 1 5.25 16.5 5.24 5.24 0 0 1 0 11.25C0 8.39 2.344 6 5.25 6c2.86 0 5.25 2.39 5.25 5.297a5.04 5.04 0 0 1-.75 2.625zM5.25 15c1.313 0 2.531-.703 3.234-1.875.657-1.125.657-2.578 0-3.75C7.781 8.25 6.563 7.5 5.25 7.5c-1.36 0-2.578.75-3.281 1.875-.657 1.172-.657 2.625 0 3.75C2.672 14.297 3.89 15 5.25 15m0 6c-1.36 0-2.578.75-3.281 1.875-.657 1.172-.657 2.625 0 3.75C2.672 27.797 3.89 28.5 5.25 28.5c1.313 0 2.531-.703 3.234-1.875.657-1.125.657-2.578 0-3.75C7.781 21.75 6.563 21 5.25 21' />
    </g>
    <defs>
      <clipPath id='da7b6d7fcb7aefd5269fef055183dd8f__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedScissorsXlRegularIcon);
export default ForwardRef;
