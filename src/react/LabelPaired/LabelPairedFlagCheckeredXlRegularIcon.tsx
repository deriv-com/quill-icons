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
      <path d='M1.5 6.75v2.016L6.094 7.5q3-.75 5.765.563 1.454.75 3.094.703a6.75 6.75 0 0 0 3.094-.844l.703-.422q.796-.421 1.5 0 .704.375.75 1.266V22.03q-.047.937-.89 1.36L18.655 24a8.8 8.8 0 0 1-3.656.703 8.3 8.3 0 0 1-3.61-.937q-2.484-1.172-5.109-.516L1.5 24.563v4.687q-.046.704-.75.75-.703-.046-.75-.75V6.75Q.047 6.047.75 6q.704.046.75.75m0 3.563v2.906L6 12.28V9.094zm0 4.453v3.328l4.5-.938v-3.375zm6-1.313v3.328a6.9 6.9 0 0 1 3.188.188l2.812.797v-3.282a2 2 0 0 0-.234-.093l-3-.844a5.17 5.17 0 0 0-2.578-.094zM15 14.72v3.375a6.8 6.8 0 0 0 2.11-.14l2.39-.563v-3.328l-2.016.468q-1.265.282-2.484.188m-1.5 4.64a2 2 0 0 0-.234-.093l-3-.844a5.17 5.17 0 0 0-2.578-.094H7.5v3.235a8.5 8.5 0 0 1 4.547.89q.703.328 1.453.516zm1.5 3.844a7.1 7.1 0 0 0 3.094-.61l1.406-.562v-3.093l-2.016.468a8.4 8.4 0 0 1-2.484.188zm0-9.984a6.8 6.8 0 0 0 2.11-.14l2.39-.563V8.813l-.75.374Q16.97 10.22 15 10.267zm-1.5-3.047a7.9 7.9 0 0 1-2.344-.75A6.7 6.7 0 0 0 7.5 8.766v3.187a6.5 6.5 0 0 1 3.188.14l2.812.845zm-12 9.469v3.375l4.36-1.172a.4.4 0 0 1 .14-.047v-3.14z' />
    </g>
    <defs>
      <clipPath id='139e7ef9f3c326499db093145ef28c95__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFlagCheckeredXlRegularIcon);
export default ForwardRef;
