import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleCaretUpMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8 5a7.2 7.2 0 0 0-3.5.938A7.2 7.2 0 0 0 1.938 8.5a7 7 0 0 0 0 7A7.2 7.2 0 0 0 4.5 18.063 7.2 7.2 0 0 0 8 19a7.2 7.2 0 0 0 3.5-.937 7.2 7.2 0 0 0 2.563-2.563 7 7 0 0 0 0-7A7.2 7.2 0 0 0 11.5 5.938 7.2 7.2 0 0 0 8 5m0 15q-2.187-.03-4-1.062Q2.188 17.875 1.063 16 0 14.095 0 12t1.063-4Q2.188 6.124 4 5.063 5.813 4.03 8 4q2.188.03 4 1.063Q13.813 6.125 14.938 8 16 9.906 16 12t-1.062 4Q13.813 17.875 12 18.938 10.188 19.968 8 20M8 9q.47 0 .781.344l3 3.219a.87.87 0 0 1 .219.593q0 .344-.25.594a.81.81 0 0 1-.594.25H4.875a.85.85 0 0 1-.625-.25.81.81 0 0 1-.25-.594q0-.343.219-.594l3-3.218Q7.53 9 8 9m-.062 1.031L5.188 13h5.625l-2.75-2.969Q8.03 10.001 8 10q-.031 0-.062.031' />
    </g>
    <defs>
      <clipPath id='5a15f55f995fb656__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleCaretUpMdRegularIcon);
export default ForwardRef;
