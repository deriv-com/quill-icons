import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownToBracketLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m14.86 13.898-5 5a1.205 1.205 0 0 1-1.758 0l-5-5a1.205 1.205 0 0 1 0-1.757 1.205 1.205 0 0 1 1.757 0l2.891 2.851V6.75c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25v8.242l2.852-2.851a1.205 1.205 0 0 1 1.757 0c.508.468.508 1.289 0 1.757M2.75 19.25v2.5c0 .703.547 1.25 1.25 1.25h10c.664 0 1.25-.547 1.25-1.25v-2.5c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25v2.5c0 2.07-1.68 3.75-3.75 3.75H4c-2.07 0-3.75-1.68-3.75-3.75v-2.5C.25 18.586.797 18 1.5 18c.664 0 1.25.586 1.25 1.25' />
    </g>
    <defs>
      <clipPath id='6ea64e942cc18af0ca08be4027ef5464__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToBracketLgFillIcon);
export default ForwardRef;
