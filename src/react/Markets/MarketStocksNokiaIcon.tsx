import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksNokiaIcon = (
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
    <g clipPath='url(#2f9def5f1900fc1b342f5db84be633c3__a)'>
      <path
        fill='#F6F7F8'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#005AFF'
        d='M20.76 13.25v5.5h.825v-5.5zm-8.812-.094c-1.607 0-2.854 1.17-2.854 2.844 0 1.75 1.247 2.844 2.854 2.844S14.804 17.75 14.802 16a2.82 2.82 0 0 0-2.854-2.844M13.978 16c0 1.24-.909 2.061-2.03 2.061-1.122 0-2.03-.821-2.03-2.061 0-1.217.908-2.061 2.03-2.061s2.03.844 2.03 2.061M3.555 13.072v5.678h.842v-3.752l4.375 3.93v-1.177zM15.422 16l3.061 2.75h1.228L16.645 16l3.066-2.75h-1.228zm13.023 2.75h-.908l-.663-1.218h-3.006l-.663 1.218h-.908l1.1-2.03h3.045l-1.519-2.821.448-.827z'
      />
    </g>
    <defs>
      <clipPath id='2f9def5f1900fc1b342f5db84be633c3__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksNokiaIcon);
export default ForwardRef;
