import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCheckXlFillIcon = (
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
      <path d='M20.531 10.969c.61.562.61 1.547 0 2.11l-12 12c-.562.608-1.547.608-2.11 0l-6-6a1.445 1.445 0 0 1 0-2.11 1.445 1.445 0 0 1 2.11 0L7.5 21.89l10.922-10.922a1.445 1.445 0 0 1 2.11 0' />
    </g>
    <defs>
      <clipPath id='3d9eff3c88b18a9acb58c915cc0ca3fe__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCheckXlFillIcon);
export default ForwardRef;
