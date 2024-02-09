import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPersonChalkboardSmBoldIcon = (
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
      <path d='M5.5 6.375q-.738-.027-1.148-.656a1.4 1.4 0 0 1 0-1.313q.41-.629 1.148-.656.738.027 1.148.656.33.657 0 1.313-.41.629-1.148.656m-.383 2.188h-.054v3.5h.875v-3.5zm-.054 8.53q-.056.602-.657.657-.601-.055-.656-.656V9.875l-1.176 2.078q-.356.492-.902.246-.492-.355-.246-.902L3.039 8.48q.328-.573.875-.902a2.3 2.3 0 0 1 1.203-.328H9V5.063q.027-.547.383-.93.383-.356.93-.383h6.124q.547.027.93.383.356.383.383.93v6.125a1.43 1.43 0 0 1-.383.93 1.43 1.43 0 0 1-.93.382h-6.125a1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.382-.93V9.876h1.313v1.313h6.124V5.062h-6.125V7.25h.657q.601.054.656.656-.055.601-.656.657H7.25v8.53q-.054.602-.656.657-.601-.055-.657-.656v-3.719h-.875z' />
    </g>
    <defs>
      <clipPath id='0a412ea288488835811ba79e2d4b50fe__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPersonChalkboardSmBoldIcon);
export default ForwardRef;
