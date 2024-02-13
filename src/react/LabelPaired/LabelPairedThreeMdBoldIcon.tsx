import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThreeMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 5.75Q.063 5.063.75 5h8q.5.03.688.469.186.468-.157.812L4.625 10.75h1.25q1.75.03 2.906 1.219Q9.97 13.125 10 14.875q-.03 1.75-1.219 2.906Q7.625 18.97 5.875 19H3.031a2.97 2.97 0 0 1-1.687-.5 3.3 3.3 0 0 1-1.219-1.281l-.031-.125q-.25-.657.312-1 .657-.25 1 .312l.063.125Q2 17.47 3.03 17.5h2.844q1.125-.03 1.844-.781.75-.72.781-1.844-.03-1.125-.781-1.844-.72-.75-1.844-.781H2.75q-.5-.03-.687-.469-.188-.468.156-.812L6.875 6.5H.75Q.063 6.437 0 5.75' />
    </g>
    <defs>
      <clipPath id='eab89fd9d112ea548f9ba381674c4817__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThreeMdBoldIcon);
export default ForwardRef;
