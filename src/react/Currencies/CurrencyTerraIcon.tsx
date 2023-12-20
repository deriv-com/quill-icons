import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const CurrencyTerraIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fill='#172852'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#FF6F03'
        d='M20.506 12.29c1.535.478 3.066 1.003 4.463 1.813l.094.05c.13.974.224 1.967.051 2.943-.702-.297-1.272-.82-1.867-1.283-1.145-.953-2.315-2.045-2.74-3.523'
      />
      <path
        fill='#FFD83D'
        d='M18.77 7.069c-1.908-.576-4.017-.574-5.89.126-.44.226-1.056.55-.997 1.133.131.602.696.93 1.2 1.224l.178.104c1.6.838 3.317 1.39 5.034 1.942.774.25 1.55.498 2.313.773 1.534.479 3.065 1.004 4.462 1.813-.029-.745-.318-1.445-.62-2.115-1.097-2.354-3.194-4.229-5.68-5M9.864 9.009c-1.208 1.012-2.098 2.379-2.64 3.85-.992 2.738-.58 5.934 1.057 8.34 1.451 2.178 3.856 3.72 6.461 4.053 4.315.678 8.973-2.143 10.149-6.392a76.68 76.68 0 0 0-.507.099c-1.027.203-2.06.407-3.112.374-3.087.052-6.12-1.307-8.25-3.52-1.776-1.836-2.851-4.278-3.158-6.804'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(CurrencyTerraIcon);
export default ForwardRef;
