import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const CurrencyEursIcon = (
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
    <g clipPath='url(#b1db234210c84a5fef50f1dc4ff8018c__a)'>
      <path
        fill='#fff'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#2469E4'
        fillRule='evenodd'
        d='M0 16c0 8.837 7.163 16 16 16a15.95 15.95 0 0 0 6.351-1.31q-1.16-.12-2.3-.358-2.546-.547-4.664-1.668-4.414-2.34-6.21-6.849H3.84l1.621-3.835H8.23a18 18 0 0 1-.15-2.266q0-1.095.075-1.967H3.84l1.621-3.811h3.466q1.646-4.83 6.11-7.446A17.4 17.4 0 0 1 20.042.515 16 16 0 0 0 16 0C7.163 0 0 7.163 0 16M25.44 3.08c-4.917.63-9.81 2.669-11.63 6.857h14.82l-1.647 3.811H12.868q-.1.846-.1 2.067t.2 2.165h12.07l-1.646 3.835h-8.903c2.021 3.333 7.176 5.497 12.571 5.747A15.96 15.96 0 0 0 32 16c0-5.306-2.583-10.009-6.56-12.92'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='b1db234210c84a5fef50f1dc4ff8018c__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(CurrencyEursIcon);
export default ForwardRef;
