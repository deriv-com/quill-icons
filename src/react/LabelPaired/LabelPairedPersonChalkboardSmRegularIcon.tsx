import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPersonChalkboardSmRegularIcon = (
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
      <path d='M4.844 5.281q.054.601.656.657.602-.056.656-.657-.054-.601-.656-.656-.602.054-.656.656m2.187 0q-.027.875-.765 1.313-.765.437-1.532 0-.738-.438-.765-1.313.027-.874.765-1.312.765-.438 1.532 0 .738.437.765 1.312M5.145 8.125q-.274 0-.52.11V12.5h1.75V8.125zm-.52 9.188q-.027.41-.437.437-.411-.027-.438-.437v-8.04l-1.367 2.57q-.219.33-.574.165-.355-.219-.192-.574L3.23 8.398q.63-1.094 1.915-1.148H9V5.063q.027-.547.383-.93.383-.356.93-.383h6.124q.547.027.93.383.356.383.383.93v6.125a1.43 1.43 0 0 1-.383.93 1.43 1.43 0 0 1-.93.382h-6.125a1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.382-.93V9h.875v2.188q.027.41.438.437h6.124q.411-.027.438-.437V5.062q-.027-.41-.437-.437h-6.125q-.411.027-.438.438V7.25h1.313q.41.027.437.438-.027.41-.437.437H7.25v9.188q-.027.41-.437.437-.411-.027-.438-.437v-3.938h-1.75z' />
    </g>
    <defs>
      <clipPath id='817550a5ef04595be9b0e90d73b4ece2__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPersonChalkboardSmRegularIcon);
export default ForwardRef;
