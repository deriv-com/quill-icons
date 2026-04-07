import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDerivBrandLogoSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m10.227 14.195-.028.137c-.328 1.367-1.613 2.461-3.008 2.543h-2.16c-1.941-.11-3.226-1.723-2.87-3.691l.163-.875c.356-1.97 2.188-3.61 4.156-3.692l.192-.027h2.187l.657-3.555 2.379-.41zm-3.829-3.39c-.875.082-1.64.82-1.804 1.668l-.082.547c-.164.902.437 1.668 1.367 1.668H7c.438 0 .848-.383.957-.82l.52-3.063H6.398' />
    </g>
    <defs>
      <clipPath id='171ef040050a6547167336419019d11a__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDerivBrandLogoSmFillIcon);
export default ForwardRef;
