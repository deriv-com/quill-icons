import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEuroSignSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.438 10.313H1a.864.864 0 0 1-.875-.876c0-.464.383-.874.875-.874h.766c.793-2.27 3.007-3.938 5.578-3.938H8a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875h-.656c-1.586 0-2.98.902-3.664 2.188h3.445A.9.9 0 0 1 8 9.437c0 .493-.41.876-.875.876H3.188v.875h3.937a.9.9 0 0 1 .875.874c0 .493-.41.876-.875.876H3.68c.683 1.312 2.078 2.187 3.664 2.187H8a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875h-.656c-2.57 0-4.785-1.64-5.578-3.937H1a.864.864 0 0 1-.875-.876c0-.464.383-.874.875-.874h.438v-.876' />
    </g>
    <defs>
      <clipPath id='00d76032e3240f3938b3bf312d00fbc8__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEuroSignSmFillIcon);
export default ForwardRef;
