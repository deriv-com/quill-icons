import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivDarkPositionsHistoryIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 96 96'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#242828'
      d='M72 16H24a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8V24a8 8 0 0 0-8-8'
    />
    <path fill='#323738' d='M72 20H24a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8' />
    <path
      fill='#6E6E6E'
      d='m39.137 40.354.277.232 8 8a2 2 0 0 1-2.551 3.06l-.277-.232L40 46.828V66a2 2 0 1 1-4 0V46.828l-4.586 4.586a2 2 0 0 1-2.551.232l-.277-.232a2 2 0 0 1-.232-2.551l.232-.277 8-8a2 2 0 0 1 2.551-.232M58 40a2 2 0 0 1 2 2l-.004 19.168 4.59-4.582a2 2 0 1 1 2.828 2.828l-8 8a2 2 0 0 1-2.828 0l-8-8a2 2 0 1 1 2.828-2.828l4.582 4.582L56 42a2 2 0 0 1 2-2'
    />
  </svg>
);
const ForwardRef = forwardRef(DerivDarkPositionsHistoryIcon);
export default ForwardRef;
