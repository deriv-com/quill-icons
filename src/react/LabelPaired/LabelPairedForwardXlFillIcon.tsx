import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardXlFillIcon = (
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
      <path d='M2.438 26.672a1.42 1.42 0 0 1-1.594.187C.328 26.625 0 26.11 0 25.5v-15c0-.562.328-1.078.844-1.36.515-.234 1.125-.14 1.594.235l8.062 6.703v3.891zM12 22.5v-12c0-.562.328-1.078.844-1.36.515-.234 1.125-.14 1.594.235l9 7.5c.328.281.562.703.562 1.125 0 .469-.234.89-.562 1.172l-9 7.5a1.42 1.42 0 0 1-1.594.187c-.516-.234-.844-.75-.844-1.359z' />
    </g>
    <defs>
      <clipPath id='8386eb95ce5650b890ef511df1998bb5__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardXlFillIcon);
export default ForwardRef;
