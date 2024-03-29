import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const CurrencyNoneIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#4BB4B3'
      d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
    />
    <path
      fill='#fff'
      d='M13.765 19v-4.17q2.066-.081 3.098-.722t1.032-2.167v-.381q0-1.036-.588-1.581t-1.53-.545q-1.019 0-1.685.654-.668.654-.902 1.663L10 10.36a7.2 7.2 0 0 1 .68-1.595 5.3 5.3 0 0 1 1.163-1.39 5.8 5.8 0 0 1 1.726-.994Q14.574 6 15.909 6q1.36 0 2.483.409 1.125.409 1.935 1.144a4.9 4.9 0 0 1 1.242 1.772q.43 1.035.431 2.29 0 1.144-.366 2.07a5.187 5.187 0 0 1-2.457 2.753q-.837.435-1.752.6V19zm1.735 7q-1.348 0-1.924-.625T13 23.841v-.682q0-.909.576-1.534T15.5 21t1.924.625.576 1.534v.682q0 .909-.576 1.534T15.5 26'
    />
  </svg>
);
const ForwardRef = forwardRef(CurrencyNoneIcon);
export default ForwardRef;
