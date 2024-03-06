import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLaptopMobileSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.75 4.625a.85.85 0 0 0-.629.246.85.85 0 0 0-.246.629v6.125h7v.875H1.18q.273.82 1.175.875h7.52v.875h-7.52q-.901-.027-1.476-.602-.601-.6-.629-1.503.054-.465.52-.52H2V5.5q.027-.738.52-1.23.492-.493 1.23-.52h8.75q.738.027 1.23.52.493.492.52 1.23v.875h-.875V5.5a.85.85 0 0 0-.246-.629.85.85 0 0 0-.629-.246zm7.875 3.938v7.874q.027.411.438.438h4.374q.411-.027.438-.437V8.563q-.027-.411-.437-.438h-4.375q-.411.027-.438.438m-.875 0q.027-.547.383-.93.383-.356.93-.383h4.374q.547.027.93.383.356.382.383.93v7.874a1.43 1.43 0 0 1-.383.93 1.43 1.43 0 0 1-.93.383h-4.375a1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.382-.93z' />
    </g>
    <defs>
      <clipPath id='833b9fd5d20c6e6f3ca0846c1e17a851__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopMobileSmRegularIcon);
export default ForwardRef;
