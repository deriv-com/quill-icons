import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBullhornSmRegularIcon = (
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
      <path d='M11.375 4.953q0-.137-.137-.191-.136-.056-.246.054l-.656.684a8.3 8.3 0 0 1-4.211 2.406v4.84a8.15 8.15 0 0 1 4.21 2.379l.657.684q.11.109.246.054.137-.054.137-.191zM5.25 12.582V8.043a4 4 0 0 1-.465.027l-.82.055H1.75a.85.85 0 0 0-.629.246A.85.85 0 0 0 .875 9v2.625q0 .383.246.629a.85.85 0 0 0 .629.246h2.215l.793.055q.246 0 .492.027m5.113-8.367q.575-.52 1.203-.274.63.247.684 1.012v10.719q-.055.766-.684 1.012-.629.245-1.203-.274l-.656-.683a7.37 7.37 0 0 0-4.457-2.27v2.762q-.027.656-.437 1.093-.438.411-1.094.438H3.28q-.656-.027-1.094-.437-.41-.438-.437-1.094v-2.844q-.738-.027-1.23-.52-.493-.492-.52-1.23V9q.027-.738.52-1.23.492-.493 1.23-.52h2.188l.792-.055a7.7 7.7 0 0 0 2.707-.656 7.5 7.5 0 0 0 2.27-1.64zm-7.738 9.16v2.844q.054.601.656.656h.438q.601-.055.656-.656v-2.817l-.437-.027zM13.563 9q.41.027.437.438v1.75q-.027.41-.437.437-.411-.027-.438-.437v-1.75q.027-.411.438-.438' />
    </g>
    <defs>
      <clipPath id='46a82cb32e6c81039442f167f98f0393__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBullhornSmRegularIcon);
export default ForwardRef;
