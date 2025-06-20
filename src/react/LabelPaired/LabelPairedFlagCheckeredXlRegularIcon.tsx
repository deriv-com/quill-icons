import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFlagCheckeredXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 6.75v2.063l4.594-1.266a8.05 8.05 0 0 1 5.719.562A6.58 6.58 0 0 0 18 7.922l.75-.422c.984-.562 2.25.14 2.25 1.313V22.03c0 .61-.375 1.125-.937 1.36L18.656 24c-2.343 1.031-5.015.938-7.312-.187a7.14 7.14 0 0 0-5.11-.516L1.5 24.609v4.641c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V6.75C0 6.375.328 6 .75 6c.375 0 .75.375.75.75m0 3.61v2.906L6 12.28V9.094zm0 4.453v3.328l4.5-.985v-3.328zm6-1.313v3.328a7.4 7.4 0 0 1 3.188.14l2.812.845v-3.329c-.094 0-.187-.046-.234-.046l-3.047-.891c-.844-.235-1.735-.281-2.578-.094zm7.5 1.266v3.375c.703.047 1.406 0 2.11-.188l2.39-.515v-3.329l-2.062.47a8.6 8.6 0 0 1-2.438.187m-1.5 4.593c-.094 0-.187-.047-.234-.047l-3.047-.89c-.844-.235-1.735-.281-2.578-.094l-.141.047v3.188c1.547-.141 3.094.187 4.547.89a7.8 7.8 0 0 0 1.453.563zm1.5 3.844a6.9 6.9 0 0 0 3.047-.562l1.453-.61v-3.047l-2.062.47A8.6 8.6 0 0 1 15 19.64zm0-9.984v.047c.703.046 1.406 0 2.11-.188l2.39-.515v-3.75l-.75.421c-1.172.657-2.484 1.032-3.75 1.032zm-1.5-3.047c-.844-.094-1.594-.375-2.344-.75a6.66 6.66 0 0 0-3.656-.61v3.141a7.1 7.1 0 0 1 3.14.14l2.86.845zm-12 9.516v3.375l4.36-1.22c.046 0 .093 0 .14-.046v-3.094z' />
    </g>
    <defs>
      <clipPath id='c12b916d984bc18d05d1ea7a9d7169e5__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFlagCheckeredXlRegularIcon);
export default ForwardRef;
