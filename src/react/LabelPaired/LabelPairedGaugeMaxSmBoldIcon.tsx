import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGaugeMaxSmBoldIcon = (
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
      <path d='M7 16.438a5.68 5.68 0 0 0 4.922-2.844 5.71 5.71 0 0 0 0-5.688C10.882 6.156 9.023 5.063 7 5.063c-2.05 0-3.91 1.093-4.95 2.843a5.71 5.71 0 0 0 0 5.688A5.7 5.7 0 0 0 7 16.438M7 3.75c2.488 0 4.785 1.34 6.043 3.5 1.258 2.188 1.258 4.84 0 7A6.95 6.95 0 0 1 7 17.75a6.96 6.96 0 0 1-6.07-3.5c-1.258-2.16-1.258-4.812 0-7A7.02 7.02 0 0 1 7 3.75m.875 3.063c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875M7 14.906a1.53 1.53 0 0 1-1.531-1.531c0-.82.683-1.531 1.531-1.531.273 0 .52.082.766.219l3.007-2.051a.63.63 0 0 1 .903.164c.219.3.136.71-.164.902l-3.008 2.078c0 .082.027.137.027.219 0 .848-.71 1.531-1.531 1.531m3.5-6.781c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875m-7.437 1.75a.9.9 0 0 1 .874.875c0 .492-.41.875-.874.875a.864.864 0 0 1-.876-.875c0-.465.383-.875.876-.875m2.187-1.75c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875' />
    </g>
    <defs>
      <clipPath id='a579210b1655fddb31e76f175430ffda__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGaugeMaxSmBoldIcon);
export default ForwardRef;
