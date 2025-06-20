import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpFromBracketLgFillIcon = (
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
      <path d='m9.86 5.89 5 5c.507.47.507 1.29 0 1.758a1.205 1.205 0 0 1-1.758 0L10.25 9.797V18c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25V9.797l-2.89 2.851a1.205 1.205 0 0 1-1.758 0 1.205 1.205 0 0 1 0-1.757l5-5a1.205 1.205 0 0 1 1.757 0M2.75 19.25v2.5c0 .703.547 1.25 1.25 1.25h10c.664 0 1.25-.547 1.25-1.25v-2.5c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25v2.5c0 2.07-1.68 3.75-3.75 3.75H4c-2.07 0-3.75-1.68-3.75-3.75v-2.5C.25 18.586.797 18 1.5 18c.664 0 1.25.586 1.25 1.25' />
    </g>
    <defs>
      <clipPath id='955115d41fa1bbfa91dc0ba32dbc1e2e__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromBracketLgFillIcon);
export default ForwardRef;
