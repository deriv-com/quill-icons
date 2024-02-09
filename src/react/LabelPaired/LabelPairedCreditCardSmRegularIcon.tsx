import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCreditCardSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.875 5.5a.85.85 0 0 0-.629.246.85.85 0 0 0-.246.629v.875h14v-.875a.85.85 0 0 0-.246-.629.85.85 0 0 0-.629-.246zM1 8.125v1.75h14v-1.75zm0 2.625v4.375q0 .383.246.629a.85.85 0 0 0 .629.246h12.25a.85.85 0 0 0 .629-.246.85.85 0 0 0 .246-.629V10.75zM.125 6.375q.027-.738.52-1.23.492-.493 1.23-.52h12.25q.738.027 1.23.52.493.492.52 1.23v8.75q-.027.738-.52 1.23-.492.493-1.23.52H1.875q-.738-.027-1.23-.52-.493-.492-.52-1.23zm2.625 7.438q.027-.411.438-.438h1.75q.41.027.437.438-.027.41-.437.437h-1.75q-.411-.027-.438-.437m3.5 0q.027-.411.438-.438h3.5q.41.027.437.438-.027.41-.437.437h-3.5q-.411-.027-.438-.437' />
    </g>
    <defs>
      <clipPath id='fc5a3df28fdf204acbbca675ec77af21__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCreditCardSmRegularIcon);
export default ForwardRef;
