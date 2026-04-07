import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDerivBrandLogoXlFillIcon = (
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
      <path d='m17.531 23.906-.047.235c-.562 2.343-2.765 4.218-5.156 4.359H8.625c-3.328-.187-5.531-2.953-4.922-6.328l.281-1.5c.61-3.375 3.75-6.188 7.125-6.328l.329-.047h3.75l1.124-6.094 4.079-.703zm-6.562-5.812c-1.5.14-2.813 1.406-3.094 2.86l-.14.937c-.282 1.547.75 2.859 2.343 2.859H12c.75 0 1.453-.656 1.64-1.406l.891-5.25H10.97' />
    </g>
    <defs>
      <clipPath id='2decf930af9ad88a8393da2a8035c26b__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDerivBrandLogoXlFillIcon);
export default ForwardRef;
