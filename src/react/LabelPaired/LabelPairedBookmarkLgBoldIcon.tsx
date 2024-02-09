import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBookmarkLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 7.375q.039-.781.547-1.328.546-.508 1.328-.547v17.227l5.078-3.594q.548-.353 1.094 0l5.078 3.594V7.375H1.875V5.5h11.25q.78.039 1.328.547.508.546.547 1.328v17.188q0 .547-.508.82a1 1 0 0 1-.976-.04L7.5 21.048l-6.016 4.297a1 1 0 0 1-.976.039.98.98 0 0 1-.508-.82z' />
    </g>
    <defs>
      <clipPath id='56662e9108ff81ab21a20096ef5dc90b__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookmarkLgBoldIcon);
export default ForwardRef;
