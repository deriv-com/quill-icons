import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpArrowDownLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m7.36 7.14 3.75 3.75c.507.47.507 1.29 0 1.758a1.205 1.205 0 0 1-1.758 0L7.75 11.047V23c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25V11.047l-1.64 1.601a1.205 1.205 0 0 1-1.758 0 1.205 1.205 0 0 1 0-1.757l3.75-3.75a1.205 1.205 0 0 1 1.757 0m13.75 13.008-3.75 3.75a1.205 1.205 0 0 1-1.758 0l-3.75-3.75a1.205 1.205 0 0 1 0-1.757 1.205 1.205 0 0 1 1.757 0l1.641 1.601V8c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25v11.992l1.602-1.601a1.205 1.205 0 0 1 1.757 0c.508.468.508 1.289 0 1.757' />
    </g>
    <defs>
      <clipPath id='3ac6318839597bbe49572dc98ca6058d__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpArrowDownLgFillIcon);
export default ForwardRef;
