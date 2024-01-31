import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTwoLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.031 8.625q-1.64.04-2.773 1.133l-1.406 1.406q-.664.548-1.329 0-.546-.664 0-1.328L1.93 8.469Q3.61 6.789 6.03 6.75h.274q2.343.078 3.906 1.602 1.524 1.562 1.601 3.906-.038 2.383-1.757 4.023L3.57 22.375h8.243q.858.078.937.938-.079.858-.937.937H1.188q-.626-.039-.86-.586-.195-.586.235-1.016l8.242-7.734q1.093-1.094 1.133-2.656-.04-1.524-1.055-2.578-1.055-1.016-2.578-1.055z' />
    </g>
    <defs>
      <clipPath id='ed1d23e38e735d7c__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTwoLgBoldIcon);
export default ForwardRef;
